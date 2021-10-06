import API from "../restApiService";

class MessagesAPI {
    getMessages = (payload) => API.post("db/roomGetMessages", payload);
}

export default new MessagesAPI();
