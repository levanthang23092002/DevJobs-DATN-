import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa"; // Icon từ react-icons
import { MdAddCircle } from "react-icons/md"; // Icon khác nếu cần

const ProvinceManagement = () => {
    const [provinces, setProvinces] = useState([
        { id: 1, name: "Hà Nội", status: "Khóa" },
        { id: 2, name: "TP. Hồ Chí Minh", status: "Mới" },
        { id: 3, name: "Đà Nẵng", status: "Đã Duyệt" },
        { id: 4, name: "Huế", status: "Đã Duyệt" },
        { id: 5, name: "Quảng Nam", status: "NEW" },
        { id: 6, name: "Bình Dương", status: "Đã Duyệt" },
        { id: 7, name: "Hải Phòng", status: "Đã Duyệt" },
    ]);

    const [editingId, setEditingId] = useState(null);
    const [editedProvince, setEditedProvince] = useState({ name: "", status: "" });
    const [isAdding, setIsAdding] = useState(false);
    const [newProvince, setNewProvince] = useState({ name: "", status: "Đã Duyệt" });
    const handleEditClick = (province) => {
        setEditingId(province.id); // Đặt chế độ chỉnh sửa
        setEditedProvince({ name: province.name, status: province.status });
        
    };

    const handleSaveClick = (id) => {
        setProvinces((prevProvinces) =>
            prevProvinces.map((province) =>
                province.id === id ? { ...province, ...editedProvince } : province
            )
        );
        setEditingId(null);
    };

    const handleCancelClick = () => {
        setEditingId(null);
    };

    const handleDeleteClick = (id) => {
        setProvinces((prevProvinces) =>
            prevProvinces.filter((province) => province.id !== id)
        );
    };

    const handleAddProvince = () => {
        setIsAdding(true);
    };

    const handleSaveNewProvince = () => {
        if (newProvince.name.trim() !== "") {
            setProvinces((prevProvinces) => [
                ...prevProvinces,
                { id: Date.now(), ...newProvince },
            ]);
            setNewProvince({ name: "", status: "Đã Duyệt" });
            setIsAdding(false);
        }
    };

    const handleCancelNewProvince = () => {
        setIsAdding(false); // Thoát chế độ thêm mới
        setNewProvince({ name: "", status: "Đã Duyệt" });
    };


    return (
        <div className="flex flex-col w-1/2  mr-2 bg-custom-item rounded h-full " >
            {/* Header */}
            <div className=" shadow-md rounded pl-6 py-2 flex items-center justify-between">
                <h1 className="text-lg text-white font-bold">Quản lý tỉnh thành</h1>
            </div>

            {/* Task List */}
            <div className="flex-1 overflow-y-auto p-4">
                <div className="max-h-70 overflow-y-auto space-y-2">
                    {provinces.map((province) => (
                        <div key={province.id} className="flex items-center justify-between bg-white shadow-md rounded-md px-3 py-2"
                        >
                            {/* Left Content */}
                            <div>
                                {editingId === province.id ? (
                                    <>
                                        <input
                                            type="text"
                                            value={editedProvince.name}
                                            onChange={(e) =>
                                                setEditedProvince((prev) => ({
                                                    ...prev,
                                                    name: e.target.value,
                                                }))
                                            }
                                            className="border rounded p-1 text-sm"
                                        />
                                        <select
                                            value={editedProvince.status}
                                            onChange={(e) =>
                                                setEditedProvince((prev) => ({
                                                    ...prev,
                                                    status: e.target.value,
                                                }))
                                            }
                                            className="border rounded p-1 text-sm ml-2"
                                        >
                                            <option value="Mới">Mới</option>
                                            <option value="Khóa">Khóa</option>
                                            <option value="Đã Duyệt">Đã Duyệt</option>
                                        </select>
                                    </>
                                ) : (
                                    <> <div className="flex  items-center justify-between">
                                        <h2 className="font-bold text-sm mr-2">{province.name}</h2>
                                        <span
                                            className={`px-2 py-1 text-xs rounded-full ${province.status === "Khóa"
                                                ? "bg-red-100 text-red-500"
                                                : province.status === "Mới"
                                                    ? "bg-blue-100 text-blue-500"
                                                    : "bg-green-100 text-green-500"
                                                }`}
                                        >
                                            {province.status}
                                        </span>
                                    </div>

                                    </>
                                )}
                            </div>

                            {/* Right Content */}
                            <div className="flex items-center">
                                {editingId === province.id ? (
                                    <>
                                        <button
                                            className="text-green-500 hover:text-green-600 mx-2"
                                            onClick={() => handleSaveClick(province.id)}
                                        >
                                            Lưu
                                        </button>
                                        <button
                                            className="text-gray-500 hover:text-gray-600"
                                            onClick={handleCancelClick}
                                        >
                                            Hủy
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            className="text-yellow-500 hover:text-yellow-600 mx-2"
                                            onClick={() => handleEditClick(province)}
                                        >
                                            <FaEdit size={16} />
                                        </button>
                                        <button
                                            className="text-red-500 hover:text-red-600"
                                            onClick={() => handleDeleteClick(province.id)}
                                        >
                                            <FaTrash size={16} />
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}


                </div>
            </div>

            {/* Footer */}
            <div className="shadow-md bg-custom-item justify-between p-4 flex">
                {isAdding && (
                    <div className="flex items-center justify-between bg-white shadow-md rounded-md px-3 py-2">
                        <div>
                            <input
                                type="text"
                                value={newProvince.name}
                                onChange={(e) =>
                                    setNewProvince((prev) => ({ ...prev, name: e.target.value }))
                                }
                                placeholder="Tên tỉnh/thành"
                                className="border rounded p-1 text-sm"
                            />
                        </div>
                        <div className="flex items-center">
                            <button
                                className="text-green-500 hover:text-green-600 mx-2"
                                onClick={handleSaveNewProvince}
                            >
                                Lưu
                            </button>
                            <button
                                className="text-gray-500 hover:text-gray-600"
                                onClick={handleCancelNewProvince}
                            >
                                Hủy
                            </button>
                        </div>
                    </div>
                )}
                <button
                    className="bg-orange-500 text-white text-text-sm px-3 py-2 rounded-md hover:bg-orange-600 flex items-center gap-2"
                    onClick={handleAddProvince}
                >
                    <MdAddCircle size={16} />
                    Thêm tỉnh/thành phố
                </button>
            </div>
        </div>
    );
};

export default ProvinceManagement;
