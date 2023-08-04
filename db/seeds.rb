require "open-uri"

# ApplicationRecord.transaction do
  puts "Destroying tables..."
  
  User.destroy_all
  Workspace.destroy_all
  WorkspaceUser.destroy_all
  Channel.destroy_all
  ChannelMessage.destroy_all
  Message.destroy_all

  puts "Resetting primary keys..."

  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('workspaces')

  puts "Creating users..."
  
  default_user = User.create!(
    first_name: 'John',
    last_name: 'Doe',
    email: 'johndoe@example.com',
    password: 'password'
  )
  default_user.profile_picture.attach(
    io: URI.open('https://slack-clone-artemplv-seed.s3.amazonaws.com/profile_logo_.jpg'),
    filename: 'default-user-avatar.jpg'
  )

  # id = 2
  frodo = User.create!(
    first_name: 'Frodo',
    last_name: 'Baggins',
    email: 'frodo@example.com',
    password: 'password'
  )
  frodo.profile_picture.attach(
    io: URI.open('https://slack-clone-artemplv-seed.s3.amazonaws.com/frodo-avatar.jpg'),
    filename: 'frodo-avatar.jpg'
  )

  # id = 3
  gandalf = User.create!(
    first_name: 'Gandalf',
    last_name: 'the Grey',
    email: 'gandalf@example.com',
    password: 'password'
  )
  gandalf.profile_picture.attach(
    io: URI.open('https://slack-clone-artemplv-seed.s3.amazonaws.com/gandalf-avatar.jpg'),
    filename: 'gandalf-avatar.jpg'
  )

  # id = 4
  aragorn = User.create!(
    first_name: 'Aragorn',
    last_name: '(Strider)',
    email: 'aragorn@example.com',
    password: 'password'
  )
  aragorn.profile_picture.attach(
    io: URI.open('https://slack-clone-artemplv-seed.s3.amazonaws.com/aragorn-avatar.jpg'),
    filename: 'aragorn-avatar.jpg'
  )

  # id = 5
  legolas = User.create!(
    first_name: 'Legolas',
    last_name: 'Greenleaf',
    email: 'legolas@example.com',
    password: 'password'
  )
  legolas.profile_picture.attach(
    io: URI.open('https://slack-clone-artemplv-seed.s3.amazonaws.com/legolas-avatar.jpg'),
    filename: 'legolas-avatar.jpg'
  )

   # id = 6
   gimli = User.create!(
    first_name: 'Gimli',
    last_name: 'son of Gloin',
    email: 'gimli@example.com',
    password: 'password'
  )
  gimli.profile_picture.attach(
    io: URI.open('https://slack-clone-artemplv-seed.s3.amazonaws.com/gimli-avatar.jpg'),
    filename: 'gimli-avatar.jpg'
  )

   # id = 7
   samwise = User.create!(
    first_name: 'Samwise',
    last_name: 'Gamgee',
    email: 'samwise@example.com',
    password: 'password'
  )
  samwise.profile_picture.attach(
    io: URI.open('https://slack-clone-artemplv-seed.s3.amazonaws.com/samwise-avatar.jpg'),
    filename: 'samwise-avatar.jpg'
  )
  

  # 9.times do
  #   User.create!({
  #     first_name: Faker::Name.first_name,
  #     last_name: Faker::Name.last_name,
  #     email: Faker::Internet.unique.email,
  #     password: 'password'
  #   })
  # end

  puts "Creating workspaces..."

  mew = Workspace.create!({
    name: 'Middle-earth',
    owner_id: 2,
  });
  mew.picture.attach(
    io: URI.open('https://slack-clone-artemplv-seed.s3.amazonaws.com/middle-earth-pic.jpg'),
    filename: 'middle-earth-pic.jpg'
  )

  6.times do |i|
    WorkspaceUser.create!({
      workspace_id: 1,
      user_id: i + 2,
    });  
  end

  puts "Done!"
# end
