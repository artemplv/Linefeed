# Linefeed

## [Linefeed live](https://linefeed.onrender.com)

## Description

Linefeed is a collaborative business messaging application inspired by Slack. On Linefeed, users can create workspaces for their teams, organize their chats in different channels, and message directly to other users on the same workspace.


## Technology

### React-Redux

The Linefeed stack uses ``React`` and ``Redux`` to render and manage the state of the app's frontend.

### Rails

Linefeed serves information from the database to the frontend using ``Rails``.

Action Cable, which integrates WebSockets with the rest of the application, is utilized to implement live messaging.

### PostgreSQL

PostgreSQL is used to store the app's data. Active Storage is used to store images with Amazon Web Services and associate them with users and workspaces.

## Features

### User Authentication

Users can sign up for an account that is secured with password encryption.

<img width="600" alt="Screen Shot 2023-08-04 at 15 42 55" src="https://github.com/artemplv/Linefeed/assets/48654322/d3d97124-219b-466e-9f6a-42955fdd341e">

### Workspaces

Users can have different workspaces in order to organize work with different teams and different users.

<img width="600" alt="Screen Shot 2023-08-04 at 15 58 09" src="https://github.com/artemplv/Linefeed/assets/48654322/abb8588e-66da-4b36-bb26-c7916de74902">


The process of creating a workspace is broken down into a few steps that guide you through the process. It also includes a step where you can add users to the new workspace.

<img width="600" alt="Screen Shot 2023-08-04 at 15 59 30" src="https://github.com/artemplv/Linefeed/assets/48654322/8a1f37b6-f2a7-44f4-beb4-7515ca20045c">


### Channels

Users can create channels within a particular workspace to have chat discussions. Channels is a full CRUD feature — users can see, create, update and delete channels.

<img width="600" alt="Screen Shot 2023-08-04 at 16 22 28" src="https://github.com/artemplv/Linefeed/assets/48654322/b56c2b22-0057-41b8-8647-8f102b7bc875">


### Live messaging

Users can chat in real-time in channels and direct messages. This feature is implemented using websocket connections.

![ezgif-5-edb25d7947](https://github.com/artemplv/Linefeed/assets/48654322/41127c19-7b7d-4419-9169-05b8f42d4f0d)

## Code Snippets

### Controllers

Here is an example of a ``create`` controller for messages. As soon as message is saved to a database, it is broadcasted to corresponding channel subscribers through websocket connection.

```Ruby
def create
    workspace_id = params[:workspace_id]
    @message = Message.new({
      **message_params,
      workspace_id: workspace_id,
      author_id: current_user.id
    })

    ActiveRecord::Base.transaction do
      if params[:channel_id]
        @channel = Channel.find(params[:channel_id])
        @message.channel = @channel
      end
      @message.save!
    end

    if params[:channel_id]
      ChannelsChannel.broadcast_to @message.channel,
        type: 'RECEIVE_MESSAGE',
        **from_template('api/messages/show', message: @message)
    end

    render json: nil, status: :ok
  end
```

### Components

Here is how React's `useEffect` hook is used to handle websocket connections for channels. `useRef` hook is also used to scroll to the bottom of the messages container when a user sends a message to a channel.

```JavaScript
  const scrollToBottom = () => {
    msgContainerRef.current.scrollTo(0, msgContainerRef.current.scrollHeight);
  };

  useEffect(() => {
    const subscription = wsConsumer.subscriptions.create(
      { channel: 'ChannelsChannel', id: channelId },
      {
        received: ({ type, message, id }) => {
          switch (type) {
            case 'RECEIVE_MESSAGE':
              dispatch(setMessage(message));
              if (message.authorId === currentUserId) {
                scrollToBottom();
              }
              break;
            case 'DESTROY_MESSAGE':
              dispatch(removeMessage(id));
              break;
            default:
              break;
          }
        },
      },
    );

    const fetchMessages = async () => {
      await dispatch(getMessages(workspaceId, channelId));
      scrollToBottom();
    };

    fetchMessages();

    return () => {
      subscription?.unsubscribe();
    };
  }, [
    channelId,
  ]);
```

