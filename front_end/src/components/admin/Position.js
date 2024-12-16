// Import necessary React and utility libraries
import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { MdAddCircle } from 'react-icons/md';

const PositionManager = () => {
    const [positions, setPositions] = useState([
        { id: 1, name: "Kế toán", status: "Khóa" },
        { id: 2, name: "Nhân viên bán hàng", status: "Mới" },
        { id: 3, name: "Quản lý", status: "Đã Duyệt" },
        { id: 4, name: "Kỹ sư phần mềm", status: "Đã Duyệt" },
        { id: 5, name: "Nhân viên marketing", status: "NEW" },
        { id: 6, name: "Thủ kho", status: "Đã Duyệt" },
        { id: 7, name: "Lái xe", status: "Đã Duyệt" },
    ]);
 

    const [editingId, setEditingId] = useState(null); // Current editing position ID
    const [editedPosition, setEditedPosition] = useState({ name: '', status: 'Mới' });
    const [isAdding, setIsAdding] = useState(false); // Adding new position state
    const [newPosition, setNewPosition] = useState({ name: '', status: 'Mới' });

    // Handlers for edit actions
    const handleEditClick = (position) => {
        setEditingId(position.id);
        setEditedPosition(position);
    };

    const handleSaveClick = (id) => {
        setPositions((prevPositions) =>
            prevPositions.map((pos) => (pos.id === id ? editedPosition : pos))
        );
        setEditingId(null);
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setEditedPosition({ name: '', status: 'Mới' });
    };

    // Handlers for delete action
    const handleDeleteClick = (id) => {
        setPositions((prevPositions) => prevPositions.filter((pos) => pos.id !== id));
    };

    // Handlers for adding new position
    const handleAddPosition = () => {
        setIsAdding(true);
    };

    const handleSaveNewPosition = () => {
        if (newPosition.name.trim()) {
            setPositions((prevPositions) => [
                ...prevPositions,
                { id: Date.now(), ...newPosition },
            ]);
            setIsAdding(false);
            setNewPosition({ name: '', status: 'Mới' });
        }
    };

    const handleCancelNewPosition = () => {
        setIsAdding(false);
        setNewPosition({ name: '', status: 'Mới' });
    };

    return (
        <div className="flex flex-col w-1/2 mr-2  bg-custom-item rounded h-full " >
            {/* Header */}
            <div className="shadow-md rounded pl-6 py-2 flex items-center justify-between">
                <h1 className="text-lg text-white font-bold">Quản lý vị trí ứng tuyển</h1>
            </div>

            {/* Task List */}
            <div className="flex-1 overflow-y-auto p-4">
                <div className="max-h-70 overflow-y-auto space-y-2">
                    {positions.map((position) => (
                        <div
                            key={position.id}
                            className="flex items-center justify-between bg-white shadow-md rounded-md px-3 py-2"
                        >
                            {/* Position Details */}
                            <div>
                                {editingId === position.id ? (
                                    <>
                                        <input
                                            type="text"
                                            value={editedPosition.name}
                                            onChange={(e) =>
                                                setEditedPosition({
                                                    ...editedPosition,
                                                    name: e.target.value,
                                                })
                                            }
                                            className="border rounded p-1 text-sm"
                                        />
                                        <select
                                            value={editedPosition.status}
                                            onChange={(e) =>
                                                setEditedPosition({
                                                    ...editedPosition,
                                                    status: e.target.value,
                                                })
                                            }
                                            className="border rounded p-1 text-sm ml-2"
                                        >
                                            <option value="Mới">Mới</option>
                                            <option value="Khóa">Khóa</option>
                                            <option value="Đã Duyệt">Đã Duyệt</option>
                                        </select>
                                    </>
                                ) : (
                                    <div className="flex items-center justify-between">
                                        <h2 className="font-bold text-sm mr-2">{position.name}</h2>
                                        <span
                                            className={`px-2 py-1 text-xs rounded-full ${
                                                position.status === 'Khóa'
                                                    ? 'bg-red-100 text-red-500'
                                                    : position.status === 'Mới'
                                                    ? 'bg-blue-100 text-blue-500'
                                                    : 'bg-green-100 text-green-500'
                                            }`}
                                        >
                                            {position.status}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center">
                                {editingId === position.id ? (
                                    <>
                                        <button
                                            className="text-green-500 hover:text-green-600 mx-2"
                                            onClick={() => handleSaveClick(position.id)}
                                        >
                                            Lưu
                                        </button>
                                        <button
                                            className="text-gray-500 hover:text-gray-600"
                                            onClick={handleCancelEdit}
                                        >
                                            Hủy
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            className="text-yellow-500 hover:text-yellow-600 mx-2"
                                            onClick={() => handleEditClick(position)}
                                        >
                                            <FaEdit size={16} />
                                        </button>
                                        <button
                                            className="text-red-500 hover:text-red-600"
                                            onClick={() => handleDeleteClick(position.id)}
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
                                value={newPosition.name}
                                onChange={(e) =>
                                    setNewPosition({ ...newPosition, name: e.target.value })
                                }
                                placeholder="Tên vị trí"
                                className="border rounded p-1 text-sm"
                            />
                        </div>
                        <div className="flex items-center">
                            <button
                                className="text-green-500 hover:text-green-600 mx-2"
                                onClick={handleSaveNewPosition}
                            >
                                Lưu
                            </button>
                            <button
                                className="text-gray-500 hover:text-gray-600"
                                onClick={handleCancelNewPosition}
                            >
                                Hủy
                            </button>
                        </div>
                    </div>
                )}
                <button
                    className="bg-orange-500 text-white text-sm px-3 py-2 rounded-md hover:bg-orange-600 flex items-center gap-2"
                    onClick={handleAddPosition}
                >
                    <MdAddCircle size={16} />
                    Thêm vị trí ứng tuyển
                </button>
            </div>
        </div>
    );
};

export default PositionManager;
