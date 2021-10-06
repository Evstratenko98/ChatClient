import API from "../restApiService";

class RoomsAPI {
    getRooms = () => API.get("db/getRooms");
}

export default new RoomsAPI();
