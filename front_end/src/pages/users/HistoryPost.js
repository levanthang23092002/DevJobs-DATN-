import { IoMdClose } from "react-icons/io";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { SlPhone } from "react-icons/sl";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";

const HistoryPost = () => {
  const posts = [
    {
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
    },
    {
      id_baiDang: 2,
      logo: "https://via.placeholder.com/40",
      tenCongTy: "Công Ty XYZ",
      nganhNghe: "Công Nghệ",
      linkWeb: "abc.com",
      tenBaiDang: "Tuyển Dụng QA",
      viTri: "QA",
      email: "abc",
      sDT: "0966948914",
      soLuong: 3,
      trangThai: "Đã Duyệt",
      hinhAnh: "https://via.placeholder.com/100",
      luongBatDau: 8000000,
      luongKetThuc: 15000000,
      hanChot: "2024-12-15",
      ngayDang: "2024-11-20",
      ngaySua: "2024-11-25",
      diaChiCuThe: "456 Đường B",
      tinhThanh: "Hà Nội",
      moTa: "abcd ",
      yeuCau: [
        {
          id: 3,
          noidung: "tiếng anh",
        },
        {
          id: 4,
          noidung: "Đã tốt nghiệp",
        },
      ],
    },
    {
      id_baiDang: 3,
      logo: "https://via.placeholder.com/40",
      tenCongTy: "Công Ty LMN",
      nganhNghe: "Công Nghệ",
      linkWeb: "abc.com",
      tenBaiDang: "Tuyển Dụng Designer",
      viTri: "Designer",
      soLuong: 2,
      trangThai: "Đã Hủy",
      hinhAnh: "https://via.placeholder.com/100",
      luongBatDau: 12000000,
      luongKetThuc: 25000000,
      hanChot: "2024-12-20",
      ngayDang: "2024-11-15",
      ngaySua: "2024-11-18",
      diaChiCuThe: "789 Đường C",
      tinhThanh: "Hồ Chí Minh",
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
    },
    {
      id_baiDang: 4,
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
    },
    {
      id_baiDang: 5,
      logo: "https://via.placeholder.com/40",
      tenCongTy: "Công Ty XYZ",
      nganhNghe: "Công Nghệ",
      linkWeb: "abc.com",
      tenBaiDang: "Tuyển Dụng QA",
      viTri: "QA",
      email: "abc",
      sDT: "0966948914",
      soLuong: 3,
      trangThai: "Đã Duyệt",
      hinhAnh: "https://via.placeholder.com/100",
      luongBatDau: 8000000,
      luongKetThuc: 15000000,
      hanChot: "2024-12-15",
      ngayDang: "2024-11-20",
      ngaySua: "2024-11-25",
      diaChiCuThe: "456 Đường B",
      tinhThanh: "Hà Nội",
      moTa: "abcd ",
      yeuCau: [
        {
          id: 3,
          noidung: "tiếng anh",
        },
        {
          id: 4,
          noidung: "Đã tốt nghiệp",
        },
      ],
    },
    {
      id_baiDang: 6,
      logo: "https://via.placeholder.com/40",
      tenCongTy: "Công Ty LMN",
      nganhNghe: "Công Nghệ",
      linkWeb: "abc.com",
      tenBaiDang: "Tuyển Dụng Designer",
      viTri: "Designer",
      soLuong: 2,
      trangThai: "Đã Hủy",
      hinhAnh: "https://via.placeholder.com/100",
      luongBatDau: 12000000,
      luongKetThuc: 25000000,
      hanChot: "2024-12-20",
      ngayDang: "2024-11-15",
      ngaySua: "2024-11-18",
      diaChiCuThe: "789 Đường C",
      tinhThanh: "Hồ Chí Minh",
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
    },
    {
      id_baiDang: 7,
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
    },
    {
      id_baiDang: 8,
      logo: "https://via.placeholder.com/40",
      tenCongTy: "Công Ty XYZ",
      nganhNghe: "Công Nghệ",
      linkWeb: "abc.com",
      tenBaiDang: "Tuyển Dụng QA",
      viTri: "QA",
      email: "abc",
      sDT: "0966948914",
      soLuong: 3,
      trangThai: "Đã Duyệt",
      hinhAnh: "https://via.placeholder.com/100",
      luongBatDau: 8000000,
      luongKetThuc: 15000000,
      hanChot: "2024-12-15",
      ngayDang: "2024-11-20",
      ngaySua: "2024-11-25",
      diaChiCuThe: "456 Đường B",
      tinhThanh: "Hà Nội",
      moTa: "abcd ",
      yeuCau: [
        {
          id: 3,
          noidung: "tiếng anh",
        },
        {
          id: 4,
          noidung: "Đã tốt nghiệp",
        },
      ],
    },
    {
      id_baiDang: 9,
      logo: "https://via.placeholder.com/40",
      tenCongTy: "Công Ty LMN",
      nganhNghe: "Công Nghệ",
      linkWeb: "abc.com",
      tenBaiDang: "Tuyển Dụng Designer",
      viTri: "Designer",
      soLuong: 2,
      trangThai: "Đã Hủy",
      hinhAnh: "https://via.placeholder.com/100",
      luongBatDau: 12000000,
      luongKetThuc: 25000000,
      hanChot: "2024-12-20",
      ngayDang: "2024-11-15",
      ngaySua: "2024-11-18",
      diaChiCuThe: "789 Đường C",
      tinhThanh: "Hồ Chí Minh",
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
    },
    // Thêm các đối tượng khác tương tự...
  ];
  const uers = {
    id: 3,
    quyen: "Company",
  };

  const statusOptions = ["Sửa", "Duyệt", "Hủy", "Khóa"];
  const [post, setPost] = useState(posts);
  const [currentPost, setCurrentPost] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(post.length / itemsPerPage);

  const handleStatusChange = (id, newStatus) => {
    const update = post.map((posts) =>
      posts.id_baiDang === id
        ? {
            ...posts,
            trangThai:
              newStatus === "Duyệt"
                ? "Đã Duyệt"
                : newStatus === "Hủy"
                ? "Đã Hủy"
                : "Đã Khóa",
          }
        : posts
    );

    setPost(update);
  };

  const startIndex = (currentPost - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = post.slice(startIndex, endIndex);
  const handleViewDetails = (posts) => {
    setIsModalOpen(posts); // Hiển thị thông tin ứng viên trong modal
  };

  const closeDetailsModal = () => {
    setIsModalOpen(null);
  };

  return (
    <div className="container mx-auto p-2">
      <h2 className="text-2xl font-semibold mb-2 text-gray-300">
        Quản Lí Bài Đăng
      </h2>
      <div className="overflow-x-auto shadow-md sm:rounded-lg ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-300 uppercase bg-custom-item">
            <tr className="bg-custom-item">
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Danh nghiệp</th>
              <th className="px-6 py-3">Tên Bài Đăng</th>
              <th className="px-6 py-3">Vị Trí</th>
              <th className="px-6 py-3">Số lượng</th>
              <th className="px-6 py-3">Trạng Thái</th>
              <th className="px-6 py-3">Chỉnh Sửa</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((post) => (
              <tr
                key={post.id_baiDang}
                className="bg-gray-800 border-b text-white cursor-pointer"
              >
                <td className="px-6 py-3 font-medium text-white">
                  {post.id_baiDang}
                </td>
                <td className="px-6 py-3 flex">
                  <img
                    src={post.logo}
                    alt={post.tenCongTy}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <div>{post.tenCongTy}</div>
                    <div className="text-gray-500 text-sm">
                      {post.nganhNghe}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3">{post.tenBaiDang}</td>
                <td className="px-6 py-3">{post.viTri}</td>
                <td className="px-6 py-3">{post.soLuong}</td>
                <td className="px-6 py-3">
                  <span
                    className={`px-2 py-1 text-xs font-medium inline-block rounded-full ${
                      post.trangThai === "Đã Duyệt"
                        ? "bg-blue-200 text-blue-800"
                        : post.trangThai === "Chờ Duyệt"
                        ? "bg-yellow-200 text-yellow-800"
                        : post.trangThai === "Đã Hủy"
                        ? "bg-red-300 text-red-800"
                        : "bg-gray-300 text-red-800"
                    }`}
                  >
                    {post.trangThai}
                  </span>
                </td>
                <td className="px-6 py-3 flex items-center ">
                  <select
                    value={post.trangThai}
                    onChange={(e) =>
                      handleStatusChange(post.id_baiDang, e.target.value)
                    }
                    className="border border-gray-300 text-gray-900 rounded-md text-sm p-1"
                  >
                    {statusOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {uers.quyen === "Company" && (
                    <Link
                      to={`/history/update-post/${post.id_baiDang}`}
                      className="text-xs pt-2 pl-2 text-white hover:text-red-200 no-underline"
                    >
                      Xem Thông Tin
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPost((prev) => Math.max(prev - 1, 1))}
          disabled={currentPost === 1}
          className="px-4 py-2 bg-gray-100 text-gray-800 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-white">
          Page {currentPost} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPost((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPost === totalPages}
          className="px-4 py-2 bg-gray-100 text-gray-800 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

    </div>
  );
};

export default HistoryPost;
