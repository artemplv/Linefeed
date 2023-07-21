class Api::SessionsController < ApplicationController
  def show
    if current_user
      render json: { user: current_user.slice('id', 'email', 'first_name', 'last_name') }
    else
      render json: { user: nil }
    end
  end

  def create
    @user = User.find_by_credentials(params[:credential], params[:password])

    if @user
      login!(@user)
      render json: { user: current_user.slice('id', 'email', 'first_name', 'last_name') }
    else
      render json: { errors: ['The provided credentials were invalid.'] }, status: :unauthorized
    end
  end

  def destroy
    if current_user
      logout!
      render json: { message: 'success' }
    end
  end
end
