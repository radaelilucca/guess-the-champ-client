import axios from "axios";

class Client {
  client;
  private isAuthenticated = false;

  constructor() {
    this.client = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
    });

    this.addAuthorizationHeaderInterceptor();
  }

  addAuthorizationHeaderInterceptor() {
    this.client.interceptors.request.use((request) => {
      if (this.isAuthenticated) {
        const token = localStorage.getItem("@token");

        request.headers = {
          ...request.headers,
          Authorization: `Bearer ${token}`,
        };
      }

      return request;
    });
  }

  setIsAuthenticated(value: boolean) {
    console.log("CHANGE AUTHENTICATION VALUE");
    this.isAuthenticated = value;
  }
}

export const guessTheChampApi = new Client();
