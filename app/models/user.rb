# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  has_secure_password

  validates :first_name, :last_name,
    presence: true,
    length: { maximum: 255 }
  validates :email,
    presence: true,
    uniqueness: true,
    length: { in: 3..255 },
    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..255 }, allow_nil: true

  before_validation :ensure_session_token

  has_many :workspace_users,
    dependent: :destroy
  has_many :workspaces,
    through: :workspace_users

  has_many :own_workspaces,
    class_name: 'Workspace',
    foreign_key: :owner_id,
    dependent: :nullify
  
  has_many :own_channels,
    class_name: 'Channel',
    foreign_key: :owner_id,
    dependent: :nullify

  has_many :messages,
    class_name: 'Message',
    foreign_key: :author_id,
    dependent: :destroy

  has_one_attached :profile_picture

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user&.authenticate(password)
  end

  def reset_session_token!
    self.update!(session_token: generate_session_token)
    self.session_token
  end

  private

  def generate_session_token
    loop do
      token = SecureRandom.urlsafe_base64
      if !User.exists?({ session_token: token })
        return token
      end
    end
  end
  
  def ensure_session_token
    self.session_token ||= generate_session_token
  end
end
