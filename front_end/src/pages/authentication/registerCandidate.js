import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const positions = [
  { id: 1, name: "Kỹ sư phần mềm" },
  { id: 2, name: "Nhân viên kinh doanh" },
  { id: 3, name: "Quản lý dự án" },
];

const provinces = [
  { id: 1, name: "Hà Nội" },
  { id: 2, name: "TP. Hồ Chí Minh" },
  { id: 3, name: "Đà Nẵng" },
];

const RegisterCandidate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ten: "",
    ngaySinh: "",
    sdt: "",
    diaChi: "",
    email: "",
    matKhau: "",
    id_vitri: "",
    vitri: "",
    luongBatDau: "",
    luongKetThuc: "",
    trangThai: "",
    anhDaiDien: "",
    idtinhThanh: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const positions = [
      { id: 1, name: "Kỹ sư phần mềm" },
      { id: 2, name: "Nhân viên kinh doanh" },
      { id: 3, name: "Quản lý dự án" },
    ];
    if (name === "id_vitri") {
      var vitri = "vitri";
      const position = positions.find((position) => position.id == value);

      setFormData({ ...formData, [name]: value, [vitri]: position.name });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/register-CV", { state: formData });
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center bg-black text-white w-full md:w-1/2 pt-2">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-color-item w-6 h-8 mr-2"></div>
            <h1 className="text-3xl color-item font-bold">D</h1>
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Chào mừng đến với cộng đồng DevJobs
          </h2>
          <p className="text-gray-400 mb-8">
            Nơi quy tụ hàng ngàn lập trình viên trên khắp Việt Nam
          </p>
          <a href="/" className="text-green-400 font-semibold hover:no-underline ">
            Wellcome
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-black w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-1 ">
          Đăng Ký Tài Khoản
        </h2>
        <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-2xl">
          <form onSubmit={handleSubmit}>
            {/* Tên */}
            <div className="mb-3">
              <label htmlFor="ten" className="block text-gray-700 font-medium">
                Tên
              </label>
              <input
                type="text"
                id="ten"
                name="ten"
                value={formData.ten}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                placeholder="Nhập tên của bạn"
                required
              />
            </div>
            <div className="flex gap-4 mb-3">
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                  placeholder="Nhập email"
                  required
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="matKhau"
                  className="block text-gray-700 font-medium"
                >
                  Mật Khẩu
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="matKhau"
                    name="matKhau"
                    value={formData.matKhau}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-green-500"
                    placeholder="Nhập mật khẩu"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-2.5 text-gray-600 focus:outline-none"
                  >
                    {showPassword ? "Ẩn" : "Hiển Thị"}
                  </button>
                </div>
              </div>
            </div>
            {/* Địa chỉ */}
            <div className="mb-3">
              <label
                htmlFor="diaChi"
                className="block text-gray-700 font-medium"
              >
                Địa Chỉ
              </label>
              <input
                type="text"
                id="diaChi"
                name="diaChi"
                value={formData.diaChi}
                onChange={handleChange}
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                placeholder="Nhập địa chỉ"
                required
              />
            </div>
            <div className="flex gap-4 mb-3">
              {/* Ngày sinh */}
              <div className="flex-1">
                <label
                  htmlFor="ngaySinh"
                  className="block text-gray-700 font-medium"
                >
                  Ngày Sinh
                </label>
                <input
                  type="date"
                  id="ngaySinh"
                  name="ngaySinh"
                  value={formData.ngaySinh}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              {/* Số điện thoại */}
              <div className="flex-1">
                <label
                  htmlFor="sdt"
                  className="block text-gray-700 font-medium"
                >
                  Số Điện Thoại
                </label>
                <input
                  type="tel"
                  id="sdt"
                  name="sdt"
                  value={formData.sdt}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                  placeholder="Nhập số điện thoại"
                  required
                />
              </div>
            </div>

            {/* Lương */}
            <div className="flex gap-4 mb-3">
              <div className="flex-1">
                <label
                  htmlFor="luongBatDau"
                  className="block text-gray-700 font-medium"
                >
                  Lương Bắt Đầu
                </label>
                <input
                  type="number"
                  id="luongBatDau"
                  name="luongBatDau"
                  value={formData.luongBatDau}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                  placeholder="Nhập lương bắt đầu"
                  required
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="luongKetThuc"
                  className="block text-gray-700 font-medium"
                >
                  Lương Kết Thúc
                </label>
                <input
                  type="number"
                  id="luongKetThuc"
                  name="luongKetThuc"
                  value={formData.luongKetThuc}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                  placeholder="Nhập lương kết thúc"
                  required
                />
              </div>
            </div>

            <div className="flex gap-4 mb-3">
              {/* Vị trí */}
              <div className="flex-1">
                <label
                  htmlFor="id_vitri"
                  className="block text-gray-700 font-medium"
                >
                  Vị Trí
                </label>
                <select
                  id="id_vitri"
                  name="id_vitri"
                  value={formData.id_vitri}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="" disabled>
                    Chọn vị trí
                  </option>
                  {positions.map((position) => (
                    <option key={position.id} value={position.id}>
                      {position.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Tỉnh thành */}
              <div className="flex-1">
                <label
                  htmlFor="idtinhThanh"
                  className="block text-gray-700 font-medium"
                >
                  Tỉnh Thành
                </label>
                <select
                  id="idtinhThanh"
                  name="idtinhThanh"
                  value={formData.idtinhThanh}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="" disabled>
                    Chọn tỉnh thành
                  </option>
                  {provinces.map((province) => (
                    <option key={province.id} value={province.id}>
                      {province.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Thêm các trường khác tương tự ở đây */}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
            >
              Đăng Ký
            </button>
          </form>
        </div>
        <p class="text-black p-2">
          Already have an account? <a href="/login"> Login</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterCandidate;
