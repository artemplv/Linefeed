import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import {
  withAuth,
  withoutAuth,
} from 'components/hocs/secureWrapper';

import HomePage from 'components/HomePage';
import LoginFormPage from 'components/LoginFormPage';
import SignupFormPage from 'components/SignupFormPage';
import WorkspacesPage from 'components/WorkspacesPage';
import WorkspaceLayout from 'components/WorkspaceLayout';
import NewWorkspace from 'components/NewWorkspace';
import WorkspaceIndex from 'components/WorkspaceIndex';
import Channel from 'components/Channel';
import Chat from 'components/Chat';
import NewChat from 'components/NewChat';

import './App.scss';

const router = createBrowserRouter([
  {
    path: '/',
    Component: withoutAuth(HomePage),
    errorElement: <h2>Error</h2>,
  },
  {
    path: '/signin',
    Component: LoginFormPage,
  },
  {
    path: '/signup',
    Component: withoutAuth(SignupFormPage),
  },
  {
    path: '/workspaces',
    Component: withAuth(WorkspacesPage),
  },
  {
    path: '/workspaces/:workspaceId',
    Component: withAuth(WorkspaceLayout),
    // errorElement: <h2>Error</h2>,
    children: [
      {
        errorElement: <h2>Error</h2>,
        children: [
          {
            index: true,
            element: <WorkspaceIndex />,
          },
          {
            path: 'new',
            element: <NewWorkspace />,
          },
          {
            path: 'channels/:channelId',
            element: <Channel />,
          },
          {
            path: 'chats/new',
            element: <NewChat />,
          },
          {
            path: 'chats/:chatId',
            element: <Chat />,
          },
          {
            path: '*',
            element: <h2>404 Not Found</h2>,
          },
        ],
      },
    ],
  },
  // {
  //   path: '*',
  //   element: <h2>404 Not Found</h2>,
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
