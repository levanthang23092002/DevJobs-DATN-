import React from "react";
import Sidebar from "../../components/admin/Sidebar";
import ProvinceManagement from "../../components/admin/Province";
import PositionManager from "../../components/admin/Position";
import Profile from "../../components/user/Profile";
import PostManagement from "../../components/admin/Post";
import CandidateList from "../../components/admin/Candidate";
import BusinessManagement from "../../components/admin/Business";
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { ImOffice } from "react-icons/im";
import { MdPostAdd } from "react-icons/md";
import AdminApi from "../../api/auth/admin";

const totalUser = await AdminApi.getTotal("total-user");
const totalCompany = await AdminApi.getTotal("total-company");
const totalPost = await AdminApi.getTotal("total-post");

const totalUsers = totalUser.totall;
const totalCompanys = totalCompany.totall;
const totalPosts = totalPost.totall;

const Dashboard = () => {
  return (
    <div className="flex bg-custom">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow bg-custom p-6 ml-64">
        <header className="flex items-center justify-between px-6 py-2 rounded-md mb-6">
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <div className="flex items-center text-white text-xl justify-between px-4 py-2 rounded-md">
            <IoMdNotifications />
            <img
              src="https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg"
              alt="Profile"
              className="mr-2 ml-4 w-8 h-8 rounded-full"
            />
            <div className="text-sm font-semibold">John Carter</div>
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
        <div className="flex h-96" id="Dashboard">
          <ProvinceManagement />
          <PositionManager />
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
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
