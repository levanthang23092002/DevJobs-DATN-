import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo-removebg-preview.png";
import { IoNotifications } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import getTimeAgo from "../../assets/Js/configTime";

import { IoIosSearch } from "react-icons/io";

var user = JSON.parse(sessionStorage.getItem("data")) || {
  quyen: null,
};

if (!user.quyen) {
  
}

var notifications = [
  {
    idThongBao: 1,
    idBaiDang: 101,
    hinhAnh:
      "https://vcdn1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=i2M2IgCcw574LT-bXFY92g",
    idNguoiDung: 201,
    noidung: "Có một công việc mới phù hợp với bạn! 1",
    thoiGian: "2024-12-14 10:00",
    trangThai: 1,
  },
  {
    idThongBao: 2,
    idBaiDang: 102,
    hinhAnh:
      "https://vcdn1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=i2M2IgCcw574LT-bXFY92g",
    idNguoiDung: 202,
    noidung: "Ứng tuyển của bạn đã được duyệt! 2",
    thoiGian: "2024-12-13 14:30",
    trangThai: 0,
  },
  {
    idThongBao: 3,
    idBaiDang: 103,
    idNguoiDung: 203,
    hinhAnh:
      "https://vcdn1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=i2M2IgCcw574LT-bXFY92g",
    noidung: "Cập nhật CV của bạn đã hoàn tất!",
    thoiGian: "2024-12-12 09:15",
    trangThai: 0,
  },
  {
    idThongBao: 4,
    idBaiDang: 104,
    idNguoiDung: 204,
    hinhAnh:
      "https://vcdn1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=i2M2IgCcw574LT-bXFY92g",

    noidung: "Có một công ty mới mời bạn phỏng vấn!",
    thoiGian: "2024-12-11 16:45",
    trangThai: 0,
  },
  {
    idThongBao: 5,
    idBaiDang: 105,
    idNguoiDung: 205,
    hinhAnh:
      "https://vcdn1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=i2M2IgCcw574LT-bXFY92g",

    noidung: "Hồ sơ của bạn đã được xem.",
    thoiGian: "2024-12-10 12:00",
    trangThai: 0,
  },
  {
    idThongBao: 6,
    idBaiDang: 106,
    hinhAnh:
      "https://vcdn1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=i2M2IgCcw574LT-bXFY92g",

    idNguoiDung: 206,
    noidung: "Đơn ứng tuyển của bạn đã hết hạn.",
    thoiGian: "2024-12-09 17:30",
    trangThai: 0,
  },
  {
    idThongBao: 7,
    idBaiDang: 107,
    hinhAnh:
      "https://vcdn1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=i2M2IgCcw574LT-bXFY92g",

    idNguoiDung: 207,
    noidung: "Có một công việc mới trong ngành của bạn.",
    thoiGian: "2024-12-08 08:20",
    trangThai: 1,
  },
  {
    idThongBao: 8,
    idBaiDang: 108,
    hinhAnh:
      "https://vcdn1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=i2M2IgCcw574LT-bXFY92g",

    idNguoiDung: 208,
    noidung: "Ứng tuyển của bạn đang được xem xét.",
    thoiGian: "2024-12-07 11:45",
    trangThai: 1,
  },
  {
    idThongBao: 9,
    idBaiDang: 109,
    hinhAnh:
      "https://vcdn1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=i2M2IgCcw574LT-bXFY92g",

    idNguoiDung: 209,
    noidung:
      "Cập nhật thông tin cá nhân của bạn Cập nhật thông tin cá nhân của bạn.",
    thoiGian: "2024-12-06 14:30",
    trangThai: 0,
  },
  {
    idThongBao: 10,
    idBaiDang: 110,
    idNguoiDung: 210,
    hinhAnh:
      "https://vcdn1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=i2M2IgCcw574LT-bXFY92g",

    noidung: "Có một lời mời phỏng vấn mới!",
    thoiGian: "2024-12-05 13:00",
    trangThai: 1,
  },
];

