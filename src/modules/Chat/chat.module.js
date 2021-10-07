/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/react-in-jsx-scope */
import DefaultHeader from '../../components/header';
import DefaultSider from './components/sider';
import ChatContent from './components/content';
import ModuleAccess from '../../components/moduleAccess';
import ModuleDenied from '../../components/moduleDenied';

import RoomsReducer from './redux/reducers/rooms';
import RoomReducer from './redux/reducers/room';
import MessagesReducer from './redux/reducers/messages';

import { RoomsSaga } from './redux/saga/rooms';
import { MessagesSaga } from './redux/saga/messages';
import { roles } from '../../constants/ROLES';

class Chat {
  constructor() {
    this.name = 'Chat';
    this.permissions = {
      header: [roles.user, roles.moderator, roles.administrator],
      sider: [roles.user, roles.moderator, roles.administrator],
      content: [roles.user, roles.moderator, roles.administrator]
    };
    this.roles = [roles.user, roles.moderator, roles.administrator];
    this.header = (props) => (
      <ModuleAccess permissions={this.permissions.header} denied={<ModuleDenied />}>
        <DefaultHeader {...props} />
      </ModuleAccess>
    );
    this.sider = (props) => (
      <ModuleAccess permissions={this.permissions.header} denied={<ModuleDenied />}>
        <DefaultSider {...props} />
      </ModuleAccess>
    );
    this.content = (props) => (
      <ModuleAccess permissions={this.permissions.header} denied={<ModuleDenied />}>
        <ChatContent {...props} />
      </ModuleAccess>
    );
    this.reducers = () => ({
      rooms: RoomsReducer,
      room: RoomReducer,
      messages: MessagesReducer
    });
    this.sagas = () => [RoomsSaga(), MessagesSaga()];
  }
}

export default new Chat();
