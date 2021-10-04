import { roles } from "../../constants/ROLES";
import DefaultHeader from "../../components/header";
import DefaultSider from "../../components/sider";
import ModuleAccess from "../../components/moduleAccess";
import ModuleDenied from "../../components/moduleDenied";

class Chat {
    constructor() {
        this.name = "Chat";
        this.permissions = {
            header: [roles.user, roles.moderator, roles.administrator],
            sider: [roles.user, roles.moderator, roles.administrator],
            content: [roles.user, roles.moderator, roles.administrator],
        };
        this.roles = [roles.user, roles.moderator, roles.administrator];
        this.header = (props) => (
            <ModuleAccess permissions={this.permissions.header} denied={<ModuleDenied />}>
                <DefaultHeader {...props} />
            </ModuleAccess>
        );
        this.sider = (props) => <DefaultSider {...props} />;
        this.reducers = () => ({});
        this.sagas = () => [];
    }
}

export default new Chat();
