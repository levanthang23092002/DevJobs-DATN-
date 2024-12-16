import React, { useState } from "react";

const Profile = () => {
  const [candidate, setCandidate] = useState({
    id: "#345",
    ten: "John Carter",
    viTri: "Backendr",
    email: "abc@gmail.com",
    tinhThanh: "Hà Nội",
    trangThai: "Chờ Duyệt",
    anhDaiDien:
      "https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg",
    ngaySinh: "1990-01-01",
    sDT: "123456789",
    luongBatDau: 100000000,
    luonKetThuc: 200000000,
  });

  const [isEditing, setIsEditing] = useState(false);

  const viTriOptions = [
    "Web Developer",
    "Mobile Developer",
    "Backend",
    "Frontend",
  ];
  const tinhThanhOptions = ["Hồ Chí Minh", "Hà Nội", "Đà Nẵng", "Quảng Nam"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCandidate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCandidate((prev) => ({
          ...prev,
          anhDaiDien: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="p-2 bg-custom-item min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-2xl">
        <div className="items-center space-x-4">
          <div className="flex flex-col items-center space-y-2">
            <img
              src={candidate.anhDaiDien}
              alt="Avatar"
              className="w-20 h-20 rounded-full"
            />
            {isEditing && (
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            )}
          </div>
          {isEditing ? (
            <input
              type="text"
              name="ten"
              value={candidate.ten}
              onChange={handleChange}
              placeholder="Tên ứng viên"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          ) : (
            <h2 className="text-xl flex flex-col items-center font-bold">
              {candidate.ten}
            </h2>
          )}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Vị Trí
            </label>
            {isEditing ? (
              <select
                name="viTri"
                value={candidate.viTri}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                {viTriOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm">
                {candidate.viTri}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tỉnh Thành
            </label>
            {isEditing ? (
              <select
                name="tinhThanh"
                value={candidate.tinhThanh}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                {tinhThanhOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm">
                {candidate.tinhThanh}
              </p>
            )}
          </div>
        </div>

        <div className="mt-4 space-y-4 boder-1">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={candidate.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            ) : (
              <p className="mt-1 block w-full px-3 py-2 text-gray-600 border rounded-md shadow-sm">
                {candidate.email}
              </p>
            )}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Ngày Sinh
            </label>
            {isEditing ? (
              <input
                type="date"
                name="ngaySinh"
                value={candidate.ngaySinh}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            ) : (
              <p className="mt-1 block w-full px-3 py-2 text-gray-600 border rounded-md shadow-sm">
                {candidate.ngaySinh}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Số Điện Thoại
            </label>
            {isEditing ? (
              <input
                type="text"
                name="sDT"
                value={candidate.sDT}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            ) : (
              <p className="mt-1 block w-full px-3 py-2 text-gray-600 border rounded-md shadow-sm">
                {candidate.sDT}
              </p>
            )}
          </div>
          </div>
         
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Lương Bắt Đầu
            </label>
            {isEditing ? (
              <input
                name="luongbatdau"
                value={candidate.luongBatDau}
                type="number"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></input>
            ) : (
              <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm">
                {candidate.luongBatDau}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Lương Kết Thúc
            </label>
            {isEditing ? (
              <input
                name="luongKetThuc"
                value={candidate.luonKetThuc}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></input>
            ) : (
              <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm">
                {candidate.luonKetThuc}
              </p>
            )}
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={toggleEdit}
            className={`px-4 py-2 text-white rounded-lg ${
              isEditing
                ? "bg-green-500 hover:bg-green-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isEditing ? "Lưu" : "Chỉnh Sửa"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
