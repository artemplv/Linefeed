class ApplicationController < ActionController::API
  include ActionController::RequestForgeryProtection
  protect_from_forgery with: :exception

  rescue_from StandardError, with: :unhandled_error
  rescue_from ActionController::InvalidAuthenticityToken,
    with: :invalid_authenticity_token

  before_action :attach_authenticity_token
  
  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    current_user.reset_session_token! if current_user
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    if !current_user
      render json: { message: 'Unauthorized' }, status: :unauthorized
    end
  end

  def require_workspace_membership
    workspace_id = params[:workspace_id] || params[:id]
    
    workspace = Workspace
      .joins(:workspace_users)
      .where('workspaces.id = ?', workspace_id)
      .where('workspace_users.user_id = ?', current_user.id)

    if workspace.blank?
      render json: { message: 'Unauthorized' }, status: :unauthorized
    end
  end

  def from_template(template, locals = {})
    JSON.parse(self.class.render(:json, template: template, locals: locals))
  end

  private

  def invalid_authenticity_token
    render json: { message: 'Invalid authenticity token' },
      status: :unprocessable_entity
  end

  def unhandled_error(error)
    if request.accepts.first.html?
      raise error
    else
      @message = "#{error.class} - #{error.message}"
      @stack = Rails::BacktraceCleaner.new.clean(error.backtrace)
      render 'api/errors/internal_server_error', status: :internal_server_error

      logger.error "\n#{@message}:\n\t#{@stack.join("\n\t")}\n"
    end
  end

  def attach_authenticity_token
    headers['X-CSRF-Token'] = masked_authenticity_token(session)
  end
end
