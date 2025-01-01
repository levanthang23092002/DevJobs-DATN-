import React, { useState, useEffect } from "react";
import AdminApi from "../../api/admin/admin";
import uploadImage from "../../assets/Js/UploadImage";
import { toast } from "react-toastify";

const ProfileAdmin = () => {
  const [candidate, setCandidate] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Fetch admin data once the component is mounted
  useEffect(() => {
    const fetchAdminData = async () => {
      const data = await sessionStorage.getItem("admin");
      if (data) {
        const adminData = JSON.parse(data);
        try {
          const response = await AdminApi.getAdmin(`/admin/${adminData.id}`);
          setCandidate(response.data); // Make sure the response contains `data`
        } catch (error) {
          console.error("Error fetching admin data:", error);
        }
      }
    };
    fetchAdminData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCandidate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0]; // Lấy file từ input
    if (file) {
      try {
   
        const url = await uploadImage(file);
        if (url) {
          setCandidate((prev) => ({
            ...prev,
            anhDaiDien: url,
          }));
        } else {
          toast.error("Có lỗi xảy ra khi tải ảnh lên.");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Có lỗi xảy ra trong quá trình tải ảnh lên.");
      }
    }
  };

  const toggleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      candidate.ngaySinh = new Date(candidate.ngaySinh);
      await AdminApi.getUpdateManager("/update/admin", candidate);
      const response = await AdminApi.getAdmin(`/admin/${candidate.id}`);
      setCandidate(response.data);
    } catch (error) {
      console.error("Error saving data:", error);
    } finally {
      setIsEditing(false);
      const response = await AdminApi.getAdmin(`/admin/${candidate.id}`);
      setCandidate(response.data);
    }
  };

  // Ensure the component handles the case when candidate data is not loaded yet
  if (!candidate) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-2 bg-custom-item min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-2xl">
        <div className="items-center space-x-4">
          <div className="flex flex-col items-center space-y-2">
            {/* Hiển thị ảnh đại diện */}
            <img
              src={candidate.anhDaiDien || "default-avatar-url"} // Nếu không có ảnh, hiển thị ảnh mặc định
              alt="Avatar"
              className="w-20 h-20 rounded-full"
            />
            {isEditing && (
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            )}
          </div>
          {isEditing ? (
            <input
              type="text"
              name="ten"
              value={candidate.ten}
              required
              onChange={handleChange}
              placeholder="Tên ứng viên"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          ) : (
            <h2 className="text-xl flex flex-col items-center font-bold">
              {candidate.ten}
            </h2>
          )}
        </div>

        <div className="mt-4 space-y-4 boder-1">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                required
                value={candidate.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            ) : (
              <p className="mt-1 block w-full px-3 py-2 text-gray-600 border rounded-md shadow-sm">
                {candidate.email}
              </p>
            )}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Ngày Sinh
              </label>
              {isEditing ? (
                <input
                  type="date"
                  name="ngaySinh"
                  required
                  value={candidate.ngaySinh}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              ) : (
                <p className="mt-1 block w-full px-3 py-2 text-gray-600 border rounded-md shadow-sm">
                  {candidate.ngaySinh}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Số Điện Thoại
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="sdt"
                  required
                  value={candidate.sDT}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              ) : (
                <p className="mt-1 block w-full px-3 py-2 text-gray-600 border rounded-md shadow-sm">
                  {candidate.sDT}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-4">
          {!isEditing && (
            <button
              onClick={toggleEdit}
              className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg"
            >
              Chỉnh Sửa
            </button>
          )}
          {isEditing && (
            <button
              onClick={handleSave}
              className="px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-lg"
            >
              Lưu
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileAdmin;
