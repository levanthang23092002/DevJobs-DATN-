import React, { useState } from "react";
import { Link } from "react-router-dom";
import tuyendung from "../../assets/image/tuyendung.png";

const company = {
  idCongTy: 10,
  tenCongTy: "Công ty TNHH Xuất Nhập Khẩu Việt",
  diaChi: "707 Đường J, Quảng Ninh",
  email: "export@vietxuatnhapkhau.com",
  sDT: "0444455566",
  linkWeb: "https://vietxuatnhapkhau.com",
  nganhNghe: "Xuất nhập khẩu",
  soLuongNhanVien: 70,
  logo: "https://via.placeholder.com/50",
  trangThai: "Hoạt động",
  ngayThanhLap: "2013-06-18",
  moTa: "Chuyên xuất nhập khẩu hàng hóa.",
  id_loaiTaiKhoan: 3,

  ngayTao: "2024-12-13",
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
    tenBaiDang: "Product Development Engineer",
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
  {
    idbaiDang: 5,
    tenBaiDang: "Solutions Architect",
    idCongTy: 105,
    tenCongTy: "Sopra Steria",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "Solutions Architect",
    hanChot: "2024-12-26",
    tinhThanh: "France",
    soLuong: 4,
  },
  {
    idbaiDang: 6,
    tenBaiDang: "Web Design Developer",
    idCongTy: 106,
    tenCongTy: "Hitachi",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "Web Design Developer",
    hanChot: "2024-12-20",
    tinhThanh: "India",
    soLuong: 6,
  },
  {
    idbaiDang: 7,
    tenBaiDang: "Business Developer",
    idCongTy: 107,
    tenCongTy: "team.blue",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "Business Developer",
    hanChot: "2024-12-18",
    tinhThanh: "Netherlands",
    soLuong: 8,
  },
  {
    idbaiDang: 8,
    tenBaiDang: "Creative Tech Developer",
    idCongTy: 108,
    tenCongTy: "Devoteam",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "Web Developer",
    hanChot: "2024-12-15",
    tinhThanh: "France",
    soLuong: 3,
  },
  {
    idbaiDang: 9,
    tenBaiDang: "Senior Backend Developer",
    idCongTy: 109,
    tenCongTy: "Xyz Tech",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "Backend Developer",
    hanChot: "2024-12-22",
    tinhThanh: "Germany",
    soLuong: 4,
  },
];
const CompanyDetail = () => {
  const [visibleJobs, setVisibleJobs] = useState(4); // Hiển thị 4 công việc ban đầu

  const handleLoadMore = () => {
    setVisibleJobs((prev) => Math.min(prev + 4, jobList.length)); // Tăng thêm 4 hoặc đến khi hết danh sách
  };
  return (
    <div className="flex container">
      <div className="w-4/6">
        <div className=" min-h-screen py-8 px-4">
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-6">
            <div className="flex items-center   px-6 py-4">
              <img
                src={company.logo}
                alt={company.tenCongTy}
                className="w-32 h-32  mr-4"
              />
              <div>
                <h1 className="text-2xl font-bold">
                  <a
                    href={company.linkWeb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="color-item no-underline"
                  >
                    {company.tenCongTy}
                  </a>
                </h1>
                <p className="text-lg text-black ">{company.nganhNghe}</p>
              </div>
            </div>

            <div className="px-6 py-4 space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-700">
                  Thông tin cơ bản
                </h2>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div className="flex">
                    <p className="font-medium m-0 ">Địa chỉ:</p>
                    <p className="m-0">{company.diaChi}</p>
                  </div>
                  <div className="flex">
                    <p className="font-medium">Email:</p>
                    <p className="m-0">{company.email}</p>
                  </div>
                  <div className="flex">
                    <p className="font-medium m-0">Ngày thành lập:</p>
                    <p className="m-0">
                      {new Date(company.ngayThanhLap).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex">
                    <p className="font-medium m-0">Số điện thoại:</p>
                    <p className="m-0">{company.sDT}</p>
                  </div>

                  <div className="flex">
                    <p className="font-medium m-0">Số lượng nhân viên: </p>
                    <p className="m-0"> {company.soLuongNhanVien}</p>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-700">
                    Liên kết
                  </h2>
                  <a
                    href={company.linkWeb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:no-underline hover:text-red-600"
                  >
                    {company.linkWeb}
                  </a>
                </div>
                <h2 className="text-xl font-semibold text-gray-700">
                  Mô tả công ty
                </h2>
                <p className="mt-2 text-gray-600">{company.moTa}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 px-4">
            {jobList.length > 0 ? (
              jobList.slice(0, visibleJobs).map((job) => (
                <div
                  key={job.idbaiDang}
                  className="border-2 px-4 py-3 rounded-lg shadow-md relative"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={job.logoCongTy}
                      alt={job.tenCongTy}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold m-0">{job.tenCongTy}</p>
                    </div>
                  </div>
                  {/* Hạn chót ở góc trên bên phải */}
                  <p className="absolute top-6 right-4 text-sm">
                    Deadline: {job.hanChot}
                  </p>
                  <p className="text-base font-bold p-2 m-0">
                    {job.tenBaiDang}
                  </p>
                  <p className="text-sm px-2 m-0">{job.viTri}</p>
                  <Link
                    to={`/job/${job.idbaiDang}`}
                    className="color-item hover:no-underline hover:text-[#0cc0df]"
                  >
                    <p className="text-sm px-2 m-0 text-right">Xem chi tiết</p>
                  </Link>
                </div>
              ))
            ) : (
              <div>Chưa có Bài Ứng Tuyển</div>
            )}

         
          </div>
          {visibleJobs < jobList.length && (
            <div className="flex text-center justify-center mt-4">
              <button
                onClick={handleLoadMore}
                className=" text-blue-600 text-lg px-4 py-2 "
              >
                Xem thêm
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="w-2/6">
        <img src={tuyendung} className="h-auto w-3/4 mt-10 rounded-lg" />
      </div>
    </div>
  );
};
export default CompanyDetail;
