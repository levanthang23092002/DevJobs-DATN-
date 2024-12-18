import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class AuthApi {
  constructor() {
    this.apiClient = axios.create({
      baseURL: "http://localhost:5000/auths",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async login(data, urlApi) {
    try {
      const response = await this.apiClient.post(urlApi, data);
      await toast.success(response.data.message);
      return response;
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Có lỗi xảy ra!");
      } else if (error.request) {
        toast.error("Không thể kết nối đến server. Vui lòng thử lại.");
      } else {
        toast.error(error.message);
      }
    }
  }
}

export default new AuthApi();
