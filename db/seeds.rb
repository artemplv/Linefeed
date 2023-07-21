ApplicationRecord.transaction do 
  puts "Destroying tables..."
  
  User.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')

  puts "Creating users..."
  
  User.create!(
    first_name: 'John',
    last_name: 'Doe',
    email: 'johndoe@example.com', 
    password: 'password'
  )

  9.times do
    User.create!({
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      email: Faker::Internet.unique.email,
      password: 'password'
    })
  end

  puts "Done!"
end
