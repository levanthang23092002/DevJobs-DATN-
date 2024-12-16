import React, { useState, useEffect } from "react";
import { FaHome, FaUser, FaCog } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";
import { IoIosBusiness } from "react-icons/io";
import logo from "../../assets/image/logo-removebg-preview.png";

const Sidebar = () => {

    const [activeTab, setActiveTab] = useState("Dashboard");
    // Hàm xử lý khi tab được click
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    useEffect(() => {
        const allTabs = ["Dashboard", "Business", "CandidateList", "Post", "Sitting"];
        allTabs.forEach(tab => {
            const tabElement = document.getElementById(tab);
            if (tabElement) {
                if (tab !== activeTab) {
                    tabElement.classList.add("hidden");
                } else {
                    tabElement.classList.remove("hidden");
                }
            }
        });
    }, [activeTab]);

    return (
        <div className="fixed h-screen top-0 left-0  bg-custom text-white h-screen w-64 flex flex-col border-r-2 border-slate-600">
            {/* Logo */}
            <div className="flex items-center justify-center py-2">
                <img src={logo} alt="Logo" className="w-48 h-auto object-cover" />
            </div>

            {/* Menu items */}
            <nav className="flex-grow px-4 py-4 space-y-2">
                <button
                    onClick={() => handleTabClick("Dashboard")}
                    className={`no-underline text-white flex items-center gap-3 px-3 py-2 rounded-md ${activeTab === "Dashboard" ? "bg-gray-800" : "hover:bg-gray-800"}`}
                >
                    <FaHome className="text-white" />
                    Dashboard
                </button>
                <button
                    onClick={() => handleTabClick("Business")}
                    className={`no-underline text-white flex items-center gap-3 px-3 py-2 rounded-md ${activeTab === "Business" ? "bg-gray-800" : "hover:bg-gray-800"}`}
                >
                    <IoIosBusiness className="text-white" />
                    Danh Nghiệp
                </button>
                <button
                    onClick={() => handleTabClick("CandidateList")}
                    className={`no-underline text-white flex items-center gap-3 px-3 py-2 rounded-md ${activeTab === "CandidateList" ? "bg-gray-800" : "hover:bg-gray-800"}`}
                >
                    <FaUser className="text-white" />
                    Ứng Viên
                </button>
                <button
                    onClick={() => handleTabClick("Post")}
                    className={`no-underline text-white flex items-center gap-3 px-3 py-2 rounded-md ${activeTab === "Post" ? "bg-gray-800" : "hover:bg-gray-800"}`}
                >
                    <MdPostAdd className="text-white" />
                    Post
                </button>
                <button
                    onClick={() => handleTabClick("Sitting")}
                    className={`no-underline text-white flex items-center gap-3 px-3 py-2 rounded-md ${activeTab === "Sitting" ? "bg-gray-800" : "hover:bg-gray-800"}`}
                >
                    <FaCog className="text-white" />
                    Account Setting
                </button>
            </nav>

            {/* User profile */}
            <div className="flex items-center px-4 py-4 mt-auto bg-slate-950">
                <img
                    src="https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg"
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                    <div className="text-sm font-semibold">John Carter</div>
                    <button className="text-xs text-gray-400" onClick={() => handleTabClick("Sitting")} >Account Settings</button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
