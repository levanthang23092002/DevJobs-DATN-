import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const CVFormScreen = () => {
  const [data, setData] = useState({
    hocVan: [],
    kinhNghiem: [],
    kyNang: [],
    duAn: [],
    chungChi: [],
  });

  const [currentForm, setCurrentForm] = useState(null);
  const [currentFormUpdate, setCurrentFormUpdate] = useState(null); // Hiển thị form nào
  const [selectedItem, setSelectedItem] = useState(null); // Mục được chọn để hiển thị bên phải

  const location = useLocation();
  const formData = location.state;

  const handleSave = () => {
    const previousData = { ...data };
    console.log({ ...data });
    console.log(formData);
  };
  // Thêm dữ liệu
  const handleAdd = (key, newItem) => {
    const updatedData = {
      ...data,
      [key]: [...data[key], newItem],
    };

    setData(updatedData);
    setSelectedItem(updatedData); // Hiển thị luôn mục vừa thêm ở bên phải
    setCurrentForm(null); // Ẩn form sau khi thêm
  };
  const CancelUpdate = () => {
    setCurrentFormUpdate(null);
  };
  const handleUpdate = (id, newData) => {
    const key = getkey(id);
    if (data[key]) {
      data[key] = data[key].map((item) => {
        if (item.id === id) {
          switch (key) {
            case "hocVan":
              item.noiHoc = newData.noiHoc;
              item.diaChi = newData.diaChi;
              item.nganhHoc = newData.nganhHoc;
              item.diem = newData.diem;
              item.thoiGianBatDau = newData.thoiGianBatDau;
              item.thoiGianKetThuc = newData.thoiGianKetThuc;
              break;

            case "kyNang":
              item.tenKyNang = newData.tenKyNang;
              item.mucDo = newData.mucDo;
              break;

            case "duAn":
              item.tenDuAn = newData.tenDuAn;
              item.vaiTro = newData.vaiTro;
              item.moTa = newData.moTa;
              break;

            case "chungChi":
              item.tenChungChi = newData.tenChungChi;
              item.toChucCap = newData.toChucCap;
              item.ngayCap = newData.ngayCap;
              break;

            case "kinhNghiem":
              item.tenCongTy = newData.tenCongTy;
              item.viTri = newData.viTri;
              item.moTa = newData.moTa;
              item.thoiGianBatDau = newData.thoiGianBatDau;
              item.thoiGianKetThuc = newData.thoiGianKetThuc;
              break;

            default:
              break;
          }
        }
        return item;
      });
    }

    setData(data);
    setSelectedItem(data);
    setCurrentFormUpdate(null);
    return data;
  };

  // Xóa dữ liệu
  const handleDelete = (key, id) => {
    setData((prev) => {
      const updatedData = { ...prev }; // Sao chép lại dữ liệu cũ để giữ nguyên những phần không thay đổi
      updatedData[key] = prev[key].filter((item) => item.id !== id); // Lọc bỏ phần tử có id cần xóa
      setSelectedItem(updatedData);
      return updatedData;
    });
  };

  const renderForm = (key) => {
    switch (key) {
      case "hocVan":
        return (
          <div className="mt-4 p-4  rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Học vấn</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                id="noiHoc"
                placeholder="Nơi học"
                className="border p-2 rounded"
              />
              <input
                type="text"
                id="diaChi"
                placeholder="Địa chỉ"
                className="border p-2 rounded"
              />
              <input
                type="text"
                id="nganhHoc"
                placeholder="Ngành học"
                className="border p-2 rounded"
              />
              <input
                type="number"
                id="diem"
                placeholder="Điểm"
                className="border p-2 rounded"
              />
              <input
                type="date"
                id="thoiGianBatDau"
                className="border p-2 rounded"
              />
              <input
                type="date"
                id="thoiGianKetThuc"
                className="border p-2 rounded"
              />
            </div>
            <button
              onClick={() =>
                handleAdd("hocVan", {
                  id: "hocVan-" + Date.now(),
                  noiHoc: document.getElementById("noiHoc").value,
                  diaChi: document.getElementById("diaChi").value,
                  nganhHoc: document.getElementById("nganhHoc").value,
                  diem: document.getElementById("diem").value,
                  thoiGianBatDau:
                    document.getElementById("thoiGianBatDau").value,
                  thoiGianKetThuc:
                    document.getElementById("thoiGianKetThuc").value,
                })
              }
              className=" mt-2 bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-500 "
            >
              Lưu
            </button>
          </div>
        );

      case "kinhNghiem":
        return (
          <div className="mt-4 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Kinh nghiệm</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                id="tenCongTy"
                placeholder="Tên công ty"
                className="border p-2 rounded"
              />
              <input
                type="text"
                id="viTri"
                placeholder="Vị trí làm việc"
                className="border p-2 rounded"
              />
              <input
                type="date"
                id="thoiGianBatDau"
                className="border p-2 rounded"
              />
              <input
                type="date"
                id="thoiGianKetThuc"
                className="border p-2 rounded"
              />
              <textarea
                id="moTa"
                placeholder="Mô tả"
                className="border p-2 rounded col-span-2"
              />
            </div>

            <button
              onClick={() =>
                handleAdd("kinhNghiem", {
                  id: "kinhNghiem-" + Date.now(),
                  tenCongTy: document.getElementById("tenCongTy").value,
                  viTri: document.getElementById("viTri").value,
                  moTa: document.getElementById("moTa").value,
                  thoiGianBatDau:
                    document.getElementById("thoiGianBatDau").value,
                  thoiGianKetThuc:
                    document.getElementById("thoiGianKetThuc").value,
                })
              }
              className=" mt-2 bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-500"
            >
              Lưu
            </button>
          </div>
        );

      case "kyNang":
        return (
          <div className="mt-4 p-4  rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Kỹ năng</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <select id="tenKyNang" className="border p-2 rounded w-full">
                  <option value="languages">Languages</option>
                  <option value="frameworks">libraries / framework</option>
                  <option value="tools">tools / platforms</option>
                  <option value="databases">Databases</option>
                </select>
              </div>
              <textarea
                id="moTa"
                placeholder="Điền các kỹ năng Bạn học được vào đây!"
                className="border p-2 rounded col-span-2"
              />
            </div>

            <button
              onClick={() =>
                handleAdd("kyNang", {
                  id: "kyNang-" + Date.now(),
                  tenKyNang: document.getElementById("tenKyNang").value,
                  moTa: document.getElementById("moTa").value,
                })
              }
              className=" mt-2 bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-500"
            >
              Lưu
            </button>
          </div>
        );

      case "duAn":
        return (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Dự án</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                id="tenDuAn"
                type="text"
                placeholder="Tên dự án"
                className="border p-2 rounded col-span-2"
              />
              <input
                id="congNghe"
                type="text"
                placeholder="Công nghê, ngôn ngữ , ..."
                className="border p-2 rounded col-span-2"
              />
              <input
                id="link"
                type="text"
                placeholder="link hoặc GitHub , ..."
                className="border p-2 rounded col-span-2"
              />

              <textarea
                id="moTa"
                placeholder="Mô tả"
                className="border p-2 rounded col-span-2"
              />
            </div>

            <button
              onClick={() =>
                handleAdd("duAn", {
                  id: "duAn-" + Date.now(),
                  tenDuAn: document.getElementById("tenDuAn").value,
                  congNghe: document.getElementById("congNghe").value,
                  link: document.getElementById("link").value,
                  moTa: document.getElementById("moTa").value,
                })
              }
              className=" mt-2 bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-500"
            >
              Lưu
            </button>
          </div>
        );

      case "chungChi":
        return (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Chứng chỉ</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                id="tenChungChi"
                type="text"
                placeholder="Tên chứng chỉ"
                className="border p-2 rounded"
              />
              <input
                id="link"
                type="url"
                placeholder="Link"
                className="border p-2 rounded"
              />
              <input
                id="donViCap"
                type="text"
                placeholder="Đơn vị cấp"
                className="border p-2 rounded"
              />
              <input
                id="ketQua"
                type="text"
                placeholder="Kết quả"
                className="border p-2 rounded"
              />
            </div>

            <button
              onClick={() =>
                handleAdd("chungChi", {
                  id: "chungChi-" + Date.now(),
                  tenChungChi: document.getElementById("tenChungChi").value,
                  link: document.getElementById("link").value,
                  donViCap: document.getElementById("donViCap").value,
                  ketQua: document.getElementById("ketQua").value,
                })
              }
              className=" mt-2 bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-500"
            >
              Lưu
            </button>
          </div>
        );

      default:
        return null;
    }
  };
  function getkey(id) {
    const name = id.split("-");
    const keys = name[0];
    return keys;
  }
  function getByKeyAndId(id) {
    const keys = getkey(id);
    if (data[keys]) {
      return data[keys].find((item) => item.id === id);
    }
    return null;
  }

  const renderFormUpdate = (id) => {
    const item = getByKeyAndId(id);
    const key = getkey(id);

    switch (key) {
      case "hocVan":
        return (
          <div className="mt-4 p-4  rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Học vấn</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                id="noiHoc"
                placeholder="Nơi học"
                onChange={(e) =>
                  handleChange(key, id, e.target.value, e.target.name)
                }
                name="noiHoc"
                className="border p-2 rounded"
                value={item.noiHoc}
              />
              <input
                value={item.diaChi}
                type="text"
                id="diaChi"
                placeholder="Địa chỉ"
                className="border p-2 rounded"
                onChange={(e) =>
                  handleChange(key, id, e.target.value, e.target.name)
                }
                name="diaChi"
              />
              <input
                value={item.nganhHoc}
                type="text"
                id="nganhHoc"
                placeholder="Ngành học"
                className="border p-2 rounded"
                onChange={(e) =>
                  handleChange(key, id, e.target.value, e.target.name)
                }
                name="nganhHoc"
              />
              <input
                value={item.diem}
                type="number"
                id="diem"
                placeholder="Điểm"
                className="border p-2 rounded"
                onChange={(e) =>
                  handleChange(key, id, e.target.value, e.target.name)
                }
                name="diem"
              />
              <input
                value={item.thoiGianBatDau}
                type="date"
                id="thoiGianBatDau"
                className="border p-2 rounded"
                onChange={(e) =>
                  handleChange(key, id, e.target.value, e.target.name)
                }
                name="thoiGianBatDau"
              />
              <input
                value={item.thoiGianKetThuc}
                type="date"
                id="thoiGianKetThuc"
                className="border p-2 rounded"
                onChange={(e) =>
                  handleChange(key, id, e.target.value, e.target.name)
                }
                name="thoiGianKetThuc"
              />
              <span id="id" value={item.id}></span>
            </div>
            <div className="flex justify-between">
              <button
                onClick={() =>
                  handleUpdate(item.id, {
                    id: document.getElementById("id").value,
                    noiHoc: document.getElementById("noiHoc").value,
                    diaChi: document.getElementById("diaChi").value,
                    nganhHoc: document.getElementById("nganhHoc").value,
                    diem: document.getElementById("diem").value,
                    thoiGianBatDau:
                      document.getElementById("thoiGianBatDau").value,
                    thoiGianKetThuc:
                      document.getElementById("thoiGianKetThuc").value,
                  })
                }
                className=" left mt-2 bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-500 "
              >
                Sửa
              </button>
              <button
                onClick={() => CancelUpdate()}
                className="right mt-2 bg-red-600 text-white py-2 px-4 rounded-lg shadow hover:bg-red-500 "
              >
                hủy
              </button>
            </div>
          </div>
        );

      case "kinhNghiem":
        return (
          <div className="mt-4 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Kinh nghiệm</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                value={item.tenCongTy}
                type="text"
                id="tenCongTy"
                placeholder="Tên công ty"
                className="border p-2 rounded"
                onChange={(e) =>
                  handleChange(key, id, e.target.value, e.target.name)
                }
                name="tenCongTy"
              />
              <input
                type="text"
                value={item.viTri}
                id="viTri"
                placeholder="Vị trí làm việc"
                className="border p-2 rounded"
                onChange={(e) =>
                  handleChange(key, id, e.target.value, e.target.name)
                }
                name="viTri"
              />
              <input
                value={item.thoiGianBatDau}
                type="date"
                id="thoiGianBatDau"
                className="border p-2 rounded"
                onChange={(e) =>
                  handleChange(key, id, e.target.value, e.target.name)
                }
                name="thoiGianBatDau"
              />
              <input
                value={item.thoiGianKetThuc}
                type="date"
                id="thoiGianKetThuc"
                className="border p-2 rounded"
                onChange={(e) =>
                  handleChange(key, id, e.target.value, e.target.name)
                }
                name="thoiGianKetThuc"
              />
              <textarea
                value={item.moTa}
                id="moTa"
                placeholder="Mô tả"
                onChange={(e) =>
                  handleChange(key, id, e.target.value, e.target.name)
                }
                name="moTa"
                className="border p-2 rounded col-span-2"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={() =>
                  handleUpdate(item.id, {
                    id: document.getElementById("id").value,
                    tenCongTy: document.getElementById("tenCongTy").value,
                    viTri: document.getElementById("viTri").value,
                    moTa: document.getElementById("moTa").value,
                    thoiGianBatDau:
                      document.getElementById("thoiGianBatDau").value,
                    thoiGianKetThuc:
                      document.getElementById("thoiGianKetThuc").value,
                  })
                }
                className=" left mt-2 bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-500 "
              >
                Sửa
              </button>
              <button
                onClick={() => CancelUpdate()}
                className="right mt-2 bg-red-600 text-white py-2 px-4 rounded-lg shadow hover:bg-red-500 "
              >
                hủy
              </button>
            </div>
          </div>
        );

      case "kyNang":
        return (
          <div className="mt-4 p-4  rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Kỹ năng</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <select
                  id="tenKyNang"
                  value={item.tenKyNang} 
                  className="border p-2 rounded w-full"
                  onChange={(e) =>
                    handleChange(key, id, e.target.value, e.target.name)
                  }
                  name="tenKyNang" 
                >
                  <option value="languages">Languages</option>
                  <option value="frameworks">Libraries / Frameworks</option>
                  <option value="tools">Tools / Platforms</option>
                  <option value="databases">Databases</option>
                </select>
              </div>
              <textarea
                value={item.moTa}
                id="moTa"
                placeholder="Điền các kỹ năng Bạn học được vào đây!"
                className="border p-2 rounded col-span-2"
                onChange={(e) =>
                  handleChange(key, id, e.target.value, e.target.name)
                }
                name="moTa"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={() =>
                  handleUpdate(item.id, {
                    id: document.getElementById("id").value,
                    tenKyNang: document.getElementById("tenKyNang").value,
                    moTa: document.getElementById("moTa").value,
                  })
                }
                className=" left mt-2 bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-500 "
              >
                Sửa
              </button>
              <button
                onClick={() => CancelUpdate()}
                className="right mt-2 bg-red-600 text-white py-2 px-4 rounded-lg shadow hover:bg-red-500 "
              >
                hủy
              </button>
            </div>
          </div>
        );

      case "duAn":
        return (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Dự án</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                value={item.tenDuAn}
                id="tenDuAn"
                type="text"
                placeholder="Tên dự án"
                className="border p-2 rounded col-span-2"
                onChange={(e) =>
                  handleChange(key, id, e.target.value, e.target.name)
                }
                name="tenDuAn"
              />
              <input
                value={item.congNghe}
                id="congNghe"
                type="text"
                placeholder="Công nghê, ngôn ngữ , ..."
                className="border p-2 rounded col-span-2"
                onChange={(e) =>
                  handleChange(key, id, e.target.value, e.target.name)
                }
                name="congNghe"
              />
              <input
                value={item.link}
                id="link"
                type="text"
                placeholder="link hoặc GitHub , ..."
                className="border p-2 rounded col-span-2"
                onChange={(e) =>
                  handleChange(key, id, e.target.value, e.target.name)
                }
                name="link"
              />

              <textarea
                value={item.moTa}
                id="moTa"
                placeholder="Mô tả"
                className="border p-2 rounded col-span-2"
                onChange={(e) =>
                  handleChange(key, id, e.target.value, e.target.name)
                }
                name="moTa"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={() =>
                  handleUpdate(item.id, {
                    id: document.getElementById("id").value,
                    tenDuAn: document.getElementById("tenDuAn").value,
                    congNghe: document.getElementById("congNghe").value,
                    link: document.getElementById("link").value,
                    moTa: document.getElementById("moTa").value,
                  })
                }
                className=" left mt-2 bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-500 "
              >
                Sửa
              </button>
              <button
                onClick={() => CancelUpdate()}
                className="right mt-2 bg-red-600 text-white py-2 px-4 rounded-lg shadow hover:bg-red-500 "
              >
                hủy
              </button>
            </div>
          </div>
        );

      case "chungChi":
        return (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Chứng chỉ</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                value={item.tenChungChi}
                id="tenChungChi"
                type="text"
                placeholder="Tên chứng chỉ"
                className="border p-2 rounded"
                onChange={(e) =>
                  handleChange(key, id, e.target.value, e.target.name)
                }
                name="tenChungChi"
              />
              <input
                value={item.link}
                id="link"
                type="url"
                placeholder="Link"
                className="border p-2 rounded"
                onChange={(e) =>
                  handleChange(key, id, e.target.value, e.target.name)
                }
                name="link"
              />
              <input
                value={item.donViCap}
                id="donViCap"
                type="text"
                placeholder="Đơn vị cấp"
                className="border p-2 rounded"
                onChange={(e) =>
                  handleChange(key, id, e.target.value, e.target.name)
                }
                name="donViCap"
              />
              <input
                value={item.ketQua}
                id="ketQua"
                type="text"
                placeholder="Kết quả"
                className="border p-2 rounded"
                onChange={(e) =>
                  handleChange(key, id, e.target.value, e.target.name)
                }
                name="ketQua"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={() =>
                  handleUpdate(item.id, {
                    id: document.getElementById("id").value,
                    tenChungChi: document.getElementById("tenChungChi").value,
                    link: document.getElementById("link").value,
                    donViCap: document.getElementById("donViCap").value,
                    ketQua: document.getElementById("ketQua").value,
                  })
                }
                className=" left mt-2 bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-500 "
              >
                Sửa
              </button>
              <button
                onClick={() => CancelUpdate()}
                className="right mt-2 bg-red-600 text-white py-2 px-4 rounded-lg shadow hover:bg-red-500 "
              >
                hủy
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };
  const handleChange = (key, id, newValue, name) => {
    if (data[key]) {
      data[key] = data[key].map((item) => {
        if (item.id === id) {
          item[name] = newValue;
        }
        setData({ ...data });
        return item; // Trả về item đã được cập nhật hoặc không thay đổi
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex space-x-4">
      {/* Cột bên trái */}
      <div className="w-2/5 bg-white rounded-lg shadow-md p-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Thông tin</h2>
        {["hocVan", "kinhNghiem", "kyNang", "duAn", "chungChi"].map((key) => (
          <div key={key} className="mb-4">
            <button
              onClick={() => setCurrentForm(key)}
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-500"
            >
              Thêm{" "}
              {key === "hocVan"
                ? "Học vấn"
                : key === "kinhNghiem"
                ? "Kinh nghiệm"
                : key === "kyNang"
                ? "Kỹ năng"
                : key === "duAn"
                ? "Dự án"
                : "Chứng chỉ"}
            </button>
            {currentForm === key && renderForm(key)}

            {/* Danh sách mục đã thêm */}
            {data[key].map((item) => (
              <div>
                <div
                  key={item.id}
                  className="mt-2 flex justify-between items-center bg-gray-50 rounded-lg p-2 shadow cursor-pointer hover:bg-gray-100"
                >
                  <span
                    onClick={() => setCurrentFormUpdate(item.id)}
                    className="text-gray-700 font-medium"
                  >
                    {item.noiHoc ||
                      item.tenCongTy ||
                      item.tenKyNang ||
                      item.tenDuAn ||
                      item.tenChungChi}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(key, item.id);
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
                    Xóa
                  </button>
                </div>
                {currentFormUpdate === item.id && renderFormUpdate(item.id)}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Khu vực bên phải */}
      <div className="w-3/5 relative bg-white rounded-lg shadow-lg p-12">
        <div class="flex flex-col justify-center items-center space-y-12 px-9">
          {formData ? (
            <>
              {/* Dòng 1: Tên */}
              <h2 className="text-2xl font-bold text-gray-800 m-0 p-0 uppercase">
                {formData.ten}
              </h2>
              <p className="text-xl p-0 m-0 uppercase"> {formData.vitri}</p>
              <div className="flex mt-1">
                <p className="text-gray-600  m-0 px-1 border-r-2 border-black ">
                  {formData.email}
                </p>
                <p className="text-gray-600  m-0 px-1 border-r-2 border-black">
                  {formData.sdt}
                </p>
                <p className="text-gray-600  m-0 px-1">{formData.diaChi}</p>
              </div>

              {/* Dòng 3: Vị trí ứng tuyển */}
            </>
          ) : (
            <h2>CV</h2>
          )}
        </div>

        {selectedItem ? (
          <div className="space-y-3 p-2 text-gray-700">
            {/* Học Vấn */}
            {selectedItem.hocVan && selectedItem.hocVan.length > 0 && (
              <div className="px-3">
                <p className="text-xl border-b p-2 uppercase">Học Vấn</p>
                <div className="px-3 pb-0.5 ">
                  {selectedItem.hocVan.map((item, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between ">
                        {item.noiHoc && (
                          <p className=" font-bold uppercase m-0  ">
                            {item.noiHoc}
                          </p>
                        )}
                        {item.diaChi && <i>{item.diaChi}</i>}
                      </div>
                      <div className="flex justify-between m-0 p-0">
                        {item.nganhHoc && (
                          <p className="m-0">{item.nganhHoc}</p>
                        )}
                        <div className="flex space-x-4 m-0 p-0">
                          {item.thoiGianBatDau && (
                            <i className="">{item.thoiGianBatDau}</i>
                          )}
                          {item.thoiGianKetThuc && (
                            <i className="pl-1">{item.thoiGianKetThuc}</i>
                          )}
                        </div>
                      </div>
                      <div className="m-0 p-0">
                        {item.diem && (
                          <p className="text-gray-800 uppercase m-0 ">
                            Điểm: {item.diem}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Kinh Nghiệm */}
            {selectedItem.kinhNghiem && selectedItem.kinhNghiem.length > 0 && (
              <div className="px-3">
                <p className="text-xl border-b p-2 uppercase">Kinh Nghiệm</p>
                {selectedItem.kinhNghiem.map((item, index) => (
                  <div key={index} className="space-y-4 pb-2 px-3 pb-0.5">
                    <div className="flex justify-between  ">
                      {item.tenCongTy && (
                        <p className=" font-bold uppercase m-0 ">
                          {item.tenCongTy}
                        </p>
                      )}
                      <div className="flex space-x-4 m-0 p-0">
                        {item.thoiGianBatDau && (
                          <i className="ml-1 ">{item.thoiGianBatDau}</i>
                        )}
                        {item.thoiGianKetThuc && (
                          <i className="mr-1">{item.thoiGianKetThuc}</i>
                        )}
                      </div>
                    </div>
                    {item.viTri && <p className="m-0">{item.viTri}</p>}
                    {item.moTa && <p className="m-0 px-4">{item.moTa}</p>}
                  </div>
                ))}
              </div>
            )}
            {/* Kỹ Năng */}
            {selectedItem.kyNang && selectedItem.kyNang.length > 0 && (
              <div className="px-3">
                <p className="text-xl border-b p-2 uppercase">kỹ năng</p>
                {selectedItem.kyNang.map((item, index) => (
                  <div key={index} className="flex px-3 space-y-2 ">
                    {item.tenKyNang && (
                      <p className="w-2/5 uppercase m-0">
                        {item.tenKyNang === "languages" &&
                          "Programming Languages:"}
                        {item.tenKyNang === "frameworks" &&
                          "Libraries / Frameworks:"}
                        {item.tenKyNang === "tools" && "Tools / Platforms:"}
                        {item.tenKyNang === "databases" && "Databases:"}
                      </p>
                    )}
                    {item.moTa && <i className="w-3/5 m-0 ">{item.moTa}</i>}
                  </div>
                ))}
              </div>
            )}
            {/* Dự Án */}
            {selectedItem.duAn && selectedItem.duAn.length > 0 && (
              <div className="px-3">
                <p className="text-xl border-b p-2 uppercase">Dự án</p>
                {selectedItem.duAn && selectedItem.duAn.length > 0 && (
                  <div>
                    {selectedItem.duAn.map((item, index) => (
                      <div key={index} className="px-3 pb-0.5 ">
                        <div className="grid grid-cols-2 gap-4 mt-2">
                          <div className="flex">
                            {item.tenDuAn && (
                              <p className="font-bold m-0 p-0 border-r-2 px-2 ">
                                {item.tenDuAn}
                              </p>
                            )}
                            {item.link && (
                              <a
                                href={`${item.link}`}
                                className="font-bold m-0 p-0 text-black underline px-2"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Link
                              </a>
                            )}
                          </div>

                          <div className="text-right">
                            {" "}
                            {item.congNghe && (
                              <i className="m-0 p-0">{item.congNghe}</i>
                            )}
                          </div>
                        </div>
                        {item.moTa && (
                          <p className="m-0 px-6 py-2">{item.moTa}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Chứng Chỉ */}
            {selectedItem.chungChi && selectedItem.chungChi.length > 0 && (
              <div className="px-3">
                <p className="text-xl border-b p-2 uppercase">chứng chỉ</p>
                {selectedItem.chungChi.map((item, index) => (
                  <div
                    key={index}
                    className="flex px-3 space-y-2 justify-between "
                  >
                    <div className="flex">
                      {item.tenChungChi && (
                        <p className="font-bold m-0 p-0 text-black px-2 border-r-2">
                          {item.tenChungChi}
                        </p>
                      )}
                      {item.link && (
                        <a
                          href={`${item.link}`}
                          className="font-bold m-0 p-0 text-black underline px-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Link :
                        </a>
                      )}

                      {item.ketQua && <p className="m-0 px-2">{item.ketQua}</p>}
                    </div>
                    {item.donViCap && (
                      <p className="m-0 px-2">{item.donViCap}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <p className="text-white">Chọn một mục để hiển thị chi tiết.</p>
        )}
        <div class="absolute bottom-3 right-3">
          <button
            onClick={handleSave}
            className="flex bg-green-500 py-2 px-6 text-white border rounded-lg "
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CVFormScreen;
