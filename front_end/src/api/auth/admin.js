import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class AdminApi {
  constructor() {
    this.apiClient = axios.create({
      baseURL: "http://localhost:5000/admins",
    });
  }

  // This method is now responsible for getting the token dynamically
  getAuthHeaders() {
    const token = sessionStorage.getItem("token");
    if (!token) {
      toast.error("You need to log in first.");
      return {};
    }
    return { Authorization: token }; // Adding 'Bearer ' prefix
  }

  async getTotal(urlApi) {
    try {
      const response = await this.apiClient.get(urlApi, {
        headers: this.getAuthHeaders(), // Use dynamic token here
      });
      toast.success(response.data)
      return response.data;
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

export default new AdminApi();
