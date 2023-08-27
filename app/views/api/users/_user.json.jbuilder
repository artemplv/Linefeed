json.extract! user, :id, :email, :first_name, :last_name
json.pictureUrl user.profile_picture.attached? ? user.profile_picture.url : nil