function Navbar() {
  const [isDropdownInfo, setIsDropdownInfo] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filterMode, setFilterMode] = useState("Tất Cả");
  const [notificationList, setNotificationList] = useState(notifications);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const filteredNotifications = notificationList.filter((notification) =>
    filterMode === "Tất Cả" ? true : notification.trangThai === 0
  );

  const markAsRead = (id) => {
    setNotificationList((prev) =>
      prev.map((notification) =>
        notification.idThongBao === id
          ? { ...notification, trangThai: 1 }
          : notification
      )
    );
  };
  const toggleDropdownNotifi = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownInfo(!isDropdownInfo);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownInfo(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    alert("Đăng xuất Thành Công");
    sessionStorage.removeItem("data");
    sessionStorage.clear();
    user = {
      quyen: null,
    };
    navigate("/");
  };
  return (
    <nav className="bg-custom text-white px-2">
      <div className=" mx-12 flex items-center justify-between">
        <ul className="flex gap-8 items-center m-0">
          <li>
            <div className="flex items-center justify-center py-2">
              <Link to="/">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-auto h-16 object-cover"
                />
              </Link>
            </div>
          </li>
          <li>
            <Link
              to="/"
              className="text-white uppercase no-underline hover:text-gray-300 transition duration-300"
            >
              Trang Chủ
            </Link>
          </li>
          {user.quyen === "User" && (
            <li>
              <Link
                to="/yourjob"
                className="text-white uppercase no-underline hover:text-gray-300 transition duration-300"
              >
                Việc Thích Hợp
              </Link>
            </li>
          )}

          <li>
            <Link
              to="/company"
              className="text-white uppercase no-underline hover:text-gray-300 transition duration-300"
            >
              Danh Nghiệp
            </Link>
          </li>
          {user.quyen === "Company" && (
            <li>
              <Link
                to="/post-job"
                className="text-white uppercase no-underline hover:text-gray-300 transition duration-300"
              >
                Đăng Bài
              </Link>
            </li>
          )}
        </ul>

        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-700 text-white p-2 w-64 rounded-md pl-8 placeholder-gray-400"
            />
            <IoIosSearch className="absolute right-2 top-2 text-white text-xl" />
          </div>

          {user.quyen ? (
            <div className="flex justify-between items-center w-24 relative">
              <div className="relative" ref={dropdownRef}>
                <IoNotifications
                  className="text-2xl cursor-pointer"
                  onClick={toggleDropdownNotifi}
                />

                {isDropdownOpen && (
                  <div className="absolute right-0 top-12 mt-2 bg-white text-black rounded-md shadow-md w-64 max-h-96 z-10 overflow-y-auto">
                    <div className="sticky top-0 bg-white z-20 shadow-sm">
                      <h5 className="p-2 font-bold border-b">Thông Báo</h5>
                      <div className="flex space-x-2 items-center px-2 py-2">
                        <button
                          className={`py-1 px-3 text-lg rounded ${
                            filterMode === "Tất Cả" ? "bg-green-100" : ""
                          }`}
                          onClick={() => setFilterMode("Tất Cả")}
                        >
                          Tất Cả
                        </button>
                        <button
                          className={`py-1 px-3 rounded ${
                            filterMode === "Chưa Đọc" ? "bg-red-100" : ""
                          }`}
                          onClick={() => setFilterMode("Chưa Đọc")}
                        >
                          Chưa Đọc
                        </button>
                      </div>
                    </div>

                    <ul className="p-0">
                      {filteredNotifications.length > 0 ? (
                        filteredNotifications.map((notification) => (
                          <Link
                            to={`/job/${notification.idBaiDang}`}
                            className="no-underline text-black"
                          >
                            {" "}
                            <li
                              key={notification.idThongBao}
                              className="px-2 py-2 border-b border-gray-300 cursor-pointer hover:bg-gray-100"
                              onClick={() =>
                                markAsRead(notification.idThongBao)
                              }
                            >
                              <div className="flex space-x-2 items-center">
                                <img
                                  src={notification.hinhAnh}
                                  className="h-10 w-10 rounded-full"
                                  alt="Notification"
                                />
                                <div>
                                  <p
                                    className={` text-sm m-0 ${
                                      notification.trangThai === 0
                                        ? "font-bold"
                                        : ""
                                    }`}
                                  >
                                    {notification.noidung}
                                  </p>
                                  <p className="text-sm text-gray-500 m-0">
                                    {getTimeAgo(notification.thoiGian)}
                                  </p>
                                </div>
                              </div>
                            </li>
                          </Link>
                        ))
                      ) : (
                        <p className="p-4 text-center text-gray-500">
                          Không có thông báo
                        </p>
                      )}
                    </ul>
                  </div>
                )}
              </div>
              {/* Avatar */}
              <div className="relative" ref={dropdownRef}>
                <img
                  className="w-10 h-10 bg-gray-600 rounded-full cursor-pointer"
                  src={user.avatar}
                  alt="User Avatar"
                  onClick={toggleDropdown}
                />

                {/* Dropdown */}
                {isDropdownInfo && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-10">
                    {user.quyen === "User" ? (
                      <ul className="text-sm text-red-600  font-semibold m-0 p-0 border-1 ">
                        <Link
                          to={`/info-candidate/${user.id}`}
                          class="no-underline color-item  rounder"
                        >
                          <li className="px-4 py-2 hover:bg-[#0cc0df] hover:text-white cursor-pointer">
                            Thông tin tài khoản
                          </li>
                        </Link>
                        <Link
                          to={`/forgot-password/${user.id}`}
                          class="no-underline color-item  rounder"
                        >
                          <li className="px-4 py-2 hover:bg-[#0cc0df] hover:text-white cursor-pointer">
                            Đổi mật khẩu
                          </li>
                        </Link>
                        <Link
                          to={`/info/${user.id}`}
                          class="no-underline color-item  rounder"
                        >
                          <li className="px-4 py-2 hover:bg-[#0cc0df] hover:text-white cursor-pointer">
                            Cập nhật CV
                          </li>
                        </Link>

                        <li
                          className="px-4 py-2  cursor-pointer"
                          onClick={handleLogout}
                        >
                          Đăng xuất
                        </li>
                      </ul>
                    ) : (
                      <ul className="text-sm text-red-600  font-semibold m-0 p-0 border-1 ">
                        <Link
                          to={`/info-company/${user.id}`}
                          class="no-underline color-item  rounder"
                        >
                          <li className="px-4 py-2 hover:bg-[#0cc0df] hover:text-white cursor-pointer">
                            Thông tin tài khoản
                          </li>
                        </Link>
                        <Link
                          to={`/forgot-password/${user.id}`}
                          class="no-underline color-item  rounder"
                        >
                          <li className="px-4 py-2 hover:bg-[#0cc0df] hover:text-white cursor-pointer">
                            Đổi mật khẩu
                          </li>
                        </Link>
                        <Link
                          to={`/history/${user.id}`}
                          class="no-underline color-item  rounder"
                        >
                          <li className="px-4 py-2 hover:bg-[#0cc0df] hover:text-white cursor-pointer">
                            Danh Sách bài Đăng
                          </li>
                        </Link>

                        <li
                          className="px-4 py-2  cursor-pointer"
                          onClick={handleLogout}
                        >
                          Đăng xuất
                        </li>
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div>
              <ul className="flex m-0 gap-8  items-center ">
                <li className="bg-color-item py-2 px-4 rounded-lg ">
                  <Link
                    to="/login"
                    className="text-white uppercase no-underline hover:text-gray-300 transition duration-300"
                  >
                    Đăng Nhập
                  </Link>
                </li>
                <li className="bg-color-item py-2 px-4 rounded-lg ">
                  <Link
                    to="/register"
                    className="text-white uppercase no-underline hover:text-gray-300 transition duration-300"
                  >
                    Đăng Kí
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
