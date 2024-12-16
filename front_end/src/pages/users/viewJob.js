import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { SlPhone } from "react-icons/sl";
import { TbWorld } from "react-icons/tb";

const job = {
  id_baiDang: 1,
  logo: "https://via.placeholder.com/40",
  tenCongTy: "Công Ty ABC",
  nganhNghe: "Công Nghệ",
  linkWeb: "abc.com",
  tenBaiDang: "Tuyển Dụng Lập Trình Viên",
  viTri: "Lập Trình Viên",
  soLuong: 5,
  trangThai: "Chờ Duyệt",
  hinhAnh: "https://via.placeholder.com/100",
  luongBatDau: 10000000,
  luongKetThuc: 20000000,
  hanChot: "2024-12-31",
  ngayDang: "2024-12-01",
  ngaySua: "2024-12-03",
  diaChiCuThe: "123 Đường A",
  tinhThanh: "Đà Nẵng",
  moTa: "abcd ",
  yeuCau: [
    {
      id: 1,
      noidung: "tiếng anh",
    },
    {
      id: 2,
      noidung: "Đã tốt nghiệp",
    },
  ],
};
const jobList = [
  {
    idbaiDang: 1,
    tenBaiDang: "R/Shiny Developer",
    idCongTy: 101,
    tenCongTy: "Appslion",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "R/Shiny Developer",
    hanChot: "2024-12-30",
    tinhThanh: "Poland",
    soLuong: 5,
  },
  {
    idbaiDang: 2,
    tenBaiDang: "Back End Developer",
    idCongTy: 102,
    tenCongTy: "Brillio",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "Backend Developer",
    hanChot: "2024-12-25",
    tinhThanh: "Mexico",
    soLuong: 3,
  },
  {
    idbaiDang: 3,
    tenBaiDang: "Product Development Engineer sdffsfdfdsdfsdfs dsfdsf à á adfss",
    idCongTy: 103,
    tenCongTy: "Pixelle",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "Product Engineer",
    hanChot: "2024-12-28",
    tinhThanh: "United States",
    soLuong: 7,
  },
  {
    idbaiDang: 4,
    tenBaiDang: "Frontend Architect",
    idCongTy: 104,
    tenCongTy: "Wix",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "Frontend Architect",
    hanChot: "2024-12-22",
    tinhThanh: "Israel",
    soLuong: 2,
  },
];
function ViewJob() {
  return (
    <div className="container flex ">
      <div className="flex w-full p-12 ">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-4/6">
          {/* Hình ảnh bìa */}
          <div className="relative">
            <img
              src={job.hinhAnh}
              alt="Background"
              className="w-full h-80 object-cover"
            />
          </div>

          {/* Nội dung chính */}
          <div className="p-6">
            {/* Tiêu đề */}
            <div className="flex justify-between">
              <div className="flex">
                <img
                  src={job.logo}
                  alt={job.tenCongTy}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-xl font-bold color-item">
                    {job.tenBaiDang} tại - {job.tenCongTy}
                  </h2>
                  <p className="text-sm text-gray-500">{job.nganhNghe}</p>
                </div>
              </div>
              <div className="justify-between items-center">
                <p>
                  <i className="p-2 text-sm color-item">
                    <strong>Hạn Chốt: </strong>
                    {job.hanChot}
                  </i>
                </p>
                <p className="px-2 py-1 text-xs font-medium inline-block rounded-full bg-color-item text-white">
                  {job.tinhThanh}
                </p>
              </div>
            </div>

            {/* Lương */}
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-green-600">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(job.luongBatDau)}{" "}
                -{" "}
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(job.luongKetThuc)}
              </p>
            </div>
            <div className="text-sm text-gray-600 mt-2">
              <p>
                <strong className="text-lg font-semibold text-gray-800">
                  Mô tả:{" "}
                </strong>
                {job.moTa}
              </p>
            </div>

            {/* Thông tin tuyển dụng */}
            <div className="flex justify-between">
              <div>
                <h3 className=" text-lg font-semibold text-gray-800">
                  Thông Tin Tuyển Dụng
                </h3>
                <div className="text-sm text-gray-600 space-y-2 mt-2">
                  <p>
                    <strong>Vị Trí:</strong> {job.viTri}
                  </p>
                  <p>
                    <strong>Số lượng cần tuyển:</strong> {job.soLuong} người
                  </p>
                  <p>
                    <strong>Nơi làm việc:</strong> {job.diaChiCuThe},{" "}
                    {job.tinhThanh}
                  </p>
                  <p>
                    <strong>Hạn nộp:</strong> {job.hanChot}
                  </p>
                </div>
              </div>
              <div>
                <h3 className=" text-lg font-semibold text-gray-800">
                  Yêu Cầu Công Việc
                </h3>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
                  {job.yeuCau.map((item) => (
                    <li key={item.id}>{item.noidung}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Liên Lạc
                </h3>
                <div className="text-sm text-gray-600 space-y-2 mt-2">
                  <p className="flex items-center space-x-2">
                    <AiOutlineMail className="text-lg text-gray-600" />
                    <span className="text-sm text-gray-800">{job.email}</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <SlPhone className="text-lg text-gray-600" />
                    <span className="text-sm text-gray-800">{job.sDT}</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <TbWorld className="text-lg text-gray-600" />
                    <span className="text-sm text-gray-800">{job.linkWeb}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/6 px-4 py-2">
          <h3 className="text-lg font-semibold text-gray-800">
            Danh sách công việc
          </h3>
          <div className="space-y-4 mt-4">
            {jobList.map((jobItem) => (
              <div
                key={jobItem.id}
                className="bg-white rounded-lg shadow-lg px-4 py-2"
              >
                {/* Phần logo và tên công ty */}
                <div className="flex items-center">
                  <img
                    src={jobItem.logoCongTy}
                    alt={jobItem.tenCongTy}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div className="flex-1">
                    <h6 className="font-semibold text-lg truncate w-64 color-item truncate">
                      {jobItem.tenBaiDang}
                    </h6>
                    <p className="text-sm text-gray-600 truncate">
                      {jobItem.tenCongTy}
                    </p>
                  </div>
                </div>

                {/* Thông tin tỉnh thành và vị trí */}
                <div className="flex justify-between m-0">
                  <p className="text-sm text-gray-600 truncate">
                    {jobItem.tinhThanh}
                  </p>
                  <p className="text-sm text-gray-600 truncate">
                    {jobItem.viTri}
                  </p>
                </div>

                {/* Liên kết xem chi tiết công việc */}
                <Link
                  to={`/job/${jobItem.idbaiDang}`} // Đường dẫn chi tiết công việc
                  className="color-item hover:text-red-600 mt-2 block "
                >
                  Xem chi tiết
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ViewJob;
