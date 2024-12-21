import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import ProvinceManagement from "../../components/admin/Province";
import PositionManager from "../../components/admin/Position";
import LevelManager from "../../components/admin/Level";
import ProfileAdmin from "../../components/admin/profile";
import PostManagement from "../../components/admin/Post";
import CandidateList from "../../components/admin/Candidate";
import BusinessManagement from "../../components/admin/Business";
import AddAdmin from "../../components/admin/AddAdmin";
import ChangePasswordAdmin from "../../components/admin/changePassword";
import { FaUser } from "react-icons/fa6";
import { ImOffice } from "react-icons/im";
import { MdPostAdd } from "react-icons/md";
import AdminApi from "../../api/admin/admin";
import { toast } from "react-toastify";

const totalUser = (await AdminApi.getTotal("total-user")) || { totall: 0 };
const totalCompany = (await AdminApi.getTotal("total-company")) || {
  totall: 0,
};
const totalPost = (await AdminApi.getTotal("total-post")) || { totall: 0 };

const totalUsers = totalUser.totall || 0;
const totalCompanys = totalCompany.totall || 0;
const totalPosts = totalPost.totall || 0;

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    toast.success("Đăng xuất Thành Công");
    sessionStorage.removeItem("admin");
    sessionStorage.removeItem("token");
    sessionStorage.clear();
navigate("/")
  };
  return (
    <div className="flex bg-custom">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow bg-custom p-6 ml-64">
        <header className="flex items-center justify-between px-6 py-2 rounded-md mb-6">
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <div className="flex items-center text-white text-xl justify-between px-4 py-2 rounded-md">
            <img
              src="https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg"
              alt="Profile"
              className="mr-2 ml-4 w-8 h-8 rounded-full"
            />
            <div className="text-sm font-semibold">John Carter</div>
            <button
              onClick={handleLogout}
              className="bg-red-500 p-2 rounded mx-3 text-sm"
            >
              Đăng Xuất
            </button>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-6">
          <div className="bg-custom-item shadow rounded-md p-6">
            <div className="flex items-center text-gray-300 text-xl mb-2">
              <FaUser className="text-xl" />
              <h2 className="pl-2 my-auto text-sm font-bold">Số Ứng Viên</h2>
            </div>
            <p className="text-gray-600 text-4xl font-semibold text-white">
              {totalUsers}
            </p>
          </div>
          <div className="bg-custom-item shadow rounded-md p-6">
            <div className="flex items-center text-gray-300 text-xl mb-2">
              <ImOffice className="text-xl" />
              <h2 className="pl-2 my-auto text-sm font-bold">
                Số Doanh Nghiệp
              </h2>
            </div>
            <p className="text-gray-600 text-4xl font-semibold text-white">
              {totalCompanys}
            </p>
          </div>
          <div className="bg-custom-item shadow rounded-md p-6">
            <div className="flex items-center text-gray-300 text-xl mb-2">
              <MdPostAdd className="text-xl" />
              <h2 className="pl-2 my-auto text-sm font-bold">Số Bài Đăng</h2>
            </div>
            <p className="text-gray-600 text-4xl font-semibold text-white">
              {totalPosts}
            </p>
          </div>
        </div>
        <div className="" id="Dashboard">
          <div className="flex h-96 ">
            <ProvinceManagement />
            <PositionManager />
          </div>
          <div className="flex h-96 justify-center mt-10 ">
            <LevelManager />
          </div>
        </div>
        <div id="CandidateList">
          <CandidateList />
        </div>
        <div id="Business">
          <BusinessManagement />
        </div>
        <div id="Post">
          <PostManagement />
        </div>
        <div id="Sitting">
          <ProfileAdmin />
        </div>
        <div id="ChangePasswordAdmin">
          <ChangePasswordAdmin />
        </div>
        <div id="AddAdmin">
          <AddAdmin />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
