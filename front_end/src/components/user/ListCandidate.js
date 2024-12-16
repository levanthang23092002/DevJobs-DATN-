import React, { useState } from "react";
import { Link } from "react-router-dom";

const CandidateList = ({ candidates, setCandidates }) => {
  const [filterStatus, setFilterStatus] = useState(3); // Mặc định là "Tất cả"

  // Thay đổi trạng thái của ứng viên
  const handleStatusChange = (id, newStatus) => {
    const updatedCandidates = candidates.map((candidate) => {
      alert(id === candidate.idNguoiDung);
      if (candidate.idNguoiDung == id) {
        candidate.idTrangThai = newStatus;
        alert(candidate.idTrangThai);
      }

      return candidate;
    });
  

    setCandidates(updatedCandidates);
  };

  // Lọc danh sách ứng viên theo trạng thái
  const filteredCandidates =
    filterStatus === 3 // Nếu filterStatus là 3 ("Tất cả"), không lọc
      ? candidates
      : candidates.filter(
          (candidate) => candidate.idTrangThai === filterStatus
        );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-medium mb-4">Danh sách ứng viên</h2>

      {/* Lọc theo trạng thái */}
      <div className="mb-4">
        <label className="mr-2 text-lg">Lọc theo trạng thái:</label>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(parseInt(e.target.value))}
          className="px-4 py-2 border border-gray-300 rounded-md"
        >
          <option value={3}>Tất cả</option>
          <option value={0}>Chưa Duyệt</option>
          <option value={1}>Đã Note</option>
          <option value={2}>Đã Duyệt</option>
          <option value={-1}>Đã Khoá</option>
          <option value={-2}>Đã Huỷ</option>
        </select>
      </div>

      {/* Danh sách ứng viên */}
      <ul className="space-y-4">
        {filteredCandidates.map((candidate) => (
          <li
            key={candidate.idNguoiDung}
            className="flex items-center justify-between"
          > <Link to={`/view/CV/${candidate.idNguoiDung}`} className="no-underline text-black">
            <div className="flex items-center">
              <img
                src={candidate.logo}
                alt={candidate.tenNguoiDung}
                className="w-10 h-10 rounded-full mr-4"
              />
              <span className="text-lg ">{candidate.tenNguoiDung}</span>
            </div>
          </Link>
            

            {/* Dropdown cho trạng thái */}
            <div className="flex items-center space-x-2">
              <select
                value={candidate.idTrangThai}
                onChange={(e) =>
                  handleStatusChange(
                    candidate.idNguoiDung,
                    parseInt(e.target.value)
                  )
                }
                className="px-2 py-2 border text-sm border-gray-300 rounded-md"
              >
                <option value={0}>Chưa Duyệt</option>
                <option value={1}>Đã Note</option>
                <option value={2}>Đã Duyệt</option>
                <option value={-1}>Đã Khoá</option>
                <option value={-2}>Đã Huỷ</option>
              </select>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandidateList;
