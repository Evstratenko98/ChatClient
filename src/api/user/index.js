import API from "../restApiService";

class UserAPI {
    getUser = (payload) => API.post("auth/login", payload);
    registration = (payload) => API.post("auth/registration", payload);
}

export default new UserAPI();
