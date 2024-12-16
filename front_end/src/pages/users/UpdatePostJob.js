import React, { useState } from "react";
import CandidateList from "../../components/user/ListCandidate";

const JobPostEditor = () => {
  const jobLevels = [
    { id: 1, level: "Intern" },
    { id: 2, level: "Fresher" },
    { id: 3, level: "Junior" },
    { id: 4, level: "Middle" },
    { id: 5, level: "Senior" },
    { id: 6, level: "Lead" },
    { id: 7, level: "Principal" },
    { id: 8, level: "Manager" },
    { id: 9, level: "Director" },
    { id: 10, level: "Executive (CTO, CIO)" },
  ];

  const initialPostData = {
    id_baiDang: 3,
    tenBaiDang: "Abc",
    viTri: "Designer",
    soLuong: 2,
    trangThai: "Đã Hủy",
    luongBatDau: 12000000,
    luongKetThuc: 25000000,
    hanChot: "2024-12-20",
    diaChiCuThe: "789 Đường C",
    hinhanh:
      "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/470230638_2073732416406053_4137725415823355212_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=FQc7VgYJ0pIQ7kNvgEGHatq&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&_nc_gid=A58qCrrMrSslTxeqWj5nfS-&oh=00_AYDkME0NdHYgUSm7O6AcuyLF3NwzU3kGogdM9KwFRLOy2g&oe=6764B527",
    tinhThanh: "Hồ Chí Minh",
    moTa: "abcd ",
    yeuCau: [
      { id: 1, noidung: "Tiếng Anh" },
      { id: 2, noidung: "Đã tốt nghiệp" },
    ],
    capDo: "Fresher", // Job level
    idCapDo: 2, // Corresponding ID for 'Fresher'
  };

  const ListUngVien = [
    {
      idNguoiDung: 1,
      tenNguoiDung: "Nguyễn Văn A",
      logo: "https://via.placeholder.com/40",
      idTrangThai: 1,
    },
    {
      idNguoiDung: 2,
      tenNguoiDung: "Trần Thị B",
      logo: "https://via.placeholder.com/40",
      idTrangThai: 2,
    },
    {
      idNguoiDung: 3,
      tenNguoiDung: "Nguyễn Văn A",
      logo: "https://via.placeholder.com/40",
      idTrangThai: 0,
    },
    {
      idNguoiDung: 4,
      tenNguoiDung: "Trần Thị B",
      logo: "https://via.placeholder.com/40",
      idTrangThai: 0,
    },
  ];
  const [candidates, setCandidates] = useState([
    ListUngVien
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editingPostData, setEditingPostData] = useState({ ...initialPostData });
  const [editingCandidates, setEditingCandidates] = useState([...ListUngVien]);
  const [previewImage, setPreviewImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingPostData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLevelChange = (e) => {
    const selectedLevelId = e.target.value;
    const selectedLevel = jobLevels.find((level) => level.id === parseInt(selectedLevelId));
    setEditingPostData((prev) => ({ ...prev, capDo: selectedLevel.level, idCapDo: selectedLevel.id }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setEditingPostData((prev) => ({ ...prev, hinhanh: file }));
    }
  };

  const handleYeuCauChange = (index, value) => {
    const updatedYeuCau = [...editingPostData.yeuCau];
    updatedYeuCau[index].noidung = value;
    setEditingPostData((prev) => ({ ...prev, yeuCau: updatedYeuCau }));
  };

  const addYeuCau = () => {
    setEditingPostData((prev) => ({
      ...prev,
      yeuCau: [...prev.yeuCau, { id: prev.yeuCau.length + 1, noidung: "" }],
    }));
  };

  const removeYeuCau = (index) => {
    const updatedYeuCau = editingPostData.yeuCau.filter((_, i) => i !== index);
    setEditingPostData((prev) => ({ ...prev, yeuCau: updatedYeuCau }));
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      setEditingPostData({ ...initialPostData });
      setEditingCandidates([...ListUngVien]);
      setPreviewImage(null);
    }
  };

  const handleSave = () => {
    console.log("Saving data:", editingPostData);
    console.log("Saving candidates:", editingCandidates);
    setIsEditing(false);
  };

  return (
    <div className="flex">
      <div className="w-3/4">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold text-center mb-6">Job Post Details</h1>

      {/* Job Post Image */}
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Image:</label>
        {isEditing ? (
          <input
            type="file"
            accept="image/*"
            className="block w-full text-sm text-gray-600 file:py-2 file:px-4 file:bg-blue-100 file:border file:border-blue-300 file:rounded"
            onChange={handleImageChange}
          />
        ) : (
          <img
            src={previewImage || editingPostData.hinhanh}
            alt="Job Post"
            className="w-full h-auto rounded-lg"
          />
        )}
      </div>

      {/* Job Title */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Title:</label>
        {isEditing ? (
          <input
            type="text"
            name="tenBaiDang"
            value={editingPostData.tenBaiDang}
            onChange={handleInputChange}
            className="w-full px-4 py-2 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          <span className="text-xl font-semibold">{editingPostData.tenBaiDang}</span>
        )}
      </div>

      {/* Job Position */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Position:</label>
        {isEditing ? (
          <input
            type="text"
            name="viTri"
            value={editingPostData.viTri}
            onChange={handleInputChange}
            className="w-full px-4 py-2 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          <span className="text-xl">{editingPostData.viTri}</span>
        )}
      </div>

      {/* Salary Range */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Salary Range:</label>
        {isEditing ? (
          <input
            type="text"
            name="luongBatDau"
            value={`${editingPostData.luongBatDau} - ${editingPostData.luongKetThuc}`}
            onChange={handleInputChange}
            className="w-full px-4 py-2 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          <span className="text-xl">{editingPostData.luongBatDau} - {editingPostData.luongKetThuc}</span>
        )}
      </div>

      {/* Job Level */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Level:</label>
        {isEditing ? (
          <select
            value={editingPostData.idCapDo}
            onChange={handleLevelChange}
            className="w-full px-4 py-2 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {jobLevels.map((level) => (
              <option key={level.id} value={level.id}>
                {level.level}
              </option>
            ))}
          </select>
        ) : (
          <span className="text-xl">{editingPostData.capDo}</span>
        )}
      </div>

      {/* Address */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Address:</label>
        {isEditing ? (
          <input
            type="text"
            name="diaChiCuThe"
            value={editingPostData.diaChiCuThe}
            onChange={handleInputChange}
            className="w-full px-4 py-2 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          <span className="text-xl">{editingPostData.diaChiCuThe}</span>
        )}
      </div>

      {/* Requirements */}
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Requirements:</label>
        {isEditing ? (
          <div>
            {editingPostData.yeuCau.map((requirement, index) => (
              <div key={index} className="flex items-center space-x-4 mb-2">
                <input
                  type="text"
                  value={requirement.noidung}
                  onChange={(e) => handleYeuCauChange(index, e.target.value)}
                  className="w-full px-4 py-2 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => removeYeuCau(index)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addYeuCau}
              className="px-4 py-2 bg-green-500 text-white rounded-md"
            >
              Add Requirement
            </button>
          </div>
        ) : (
          <ul className="list-disc pl-5">
            {editingPostData.yeuCau.map((requirement, index) => (
              <li key={index} className="text-xl">{requirement.noidung}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Save
          </button>
        ) : (
          <button
            onClick={toggleEditMode}
            className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
          >
            Edit
          </button>
        )}
      </div>
    </div>
      </div>
      <div className="w-1/4">
    <CandidateList candidates={ListUngVien} setCandidates={setCandidates} />
      </div>


    </div>
  );
};

export default JobPostEditor;
