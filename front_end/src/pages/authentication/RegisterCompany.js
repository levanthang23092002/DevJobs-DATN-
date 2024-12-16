import React, { useState } from "react";

const RegisterCompany = () => {
  const [formData, setFormData] = useState({
    tenCongTy: "",
    diaChi: "",
    email: "",
    sdt: "",
    linkWeb: "",
    nganhNghe: "",
    soLuongNhanVien: "",
    logo: null,
    trangThai: "Hoạt động", // Default value
    ngayThanhLap: "",
    moTa: "",
    idLoaiTaiKhoan: "",
    matKhau: "",
    ngayTao: new Date().toISOString().slice(0, 10), // Default today's date
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      logo: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Thông tin doanh nghiệp:", formData);
  };

  return (
    <div className="flex  h-screen">
      <div className="flex justify-center h-screen items-center bg-black text-white w-1/2 pt-2">
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
      <div className=" w-1/2 p-8 bg-white shadow-lg rounded-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Đăng Ký Doanh Nghiệp
        </h2>
        <form className="space-y-4 " onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="tenCongTy"
                className="block text-sm font-medium text-gray-700"
              >
                Tên Công Ty
              </label>
              <input
                type="text"
                id="tenCongTy"
                name="tenCongTy"
                value={formData.tenCongTy}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="linkWeb"
                className="block text-sm font-medium text-gray-700"
              >
                Link Website
              </label>
              <input
                type="url"
                id="linkWeb"
                name="linkWeb"
                value={formData.linkWeb}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
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
                required
              />
            </div>
            <div>
              <label
                htmlFor="matKhau"
                className="block text-sm font-medium text-gray-700"
              >
                Mật Khẩu
              </label>
              <input
                type="password"
                id="matKhau"
                name="matKhau"
                value={formData.matKhau}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="diaChi"
              className="block text-sm font-medium text-gray-700"
            >
              Địa Chỉ
            </label>
            <textarea
              id="diaChi"
              name="diaChi"
              value={formData.diaChi}
              onChange={handleChange}
              rows="1"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="nganhNghe"
                className="block text-sm font-medium text-gray-700"
              >
                Ngành Nghề
              </label>
              <input
                type="text"
                id="nganhNghe"
                name="nganhNghe"
                value={formData.nganhNghe}
                onChange={handleChange}
                className=" w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label
                htmlFor="soLuongNhanVien"
                className="block text-sm font-medium text-gray-700"
              >
                Số Lượng Nhân Viên
              </label>
              <input
                type="number"
                id="soLuongNhanVien"
                name="soLuongNhanVien"
                value={formData.soLuongNhanVien}
                onChange={handleChange}
                className=" w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="sdt"
                className="block text-sm font-medium text-gray-700"
              >
                Số Điện Thoại
              </label>
              <input
                type="text"
                id="sdt"
                name="sdt"
                value={formData.sdt}
                onChange={handleChange}
                className=" w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="ngayThanhLap"
                className="block text-sm font-medium text-gray-700"
              >
                Ngày Thành Lập
              </label>
              <input
                type="date"
                id="ngayThanhLap"
                name="ngayThanhLap"
                value={formData.ngayThanhLap}
                onChange={handleChange}
                className=" w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="moTa"
              className="block text-sm font-medium text-gray-700"
            >
              Mô Tả
            </label>
            <textarea
              id="moTa"
              name="moTa"
              value={formData.moTa}
              onChange={handleChange}
              rows="2"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="logo"
                className="block text-sm font-medium text-gray-700"
              >
                Logo
              </label>
              <input
                type="file"
                id="logo"
                name="logo"
                onChange={handleFileChange}
                className="mt-1 block w-full text-sm text-gray-500"
              />
            </div>
            <div className="flex">
              <button
                type="submit"
                className="px-8 py-1 bg-green-600 text-white font-medium rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Đăng Ký
              </button>
            </div>
          </div>

          <p class="text-black  text-center">
            Already have an account? <a href="/login"> Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterCompany;
