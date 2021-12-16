/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/react-in-jsx-scope */
import DefaultHeader from '../../components/header';
import ProfileSider from './components/sider';
import ProfileContent from './components/content';
import ModuleAccess from '../../components/moduleAccess';
import ModuleDenied from '../../components/moduleDenied';
import { roles } from '../../constants/ROLES';

class Profile {
  constructor() {
    this.name = 'Profile';
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
        <ProfileSider {...props} />
      </ModuleAccess>
    );
    this.content = (props) => (
      <ModuleAccess permissions={this.permissions.header} denied={<ModuleDenied />}>
        <ProfileContent {...props} />
      </ModuleAccess>
    );
    this.reducers = () => ({});
    this.sagas = () => [];
  }
}

export default new Profile();
