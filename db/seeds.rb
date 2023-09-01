require "open-uri"

# ApplicationRecord.transaction do
  puts "Destroying tables..."
  
  User.destroy_all
  Workspace.destroy_all
  WorkspaceUser.destroy_all
  Channel.destroy_all
  ChannelMessage.destroy_all
  Chat.destroy_all
  ChatMessage.destroy_all
  Message.destroy_all

  puts "Resetting primary keys..."

  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('workspaces')
  ApplicationRecord.connection.reset_pk_sequence!('channels')
  ApplicationRecord.connection.reset_pk_sequence!('chats')
  ApplicationRecord.connection.reset_pk_sequence!('messages')

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

  # id = 4
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

  # id = 5
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

  # id = 6
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

  # id = 7
  arwen = User.create!(
    first_name: 'Arwen',
    last_name: 'Undómiel',
    email: 'arwen@example.com',
    password: 'password'
  )
  arwen.profile_picture.attach(
    io: URI.open('https://slack-clone-artemplv-seed.s3.amazonaws.com/arwen-avatar.jpg'),
    filename: 'arwen-avatar.jpg'
  )

   # id = 8
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


  # 9.times do
  #   User.create!({
  #     first_name: Faker::Name.first_name,
  #     last_name: Faker::Name.last_name,
  #     email: Faker::Internet.unique.email,
  #     password: 'password'
  #   })
  # end

  puts "Creating workspaces..."

  # id = 1
  mew = Workspace.create!({
    name: 'Fellowship Studios',
    owner_id: 2,
  });
  mew.picture.attach(
    io: URI.open('https://slack-clone-artemplv-seed.s3.amazonaws.com/middle-earth-pic.jpg'),
    filename: 'middle-earth-pic.jpg'
  )

  8.times do |i|
    WorkspaceUser.create!({
      workspace_id: 1,
      user_id: i + 1,
    });
  end

  puts "Creating channels..."

  # id = 1
  Channel.create!({
    name: 'Fellowship of the Ring',
    description: 'A channel for general announcements and important updates for the entire team.',
    workspace_id: 1,
    owner_id: 2,
  });

  # id = 2
  Channel.create!({
    name: "Gandalf's Guidance",
    description: 'A channel dedicated to providing tips and guidance on using the tech stack effectively.',
    workspace_id: 1,
    owner_id: 2,
  });

  # id = 3
  Channel.create!({
    name: "Elven Archers",
    description: 'A channel for sharing and discussing coding and technical topics among developers.',
    workspace_id: 1,
    owner_id: 2,
  });

  # id = 4
  Channel.create!({
    name: "Gimli's Hammer",
    description: 'A channel for discussing and resolving technical issues or bugs.',
    workspace_id: 1,
    owner_id: 2,
  });

  # id = 5
  Channel.create!({
    name: "Dwarven Delights",
    description: 'A channel for sharing interesting articles and resources about programming.',
    workspace_id: 1,
    owner_id: 2,
  });

  # id = 6
  Channel.create!({
    name: "Boromir's Bold Ideas",
    description: 'A channel for proposing and discussing new features or improvements.',
    workspace_id: 1,
    owner_id: 2,
  });

  puts "Creating messages..."

  # id = 1
  Message.create!({
    body: "Hey everyone! 🌟 Welcome to the #Fellowship of the Ring channel! This is where we'll discuss important updates and announcements for our team. Let's work together to achieve our goals! 💪",
    author_id: 2,
    workspace_id: 1,
  });

  # id = 2
  Message.create!({
    body: "Hello, everyone! 🌿 As the loyal supporter of our fellowship, I'll be there for you all, offering help and encouragement whenever needed. Together, we'll overcome any obstacles!",
    author_id: 3,
    workspace_id: 1,
  });

  # id = 3
  Message.create!({
    body: "Greetings, dear friends! 🧙‍♂️ I shall be the guide in our journey. If you have any questions or need assistance, feel free to reach out to me. May the light of knowledge shine upon us! 🔥",
    author_id: 4,
    workspace_id: 1,
  });

  # id = 4
  Message.create!({
    body: "Good to be here! 👋 As the leader of our fellowship, I'll ensure we stay on the right path and make progress in our endeavors. Feel free to share your ideas and thoughts. Let's inspire each other!",
    author_id: 5,
    workspace_id: 1,
  });

  # id = 5
  Message.create!({
    body: "Hello, everyone! 🏹 I'm excited to bring my skills as an archer to our fellowship. If you need help with any technical aspects, just let me know. We shall hit our targets together! 🎯",
    author_id: 6,
    workspace_id: 1,
  });

  # id = 6
  Message.create!({
    body: "Greetings, dear friends! 🌹 As a member of our fellowship, I bring with me the grace and wisdom of the elves. If any of you need assistance or guidance, feel free to seek me out. Together, we shall create a workspace of unity and harmony, embracing the diversity of our talents. May the stars shine upon our endeavors and light our path to success! 🌟🧝‍♀️",
    author_id: 7,
    workspace_id: 1,
  });

  # id = 7
  Message.create!({
    body: "Well met, fellow members! 🪓 I'll lend my strength and expertise to forge strong solutions for our team. Let's build robust foundations together! 💪",
    author_id: 8,
    workspace_id: 1,
  });

  7.times do |i|
    ChannelMessage.create!({
      channel_id: 1,
      message_id: i + 1,
    });
  end

  puts "Done!"
# end
