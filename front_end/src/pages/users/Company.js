import React, { useState } from "react";
import { Link } from "react-router-dom";

const companyList = [
  {
    idCongTy: 1,
    tenCongTy: "Công ty TNHH Phần mềm ABC",
    diaChi: "123 Đường A, Quận 1, TP.HCM",
    email: "contact@abcsoft.com",
    sDT: "0123456789",
    linkWeb: "https://abcsoft.com",
    nganhNghe: "Công nghệ thông tin",
    soLuongNhanVien: 150,
    logo: "https://via.placeholder.com/50",
    trangThai: "Hoạt động",
    ngayThanhLap: "2010-05-20",
    moTa: "Chuyên cung cấp phần mềm quản lý doanh nghiệp.",
    id_loaiTaiKhoan: 1,
    matKhau: "abc123",
    ngayTao: "2024-12-13",
  },
  {
    idCongTy: 2,
    tenCongTy: "Công ty Cổ phần Xây dựng XYZ",
    diaChi: "456 Đường B, Hà Nội",
    email: "info@xyzbuild.com",
    sDT: "0987654321",
    linkWeb: "https://xyzbuild.com",
    nganhNghe: "Xây dựng",
    soLuongNhanVien: 500,
    logo: "https://via.placeholder.com/50",
    trangThai: "Hoạt động",
    ngayThanhLap: "2005-03-15",
    moTa: "Dẫn đầu trong lĩnh vực xây dựng và thi công.",
    id_loaiTaiKhoan: 2,
    matKhau: "xyz456",
    ngayTao: "2024-12-13",
  },
  {
    idCongTy: 3,
    tenCongTy: "Công ty TNHH Thương mại GIA ĐÌNH",
    diaChi: "789 Đường C, Đà Nẵng",
    email: "sales@giadinh.com",
    sDT: "0909090909",
    linkWeb: "https://giadinh.com",
    nganhNghe: "Thương mại",
    soLuongNhanVien: 300,
    logo: "https://via.placeholder.com/50",
    trangThai: "Hoạt động",
    ngayThanhLap: "2018-01-10",
    moTa: "Chuyên cung cấp sản phẩm tiêu dùng chất lượng.",
    id_loaiTaiKhoan: 3,
    matKhau: "giadinh789",
    ngayTao: "2024-12-13",
  },
  {
    idCongTy: 4,
    tenCongTy: "Công ty TNHH Dịch vụ GreenLife",
    diaChi: "101 Đường D, TP. HCM",
    email: "support@greenlife.com",
    sDT: "0888888888",
    linkWeb: "https://greenlife.com",
    nganhNghe: "Dịch vụ vệ sinh",
    soLuongNhanVien: 100,
    logo: "https://via.placeholder.com/50",
    trangThai: "Hoạt động",
    ngayThanhLap: "2012-09-01",
    moTa: "Dịch vụ vệ sinh môi trường uy tín.",
    id_loaiTaiKhoan: 1,
    matKhau: "greenlife123",
    ngayTao: "2024-12-13",
  },
  {
    idCongTy: 5,
    tenCongTy: "Công ty Cổ phần Nội thất Gỗ Việt",
    diaChi: "202 Đường E, Bình Dương",
    email: "contact@goviet.com",
    sDT: "0911223344",
    linkWeb: "https://goviet.com",
    nganhNghe: "Nội thất",
    soLuongNhanVien: 50,
    logo: "https://via.placeholder.com/50",
    trangThai: "Hoạt động",
    ngayThanhLap: "2016-11-25",
    moTa: "Thiết kế và cung cấp nội thất gỗ cao cấp.",
    id_loaiTaiKhoan: 2,
    matKhau: "goviet456",
    ngayTao: "2024-12-13",
  },
  {
    idCongTy: 6,
    tenCongTy: "Công ty TNHH Thực phẩm Tươi Sạch",
    diaChi: "303 Đường F, Cần Thơ",
    email: "freshfood@tuoisach.com",
    sDT: "0999988776",
    linkWeb: "https://tuoisach.com",
    nganhNghe: "Thực phẩm",
    soLuongNhanVien: 200,
    logo: "https://via.placeholder.com/50",
    trangThai: "Hoạt động",
    ngayThanhLap: "2020-02-14",
    moTa: "Cung cấp thực phẩm sạch cho gia đình Việt.",
    id_loaiTaiKhoan: 1,
    matKhau: "fresh123",
    ngayTao: "2024-12-13",
  },
  {
    idCongTy: 7,
    tenCongTy: "Công ty TNHH Du lịch Việt Nam",
    diaChi: "404 Đường G, Nha Trang",
    email: "info@dulichvietnam.com",
    sDT: "0777888999",
    linkWeb: "https://dulichvietnam.com",
    nganhNghe: "Du lịch",
    soLuongNhanVien: 120,
    logo: "https://via.placeholder.com/50",
    trangThai: "Hoạt động",
    ngayThanhLap: "2017-07-07",
    moTa: "Dịch vụ tour du lịch trọn gói.",
    id_loaiTaiKhoan: 3,
    matKhau: "dulichvn789",
    ngayTao: "2024-12-13",
  },
  {
    idCongTy: 8,
    tenCongTy: "Công ty TNHH Phát triển Công nghệ Việt",
    diaChi: "505 Đường H, Hải Phòng",
    email: "tech@congngheviet.com",
    sDT: "0666777888",
    linkWeb: "https://congngheviet.com",
    nganhNghe: "Công nghệ",
    soLuongNhanVien: 80,
    logo: "https://via.placeholder.com/50",
    trangThai: "Hoạt động",
    ngayThanhLap: "2014-10-10",
    moTa: "Phát triển phần mềm và ứng dụng di động.",
    id_loaiTaiKhoan: 1,
    matKhau: "techviet123",
    ngayTao: "2024-12-13",
  },
  {
    idCongTy: 9,
    tenCongTy: "Công ty TNHH Thiết kế Thời Trang",
    diaChi: "606 Đường I, Huế",
    email: "fashion@thietkethoitran.com",
    sDT: "0555566677",
    linkWeb: "https://thietkethoitran.com",
    nganhNghe: "Thời trang",
    soLuongNhanVien: 60,
    logo: "https://via.placeholder.com/50",
    trangThai: "Hoạt động",
    ngayThanhLap: "2019-03-30",
    moTa: "Thiết kế thời trang cao cấp.",
    id_loaiTaiKhoan: 2,
    matKhau: "fashion789",
    ngayTao: "2024-12-13",
  },
  {
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
  },
];

