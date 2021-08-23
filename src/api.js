import axios from "axios";

class API {
   constructor() {
      this.instance = axios.create({
         baseURL: "/",
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
         },
      });
   }

   async getRooms() {
      return (await this.instance.get("db/getRooms")).data;
   }
   async roomGetMessages(data) {
      return (await this.instance.post("db/roomGetMessages", data)).data;
   }

   async login(data) {
      return (await this.instance.post("auth/login", data)).data;
   }

   async registration(data) {
      return (await this.instance.post("auth/registration", data)).data;
   }

   async getUser(data) {
      return (await this.instance.post("db/getUser", data)).data;
   }
}

export default new API();
