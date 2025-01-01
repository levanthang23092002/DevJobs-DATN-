import React, { useState, useEffect } from "react";
import CompanyApi from "../../../api/company/company";
import uploadImage from "../../../assets/Js/UploadImage";
import AuthApi from "../../../api/auth/auth";
import { toast } from "react-toastify";
const PostJobForm = () => {
  // State lưu dữ liệu từ form
  const [formData, setFormData] = useState({
    idTinhThanh: "",
    idViTri: "",
    idCapDo: "",
    tenBaiDang: "",
    moTa: "",
    soLuong: 1,
    hinhAnh: null,
    luongBatDau: "",
    luongKetThuc: "",
    diaChiCuThe: "",
    hanChot: "",
  });

  const [yeuCauList, setYeuCauList] = useState([""]); 
  const [tinhThanhOptions, setTinhThanhOptions] = useState([""]); 
  const [viTriOptions, setViTriOptions] = useState([""]); 
  const [capDoOptions, setCapDoOptions] = useState([""]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const position = await AuthApi.getAllAuth("/all-position");
        const province = await AuthApi.getAllAuth("/all-city");
        const level = await AuthApi.getAllAuth("/all-level");
        setTinhThanhOptions(province);
        setViTriOptions(position);
        setCapDoOptions(level);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Xử lý thay đổi input
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value, // Xử lý file cho hình ảnh
    });
  };

  const addYeuCau = () => setYeuCauList([...yeuCauList, ""]);

  const removeYeuCau = (index) => {
    const newYeuCauList = [...yeuCauList];
    newYeuCauList.splice(index, 1);
    setYeuCauList(newYeuCauList);
  };

  const updateYeuCau = (index, value) => {
    const newYeuCauList = [...yeuCauList];
    newYeuCauList[index] = value;
    setYeuCauList(newYeuCauList);
  };

  const isHanChotValid = () => {
    return new Date(formData.hanChot) > new Date();
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isHanChotValid()) {
      toast.error("Hạn chót phải sau ngày hôm nay!");
      return;
    }
    var user = JSON.parse(sessionStorage.getItem("data"));

    if (formData.hinhAnh !== null && formData.hinhAnh !== "") {
      const url = await uploadImage(formData.hinhAnh);
      formData.hinhAnh = url;
    }

    const postJob = await CompanyApi.AddInfo(`/${user.id}/job/add`, formData);
   console.log(postJob.idBaiDang)
    const request = await CompanyApi.AddInfo(`request/${postJob.data}/add-many`, yeuCauList)
 
  
  };

  return (
    <div className="container flex flex-col w-3/4 justify-center mx-auto p-4">
      <h2 className=" flex text-2xl font-bold mb-4 justify-center  ">
        Đăng Bài Tuyển Dụng
      </h2>
      <div className="flex flex-col justify-center w-3/4 mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div>
            <label className=" font-bold">Tên Bài Đăng</label>
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
              <label className=" font-bold">Tỉnh Thành</label>
              <select
                name="idTinhThanh"
                value={formData.idTinhThanh}
                onChange={handleInputChange}
                className="border-2 border-gray-400 p-2 m-0 rounded w-full"
              >
                <option value="">-- Chọn tỉnh thành --</option>
                {tinhThanhOptions.map((item) => (
                  <option key={item.id} value={item.idTinhThanh}>
                    {item.tenTinhThanh}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className=" font-bold">Vị Trí Tuyển Dụng</label>
              <select
                name="idViTri"
                value={formData.idViTri}
                onChange={handleInputChange}
                className="border-2 border-gray-400 p-2 m-0 rounded w-full"
              >
                <option value="">-- Chọn vị trí --</option>
                {viTriOptions.map((item) => (
                  <option key={item.id} value={item.idViTri}>
                    {item.tenViTri}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-2 grid grid-cols-2 gap-4">
            <div>
              <label className=" font-bold">Tỉnh Thành</label>
              <select
                name="idCapDo"
                value={formData.idCapDo}
                onChange={handleInputChange}
                className="border-2 border-gray-400 p-2 m-0 rounded w-full"
              >
                <option value="">-- Chọn cấp độ --</option>
                {capDoOptions.map((item) => (
                  <option key={item.idCapDo} value={item.idCapDo}>
                    {item.tenCapDo}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-4">
            <div>
              <label className=" font-bold">Hạn Chót</label>
              <input
                type="date"
                name="hanChot"
                value={formData.hanChot}
                onChange={handleInputChange}
                className="border-2 border-gray-400 p-2 m-0 rounded w-full"
              />
            </div>
            <div>
              <label className=" font-bold">Số Lượng</label>
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
              <label className=" font-bold">Lương Bắt Đầu</label>
              <input
                type="number"
                name="luongBatDau"
                value={formData.luongBatDau}
                onChange={handleInputChange}
                className="border-2 border-gray-400 p-2 m-0 rounded w-full"
              />
            </div>

            <div>
              <label className=" font-bold">Lương Kết Thúc</label>
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
            <label className=" font-bold">Hình Ảnh</label>
            <input
              type="file"
              name="hinhAnh"
              onChange={handleInputChange}
              className="border-2 border-gray-400 p-2 m-0 rounded w-full"
            />
          </div>

          <div>
            <label className=" font-bold">Địa Chỉ Cụ Thể</label>
            <input
              type="text"
              name="diaChiCuThe"
              value={formData.diaChiCuThe}
              onChange={handleInputChange}
              className="border-2 border-gray-400 p-2 m- rounded w-full"
            />
          </div>
          <div>
            <label className=" font-bold">Mô tả</label>
            <textarea
              type="text"
              name="moTa"
              value={formData.moTa}
              onChange={handleInputChange}
              className="border-2 border-gray-400 p-2 m- rounded w-full"
            />
          </div>

          <div>
            <label className=" font-bold">Yêu Cầu</label>
            {yeuCauList.map((yeuCau, index) => (
              <div key={index} className="flex space-x-2 mb-2">
                <input
                  type="text"
                  value={yeuCau}
                  onChange={(e) => updateYeuCau(index, e.target.value)}
                  className="border-2 border-gray-400 p-2 m-0 rounded w-full"
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