const jobList = [
  {
    id: 1,
    tenBaiDang: "Senior Frontend Developer at Google",
    tenCongTy: "Google LLC",
    luongBatDau: "2000 USD",
    luongKetThuc: "4000 USD",
    tinhThanh: "California",
    viTri: "Frontend Developer",
  },
  {
    id: 2,
    tenBaiDang: "Backend Engineer for Payment Systems",
    tenCongTy: "Stripe Inc.",
    luongBatDau: "3000 USD",
    luongKetThuc: "5000 USD",
    tinhThanh: "New York",
    viTri: "Backend Engineer",
  },
  {
    id: 3,
    tenBaiDang: "Junior Fullstack Developer (Remote)",
    tenCongTy: "Amazon Web Services",
    luongBatDau: "1500 USD",
    luongKetThuc: "3000 USD",
    tinhThanh: "Washington",
    viTri: "Fullstack Developer",
  },
  {
    id: 1,
    tenBaiDang: "Senior Frontend Developer at Google",
    tenCongTy: "Google LLC",
    luongBatDau: "2000 USD",
    luongKetThuc: "4000 USD",
    tinhThanh: "California",
    viTri: "Frontend Developer",
  },
  {
    id: 2,
    tenBaiDang: "Backend Engineer for Payment Systems",
    tenCongTy: "Stripe Inc.",
    luongBatDau: "3000 USD",
    luongKetThuc: "5000 USD",
    tinhThanh: "New York",
    viTri: "Backend Engineer",
  },
];
const Company = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const companiesPerPage = 5; // Số lượng công ty hiển thị mỗi trang.

  // Tính toán các công ty ở trang hiện tại
  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompanies = companyList.slice(
    indexOfFirstCompany,
    indexOfLastCompany
  );

  // Số trang
  const totalPages = Math.ceil(companyList.length / companiesPerPage);

  // Hàm chuyển trang
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  return (
    <div className="flex container w-full">
      <div className="p-4 space-y-4 w-4/6">
        {currentCompanies.map((company) => (
          <Link
            to={`/company/${company.idCongTy}`}
            className="no-underline flex items-start "
          >
            {" "}
            <div
              key={company.idCongTy}
              className="flex items-start bg-green-50  rounded-lg shadow-lg p-4 border hover:shadow-xl hover:bg-green-100 hover:border-2 transition-shadow duration-300 items-center"
            >
              {/* Logo */}
              <img
                src={company.logo}
                alt={company.tenCongTy}
                className="flex w-24 h-24 rounded object-cover "
              />

              {/* Thông tin chi tiết */}
              <div className="ml-4 flex-1">
                {/* Tiêu đề */}
                <h4 className="text-lg font-semibold color-item truncate truncate w-[500px]">
                  {company.tenCongTy}
                </h4>

                {/* Tên công ty */}
                <p className="text-sm text-gray-700 font-semibold mb-1">
                  {company.diaChi}
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  {company.nganhNghe}
                </p>

                {/* Địa điểm và vị trí */}
                <p className="text-sm text-gray-500 mb-1">
                  Số Điện Thoại: {company.sDT} | Email : {company.email}
                </p>

                {/* Mức lương */}
              </div>

              {/* Thời gian cập nhật và nút lưu */}
              <div className="ml-4 text-right">
                <p className="text-sm text-gray-400">
                  Ngày Thành Lập: {company.ngayThanhLap}
                </p>
                <button className="color-item hover:text-red-600 mt-2">
                  xem Chi Tiết
                </button>
              </div>
            </div>
          </Link>
        ))}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={goToPreviousPage}
            className={`px-4 py-2 rounded ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-green-500 text-white hover:bg-green-600"
            }`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="font-bold">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            className={`px-4 py-2 rounded ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-green-500 text-white hover:bg-green-600"
            }`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
      <div className="w-2/6 text-black flex flex-col ">
        <div className="space-y-2 bg-green-100 rounded border-1 ml-20 my-4 p-4 ">
          <h5 className=" flex text-red-600 uppercase px-2">Job Hot</h5>
          {jobList.map((jobItem) => (
            <Link to={`/job/${jobItem.idbaiDang}`} className="no-underline ">
              <div key={jobItem.id} className="border-b-2 border-gray-600  px-4 py-2">
                <div className="flex items-center">
                  <div className="flex-1">
                    {/* Tên bài đăng */}
                    <h6 className="font-bold text-base truncate w-64 text-black ">
                      {jobItem.tenBaiDang}
                    </h6>
                    {/* Tên công ty */}
                    <p className="text-sm text-gray-600 truncate w-64 mb-1 ">
                      {jobItem.tenCongTy}
                    </p>
                  </div>
                </div>

                {/* Thông tin tỉnh thành, vị trí và lương */}
                <div className="flex justify-between m-0">
                  <p className="text-sm text-gray-600 m-0 ">
                    {jobItem.tinhThanh}
                  </p>
                  <p className="text-sm text-gray-600 m-0">{jobItem.viTri}</p>
                </div>
                <div className="flex justify-between m-0">
                  <p className="text-sm text-gray-600">
                    {`Lương: ${jobItem.luongBatDau} - ${jobItem.luongKetThuc}`}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Company;
