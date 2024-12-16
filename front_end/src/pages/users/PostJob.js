import React, { useState } from "react";

const PostJobForm = () => {
  // State lưu dữ liệu từ form
  const [formData, setFormData] = useState({
    idTinhThanh: "",
    idViTri: "",
    tenBaiDang: "",
    soLuong: 1,
    hinhAnh: null,
    luongBatDau: "",
    luongKetThuc: "",
    diachiCuThe: "",
    hanChot: "",
  });

  const [yeuCauList, setYeuCauList] = useState([""]); // Mảng lưu nhiều yêu cầu

  // Dữ liệu giả lập cho tỉnh thành và vị trí
  const tinhThanhOptions = [
    { id: 1, tenTinhThanh: "Hà Nội" },
    { id: 2, tenTinhThanh: "Đà Nẵng" },
    { id: 3, tenTinhThanh: "Hồ Chí Minh" },
  ];

  const viTriOptions = [
    { id: 1, tenViTri: "Kỹ Sư Phần Mềm" },
    { id: 2, tenViTri: "Nhân Viên Kinh Doanh" },
    { id: 3, tenViTri: "Quản Lý Dự Án" },
  ];

  // Xử lý thay đổi input
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value, // Xử lý file cho hình ảnh
    });
  };

  // Thêm một yêu cầu
  const addYeuCau = () => setYeuCauList([...yeuCauList, ""]);

  // Xóa một yêu cầu
  const removeYeuCau = (index) => {
    const newYeuCauList = [...yeuCauList];
    newYeuCauList.splice(index, 1);
    setYeuCauList(newYeuCauList);
  };

  // Cập nhật yêu cầu
  const updateYeuCau = (index, value) => {
    const newYeuCauList = [...yeuCauList];
    newYeuCauList[index] = value;
    setYeuCauList(newYeuCauList);
  };

  // Kiểm tra hạn chót
  const isHanChotValid = () => {
    return new Date(formData.hanChot) > new Date();
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isHanChotValid()) {
      alert("Hạn chót phải sau ngày hôm nay!");
      return;
    }

    // Xử lý dữ liệu gửi đi
    const dataToSubmit = {
      ...formData,
      yeuCau: yeuCauList,
    };
    console.log("Dữ liệu gửi đi:", dataToSubmit);
    alert("Bài đăng đã được tạo thành công!");
  };

  return (
    <div className="container flex flex-col w-3/4 justify-center mx-auto p-4">
      <h2 className=" flex text-2xl font-bold mb-4 justify-center color-item ">
        Đăng Bài Tuyển Dụng
      </h2>
      <div className="flex flex-col justify-center w-3/4 mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div>
            <label className="color-item font-bold">Tên Bài Đăng</label>
            <input
              type="text"
              name="tenBaiDang"
              value={formData.tenBaiDang}
              onChange={handleInputChange}
              className="border-2 border-gray-400 p-2 m- rounded w-full"
            />
          </div>

          <div className="mt-2 grid grid-cols-2 gap-4">
            <div>
              <label className="color-item font-bold">Tỉnh Thành</label>
              <select
                name="idTinhThanh"
                value={formData.idTinhThanh}
                onChange={handleInputChange}
                className="border-2 border-gray-400 p-2 m-0 rounded w-full"
              >
                <option value="">-- Chọn tỉnh thành --</option>
                {tinhThanhOptions.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.tenTinhThanh}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="color-item font-bold">Vị Trí Tuyển Dụng</label>
              <select
                name="idViTri"
                value={formData.idViTri}
                onChange={handleInputChange}
                className="border-2 border-gray-400 p-2 m-0 rounded w-full"
              >
                <option value="">-- Chọn vị trí --</option>
                {viTriOptions.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.tenViTri}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-4">
            <div>
              <label className="color-item font-bold">Hạn Chót</label>
              <input
                type="date"
                name="hanChot"
                value={formData.hanChot}
                onChange={handleInputChange}
                className="border-2 border-gray-400 p-2 m-0 rounded w-full"
              />
            </div>
            <div>
              <label className="color-item font-bold">Số Lượng</label>
              <input
                type="number"
                name="soLuong"
                value={formData.soLuong}
                onChange={handleInputChange}
                className="border-2 border-gray-400 p-2 m-0 rounded w-full"
              />
            </div>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-4">
            <div>
              <label className="color-item font-bold">Lương Bắt Đầu</label>
              <input
                type="number"
                name="luongBatDau"
                value={formData.luongBatDau}
                onChange={handleInputChange}
                className="border-2 border-gray-400 p-2 m-0 rounded w-full"
              />
            </div>

            <div>
              <label className="color-item font-bold">Lương Kết Thúc</label>
              <input
                type="number"
                name="luongKetThuc"
                value={formData.luongKetThuc}
                onChange={handleInputChange}
                className="border-2 border-gray-400 p-2 m-0 rounded w-full"
              />
            </div>
          </div>

          <div>
            <label className="color-item font-bold">Hình Ảnh</label>
            <input
              type="file"
              name="hinhAnh"
              onChange={handleInputChange}
              className="border-2 border-gray-400 p-2 m-0 rounded w-full"
            />
          </div>

          <div>
            <label className="color-item font-bold">Địa Chỉ Cụ Thể</label>
            <input
              type="text"
              name="diachiCuThe"
              value={formData.diachiCuThe}
              onChange={handleInputChange}
              className="border-2 border-gray-400 p-2 m- rounded w-full"
            />
          </div>

          <div>
            <label className="color-item font-bold">Yêu Cầu</label>
            {yeuCauList.map((yeuCau, index) => (
              <div key={index} className="flex space-x-2 mb-2">
                <input
                  type="text"
                  value={yeuCau}
                  onChange={(e) => updateYeuCau(index, e.target.value)}
                  className="border-2 border-gray-400 p-2 m-0
 rounded w-full"
                  placeholder="Nhập yêu cầu"
                />
                <button
                  type="button"
                  onClick={() => removeYeuCau(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Xóa
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addYeuCau}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Thêm Yêu Cầu
            </button>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Đăng Bài
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJobForm;
