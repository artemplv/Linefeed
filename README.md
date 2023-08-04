# Linefeed

## [Linefeed live](https://slack-clone-ja8s.onrender.com/)

## Description

Linefeed is a collaborative business messaging application inspired by Slack. On Linefeed, users can create workspaces for their teams, organize their chats in different channels and message directly to other users on the same workspace.


## Technology

### React-Redux

The Linefeed stack uses ``React`` and ``Redux`` to render and manage the state of the app's frontend.

### Rails

Linefeed serves information from the database to the frontend using ``Rails``.

ActiveCable (websocket) is utilized to implement live messaging.

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

