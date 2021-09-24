export class Container {
    constructor() {
        this.modules = [];
    }

    subsctibe(module) {
        this.modules = [...this.modules, module];

        return this;
    }

    activeModule = (name) => this.modules.find((module) => module.name === name);

    getReducers = () =>
        this.modules.reduce((reducers, module) => ({ ...reducers, ...module.reducers() }), {});

    getSagas = () => this.modules.reduce((sagas, module) => [...sagas, ...module.sagas()], []);
}
