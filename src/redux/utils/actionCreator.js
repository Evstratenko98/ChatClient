export class ActionTypes {
    constructor(moduleName, customActionTypes) {
        this.SUCCESS = "SUCCESS";
        this.ERROR = "ERROR";
        this.START = "START";
        this.RESET_STATE = "RESET_STATE";

        // YOU SERVICE NAME
        const SERVICE_NAME = "GAME";
        this.moduleName = `${SERVICE_NAME}/${moduleName}`;

        const customActions = {};
        customActionTypes?.forEach((action) => {
            customActions[action] = `${this.moduleName}/${action}`;
        });

        this.resultTypes = {
            ...customActions,
            RESET_STATE: `${this.moduleName}/${this.RESET_STATE}`,
        };
    }

    generateAsyncActionTypes(asyncKey) {
        this.resultTypes[asyncKey] = {
            [this.START]: `${this.moduleName}/${asyncKey}/${this.START}`,
            [this.SUCCESS]: `${this.moduleName}/${asyncKey}/${this.SUCCESS}`,
            [this.ERROR]: `${this.moduleName}/${asyncKey}/${this.ERROR}`,
        };
    }

    getActionTypes() {
        return this.resultTypes;
    }

    listAT() {
        const listString = "GET";
        this.generateAsyncActionTypes(listString);
        return this;
    }

    addAT() {
        const addString = "POST";
        this.generateAsyncActionTypes(addString);
        return this;
    }

    updateAT() {
        const updateString = "PUT";
        this.generateAsyncActionTypes(updateString);
        return this;
    }

    deleteAT() {
        const deleteString = "DELETE";
        this.generateAsyncActionTypes(deleteString);
        return this;
    }

    deleteAllAT() {
        const deleteAllString = "DELETE_ALL";
        this.generateAsyncActionTypes(deleteAllString);
        return this;
    }
}
