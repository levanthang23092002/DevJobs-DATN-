import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";

const candidates = [
    { id: '#345', ten: 'John Doe', viTri: 'Web Developer', email: 'abc@gmail.com', tinhThanh: 'Madrid', trangThai: 'Chờ Duyệt', anhDaiDien: 'https://via.placeholder.com/40', ngaySinh: '1990-01-01', sDT: '123456789' },
    { id: '#347', ten: 'Ruben Tillman', viTri: 'Lorem ipsum dolor sit amet', email: 'abc@gmail.com', tinhThanh: 'Berlin', trangThai: 'Đã Duyệt', anhDaiDien: 'https://via.placeholder.com/40', ngaySinh: '1988-02-15', sDT: '987654321' },
    { id: '#346', ten: 'John Doe', viTri: 'Web Developer', email: 'abc@gmail.com', tinhThanh: 'Madrid', trangThai: 'Chờ Duyệt', anhDaiDien: 'https://via.placeholder.com/40', ngaySinh: '1990-01-01', sDT: '123456789' },
    { id: '#348', ten: 'Ruben Tillman', viTri: 'Lorem ipsum dolor sit amet', email: 'abc@gmail.com', tinhThanh: 'Berlin', trangThai: 'Đã Duyệt', anhDaiDien: 'https://via.placeholder.com/40', ngaySinh: '1988-02-15', sDT: '987654321' },
    { id: '#349', ten: 'John Doe', viTri: 'Web Developer', email: 'abc@gmail.com', tinhThanh: 'Madrid', trangThai: 'Chờ Duyệt', anhDaiDien: 'https://via.placeholder.com/40', ngaySinh: '1990-01-01', sDT: '123456789' },
    { id: '#350', ten: 'Ruben Tillman', viTri: 'Lorem ipsum dolor sit amet', email: 'abc@gmail.com', tinhThanh: 'Berlin', trangThai: 'Đã Duyệt', anhDaiDien: 'https://via.placeholder.com/40', ngaySinh: '1988-02-15', sDT: '987654321' },
    // Thêm các ứng viên khác...
];

const statusOptions = ['Sửa', 'Duyệt', 'Hủy', 'Khóa'];

const CandidateList = () => {
    const [data, setData] = useState(candidates);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCandidate, setSelectedCandidate] = useState(null); // Quản lý ứng viên được chọn
    const itemsPerPage = 5;

    const handleStatusChange = (id, newStatus) => {
        const updatedCandidates = data.map(candidate =>
            candidate.id === id
                ? { ...candidate, trangThai: newStatus === 'Duyệt' ? 'Đã Duyệt' : newStatus === 'Hủy' ? 'Đã Hủy' : 'Đã Khóa' }
                : candidate
        );
        setData(updatedCandidates);
    };

    const handleViewDetails = candidate => {
        setSelectedCandidate(candidate); // Hiển thị thông tin ứng viên trong modal
    };

    const closeDetailsModal = () => {
        setSelectedCandidate(null); // Đóng modal
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    return (
        <div className="container mx-auto p-2">
            <h2 className="text-2xl font-semibold mb-2 text-gray-300">Quản Lí Ứng Viên</h2>
            <div className="overflow-x-auto shadow-md sm:rounded-lg ">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-300 uppercase bg-custom-item">
                        <tr className="bg-custom-item">
                            <th className="px-6 py-3">ID</th>
                            <th className="px-6 py-3">Tên</th>
                            <th className="px-6 py-3">Email</th>
                            <th className="px-6 py-3">Tỉnh Thành</th>
                            <th className="px-6 py-3">Trạng Thái</th>
                            <th className="px-6 py-3">Chỉnh Sửa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map(candidate => (
                            <tr key={candidate.id} className="bg-gray-800 border-b text-white cursor-pointer" >
                                <td className="px-6 py-3 font-medium text-white">{candidate.id}</td>
                                <td className="px-6 py-3 flex">
                                    <img src={candidate.anhDaiDien} alt={candidate.name} className="w-10 h-10 rounded-full mr-4" />
                                    <div>
                                        <div>{candidate.ten}</div>
                                        <div className="text-gray-500 text-sm">{candidate.viTri}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-3">{candidate.email}</td>
                                <td className="px-6 py-3">{candidate.tinhThanh}</td>
                                <td className="px-6 py-3">
                                    <span
                                        className={`px-2 py-1 text-xs font-medium inline-block rounded-full ${candidate.trangThai === 'Đã Duyệt'
                                            ? 'bg-blue-200 text-blue-800'
                                            : candidate.trangThai === 'Chờ Duyệt'
                                                ? 'bg-yellow-200 text-yellow-800'
                                                : candidate.trangThai === 'Đã Hủy'
                                                    ? 'bg-red-200 text-red-800'
                                                    : 'bg-gray-200 text-red-800'
                                            }`}
                                    >
                                        {candidate.trangThai}
                                    </span>
                                </td>
                                <td className="px-6 py-3 flex items-center ">
                                    <select
                                        value={candidate.trangThai}
                                        onChange={e => handleStatusChange(candidate.id, e.target.value)}
                                        className="border border-gray-300 text-gray-900 rounded-md text-sm p-1"
                                    >
                                        {statusOptions.map(option => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                    <p onClick={() => handleViewDetails(candidate)} className='text-xs pt-2 pl-2 text-white hover:text-red-200'>xem chi tiết</p>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <span className="text-white">Page {currentPage} of {totalPages}</span>
                <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>

            {/* Modal for candidate details */}
            {selectedCandidate && (
                <div className="fixed inset-0 flex items-center justify-center  bg-opacity-60">
                    <div className="relative bg-white text-black py-6 px-12 rounded-lg shadow-2xl w-1/2">
                        {/* Nút đóng ở góc trên bên phải */}
                        <button
                            onClick={closeDetailsModal}
                            className="absolute top-2 right-2 text-2xl font-bold hover:text-red-600 focus:outline-none"
                        >
                          <IoMdClose />
                        </button>

                        {/* Hình ảnh và tên */}
                        <div className="text-center">
                            <img
                                src={selectedCandidate.anhDaiDien}
                                alt={selectedCandidate.ten}
                                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-md"
                            />
                            <h3 className="text-2xl font-bold mb-4 text-orange-600">{selectedCandidate.ten}</h3>
                        </div>

                        {/* Thông tin chi tiết */}
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <p className="mb-2">
                                    <strong>Email:</strong> {selectedCandidate.email}
                                </p>
                                <p className="mb-2">
                                    <strong>Số Điện Thoại:</strong> {selectedCandidate.sDT}
                                </p>
                                <p className="mb-2">
                                    <strong>Ngày Sinh:</strong> {selectedCandidate.ngaySinh}
                                </p>
                            </div>
                            <div>
                                <p className="mb-2">
                                    <strong>Vị Trí:</strong> {selectedCandidate.viTri}
                                </p>
                                <p className="mb-2">
                                    <strong>Tỉnh Thành:</strong> {selectedCandidate.tinhThanh}
                                </p>
                                <p className="mb-2">
                                    <strong>Trạng Thái:</strong> {selectedCandidate.trangThai}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
};

export default CandidateList;
