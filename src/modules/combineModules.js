import { Container } from './container.module';
import Chat from './Chat/chat.module';
import Profile from './Profile/profile.module';

export const combineModules = new Container().subsctibe(Chat).subsctibe(Profile);

export const routes = [
  {
    path: '/',
    module: 'Chat',
    name: 'Home'
  },
  {
    path: '/chat',
    module: 'Chat',
    name: 'Chat'
  },
  {
    path: '/profile',
    module: 'Profile',
    name: 'Profile'
  }
];
