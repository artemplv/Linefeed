class ApplicationController < ActionController::API
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
end
