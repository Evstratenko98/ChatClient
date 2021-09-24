import React from "react";
import Access from "../../pages/Access";
import Download from "../download";
import ModuleDenied from "../ModuleDenied";

const Authorize = ({ module, userRole }) => {
    const permission = module.roles.includes(userRole);

    permission === false ? <ModuleDenied /> : <Access module={module} />;

    return <Download />;
};

export default Authorize;
