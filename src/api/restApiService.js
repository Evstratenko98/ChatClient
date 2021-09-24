import axios from "axios";
import Cookies from "js-cookie";

class API {
    constructor(tokenName = "userId") {
        this.url = process.env.REACT_APP_API_URL || "";
        this.tokenName = tokenName;
    }

    handleSuccess = (response) => response;

    handleError = (error) => {
        switch (error.response.status) {
            case 401:
                Cookies.remove("userId", { path: "/" });
                window.location.href = "/";
                break;

            default:
                break;
        }
        return Promise.reject(error);
    };

    create = (headers) => {
        const cancel = axios.CancelToken.source();
        const token = Cookies.get(this.tokenName);
        const headerAuth = token && { Authorization: `Bearer ${token}` };
        const service = axios.create({
            headers: {
                ...headers,
                ...headerAuth,
            },
            cancelToken: cancel.token,
        });
        service.interceptors.response.use(this.handleSuccess, this.handleError);
        return service;
    };

    get = (path = "", headers) => {
        const service = this.create(headers);
        return service.request({
            method: "GET",
            url: `${this.url}${path}`,
        });
    };

    post = (path = "", data = {}, headers) => {
        const service = this.create(headers);
        return service.request({
            method: "POST",
            url: `${this.url}${path}`,
            data,
        });
    };

    put = (path = "", data = {}, headers) => {
        const service = this.create(headers);
        return service.request({
            method: "PUT",
            url: `${this.url}${path}`,
            data,
        });
    };
}

export default new API();
