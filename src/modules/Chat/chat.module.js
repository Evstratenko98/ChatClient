import { roles } from "../../constants/ROLES";
import DefaultHeader from "../../components/header";
import DefaultSider from "../../components/sider";

class Chat {
    constructor() {
        this.name = "Chat";
        this.roles = [roles.user, roles.moderator, roles.administrator];
        this.header = (props) => <DefaultHeader {...props} />;
        this.sider = (props) => <DefaultSider {...props} />;
        this.reducers = () => ({});
        this.sagas = () => [];
    }
}

export default new Chat();
