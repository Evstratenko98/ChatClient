import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

const NoPage = () => {
    const history = useHistory();

    const returnHome = () => history.push("/");

    return (
        <div className="noPage">
            <h1>Страница не найдена</h1>
            <Button type="primary" onClick={returnHome} style={{ marginTop: "1.5rem" }}>
                Вернуться на главную
            </Button>
        </div>
    );
};

export default NoPage;
