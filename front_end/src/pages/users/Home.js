import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxCaretDown } from "react-icons/rx";
import { MdArrowBackIos } from "react-icons/md";
import { GrNext } from "react-icons/gr";

const jobListings = [
  {
    idbaiDang: 1,
    tenBaiDang: "R/Shiny Developer",
    idCongTy: 101,
    tenCongTy: "Appslion",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "R/Shiny Developer",
    hanChot: "2024-12-30",
    tinhThanh: "Poland",
    soLuong: 5,
  },
  {
    idbaiDang: 2,
    tenBaiDang: "Back End Developer",
    idCongTy: 102,
    tenCongTy: "Brillio",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "Backend Developer",
    hanChot: "2024-12-25",
    tinhThanh: "Mexico",
    soLuong: 3,
  },
  {
    idbaiDang: 3,
    tenBaiDang: "Product Development Engineer",
    idCongTy: 103,
    tenCongTy: "Pixelle",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "Product Engineer",
    hanChot: "2024-12-28",
    tinhThanh: "United States",
    soLuong: 7,
  },
  {
    idbaiDang: 4,
    tenBaiDang: "Frontend Architect",
    idCongTy: 104,
    tenCongTy: "Wix",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "Frontend Architect",
    hanChot: "2024-12-22",
    tinhThanh: "Israel",
    soLuong: 2,
  },
  {
    idbaiDang: 5,
    tenBaiDang: "Solutions Architect",
    idCongTy: 105,
    tenCongTy: "Sopra Steria",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "Solutions Architect",
    hanChot: "2024-12-26",
    tinhThanh: "France",
    soLuong: 4,
  },
  {
    idbaiDang: 6,
    tenBaiDang: "Web Design Developer",
    idCongTy: 106,
    tenCongTy: "Hitachi",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "Web Design Developer",
    hanChot: "2024-12-20",
    tinhThanh: "India",
    soLuong: 6,
  },
  {
    idbaiDang: 7,
    tenBaiDang: "Business Developer",
    idCongTy: 107,
    tenCongTy: "team.blue",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "Business Developer",
    hanChot: "2024-12-18",
    tinhThanh: "Netherlands",
    soLuong: 8,
  },
  {
    idbaiDang: 8,
    tenBaiDang: "Creative Tech Developer",
    idCongTy: 108,
    tenCongTy: "Devoteam",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "Web Developer",
    hanChot: "2024-12-15",
    tinhThanh: "France",
    soLuong: 3,
  },
  {
    idbaiDang: 9,
    tenBaiDang: "Senior Backend Developer",
    idCongTy: 109,
    tenCongTy: "Xyz Tech",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "Backend Developer",
    hanChot: "2024-12-22",
    tinhThanh: "Germany",
    soLuong: 4,
  },
  {
    idbaiDang: 10,
    tenBaiDang: "Data Scientist",
    idCongTy: 110,
    tenCongTy: "DataLab",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "Data Scientist",
    hanChot: "2024-12-28",
    tinhThanh: "United Kingdom",
    soLuong: 2,
  },
  {
    idbaiDang: 11,
    tenBaiDang: "Machine Learning Engineer",
    idCongTy: 111,
    tenCongTy: "TechLabs",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "ML Engineer",
    hanChot: "2024-12-25",
    tinhThanh: "Canada",
    soLuong: 3,
  },
  {
    idbaiDang: 12,
    tenBaiDang: "Full Stack Developer",
    idCongTy: 112,
    tenCongTy: "Softwave",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "Full Stack Developer",
    hanChot: "2024-12-30",
    tinhThanh: "United States",
    soLuong: 6,
  },
  {
    idbaiDang: 13,
    tenBaiDang: "Product Designer",
    idCongTy: 113,
    tenCongTy: "DesignCo",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "Product Designer",
    hanChot: "2024-12-20",
    tinhThanh: "Spain",
    soLuong: 4,
  },
  {
    idbaiDang: 14,
    tenBaiDang: "Frontend Developer",
    idCongTy: 114,
    tenCongTy: "WebX",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "Frontend Developer",
    hanChot: "2024-12-18",
    tinhThanh: "Australia",
    soLuong: 5,
  },
  {
    idbaiDang: 15,
    tenBaiDang: "DevOps Engineer",
    idCongTy: 115,
    tenCongTy: "OpsCo",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "DevOps Engineer",
    hanChot: "2024-12-23",
    tinhThanh: "Japan",
    soLuong: 2,
  },
  {
    idbaiDang: 16,
    tenBaiDang: "Mobile App Developer",
    idCongTy: 116,
    tenCongTy: "AppDev",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "Mobile App Developer",
    hanChot: "2024-12-17",
    tinhThanh: "Germany",
    soLuong: 3,
  },
  {
    idbaiDang: 17,
    tenBaiDang: "Cloud Architect",
    idCongTy: 117,
    tenCongTy: "CloudCorp",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "Cloud Architect",
    hanChot: "2024-12-22",
    tinhThanh: "France",
    soLuong: 2,
  },
  {
    idbaiDang: 18,
    tenBaiDang: "Security Engineer",
    idCongTy: 118,
    tenCongTy: "SecureTech",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "Security Engineer",
    hanChot: "2024-12-30",
    tinhThanh: "Netherlands",
    soLuong: 3,
  },
  {
    idbaiDang: 19,
    tenBaiDang: "Backend Engineer",
    idCongTy: 119,
    tenCongTy: "BackendWorks",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "Backend Engineer",
    hanChot: "2024-12-25",
    tinhThanh: "India",
    soLuong: 5,
  },
  {
    idbaiDang: 20,
    tenBaiDang: "Java Developer",
    idCongTy: 120,
    tenCongTy: "CodeLabs",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "Java Developer",
    hanChot: "2024-12-30",
    tinhThanh: "Brazil",
    soLuong: 4,
  },
  {
    idbaiDang: 21,
    tenBaiDang: "Data Analyst",
    idCongTy: 121,
    tenCongTy: "DataX",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "Data Analyst",
    hanChot: "2024-12-22",
    tinhThanh: "USA",
    soLuong: 6,
  },
  {
    idbaiDang: 22,
    tenBaiDang: "React Developer",
    idCongTy: 122,
    tenCongTy: "ReactCo",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "React Developer",
    hanChot: "2024-12-15",
    tinhThanh: "Canada",
    soLuong: 2,
  },
  {
    idbaiDang: 23,
    tenBaiDang: "Node.js Developer",
    idCongTy: 123,
    tenCongTy: "NodeTech",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "Node.js Developer",
    hanChot: "2024-12-20",
    tinhThanh: "UK",
    soLuong: 3,
  },
  {
    idbaiDang: 24,
    tenBaiDang: "Systems Engineer",
    idCongTy: 124,
    tenCongTy: "SystemWorks",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "Systems Engineer",
    hanChot: "2024-12-28",
    tinhThanh: "France",
    soLuong: 4,
  },
  {
    idbaiDang: 25,
    tenBaiDang: "AI Specialist",
    idCongTy: 125,
    tenCongTy: "AI Labs",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "AI Specialist",
    hanChot: "2024-12-18",
    tinhThanh: "Germany",
    soLuong: 3,
  },
  {
    idbaiDang: 26,
    tenBaiDang: "UX/UI Designer",
    idCongTy: 126,
    tenCongTy: "UXDev",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "UX/UI Designer",
    hanChot: "2024-12-22",
    tinhThanh: "Italy",
    soLuong: 2,
  },
  {
    idbaiDang: 27,
    tenBaiDang: "Game Developer",
    idCongTy: 127,
    tenCongTy: "GameCo",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "Game Developer",
    hanChot: "2024-12-30",
    tinhThanh: "Spain",
    soLuong: 4,
  },
  {
    idbaiDang: 28,
    tenBaiDang: "IoT Engineer",
    idCongTy: 128,
    tenCongTy: "IoT Labs",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "IoT Engineer",
    hanChot: "2024-12-25",
    tinhThanh: "USA",
    soLuong: 5,
  },
  {
    idbaiDang: 29,
    tenBaiDang: "Blockchain Developer",
    idCongTy: 129,
    tenCongTy: "BlockDev",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "Blockchain Developer",
    hanChot: "2024-12-22",
    tinhThanh: "China",
    soLuong: 6,
  },
  {
    idbaiDang: 30,
    tenBaiDang: "Software Engineer",
    idCongTy: 130,
    tenCongTy: "SoftTech",
    logoCongTy: "https://via.placeholder.com/40",
    viTri: "Software Engineer",
    hanChot: "2024-12-18",
    tinhThanh: "India",
    soLuong: 7,
  },
];

var filteredJob = [];
var FilterPosition = [];
var FilterProvince = [];
var FilterCompanies = [];
const Home = () => {
  var PAGE_SIZE = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [isDropdownViTri, setDropdownViTri] = useState(false);
  const [selectedViTri, setSelectedViTri] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isDropdownTinhThanh, setDropdownTinhThanh] = useState(false);
  const [selectedTinhThanh, setSelectedTinhThanh] = useState([]);
  const [isDropdownCompanies, setDropdownCompanies] = useState(false);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [selectedOption, setSelectedOption] = useState(12);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = (dropdownName) => {
    // Mở dropdown được click, nếu chưa mở
    if (dropdownName === "viTri") {
      setDropdownTinhThanh(false);
      setDropdownCompanies(false);
      setIsDropdownOpen(false);
      setDropdownViTri(!isDropdownViTri);
    }
    if (dropdownName === "tinhThanh") {
      setDropdownTinhThanh(!isDropdownTinhThanh);
      setDropdownViTri(false);
      setDropdownCompanies(false);
      setIsDropdownOpen(false);
    }

    if (dropdownName === "companies") {
      setDropdownViTri(false);
      setDropdownTinhThanh(false);
      setIsDropdownOpen(false);
      setDropdownCompanies(!isDropdownCompanies);
    }

    if (dropdownName === "open") {
      setDropdownViTri(false);
      setDropdownTinhThanh(false);
      setDropdownCompanies(false);
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  var startIndex = (currentPage - 1) * PAGE_SIZE;
  var endIndex = startIndex + PAGE_SIZE;
  var currentJobListings = jobListings.slice(startIndex, endIndex);
  var totalPages = Math.ceil(jobListings.length / PAGE_SIZE);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const options = [12, 18, 24, 30];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    PAGE_SIZE = option;
    if (filteredJob.length > 0) {
      startIndex = (currentPage - 1) * PAGE_SIZE;
      endIndex = startIndex + PAGE_SIZE;
      currentJobListings = filteredJob.slice(startIndex, endIndex);
      totalPages = Math.ceil(filteredJob.length / PAGE_SIZE);
    } else {
      startIndex = (currentPage - 1) * PAGE_SIZE;
      endIndex = startIndex + PAGE_SIZE;
      currentJobListings = jobListings.slice(startIndex, endIndex);
      totalPages = Math.ceil(jobListings.length / PAGE_SIZE);
    }
    setFilteredJobs(currentJobListings);
    setIsDropdownOpen(false); // Đóng dropdown sau khi chọn
  };

  // Lọc Vị trí
  const countViTri = (listings) => {
    const locationCount = new Map();
    listings.forEach((job) => {
      const viTri = job.viTri;
      locationCount.set(viTri, (locationCount.get(viTri) || 0) + 1);
    });
    return Array.from(locationCount.entries()).sort((a, b) => b[1] - a[1]);
  };
  var sortedViTri = null;
  if (filteredJob.length > 0) {
    sortedViTri = countViTri(filteredJob);
  } else {
    sortedViTri = countViTri(jobListings);
  }
  const handleLocationChange = (location) => {
    if (selectedViTri.includes(location)) {
      setSelectedViTri(selectedViTri.filter((loc) => loc !== location));
    } else {
      setSelectedViTri([...selectedViTri, location]);
    }
  };

  const handleCancel = () => {
    if (filteredJob.length > 0) {
      setSelectedViTri([]);
      setDropdownViTri(false);
      setFilteredJobs(filteredJob);
    } else {
      setSelectedViTri([]);
      setDropdownViTri(false);
      setFilteredJobs(currentJobListings);
    }
  };

  const handleApply = () => {
    if (filteredJob.length > 0) {
      setDropdownViTri(false);
      const filtered = filteredJob.filter((job) =>
        selectedViTri.includes(job.viTri)
      );
      filteredJob = filtered;
      setFilteredJobs(filtered);
      FilterPosition = [...new Set(filteredJob.map((job) => job.viTri))];
    } else {
      setDropdownViTri(false);
      const filtered = jobListings.filter((job) =>
        selectedViTri.includes(job.viTri)
      );
      filteredJob = filtered;
      setFilteredJobs(filtered);
    }
    FilterPosition = [...new Set(filteredJob.map((job) => job.viTri))];
  };

  // lọc Tỉnh thành
  const handleCheckboxChangeTinhThanh = (tinhThanh) => {
    setSelectedTinhThanh((prevSelected) =>
      prevSelected.includes(tinhThanh)
        ? prevSelected.filter((item) => item !== tinhThanh)
        : [...prevSelected, tinhThanh]
    );
  };

  // Hàm để áp dụng lọc
  const applyTinhThanh = () => {
    if (filteredJob.length > 0) {
      setDropdownTinhThanh(false);
      const filtered = filteredJob.filter((job) =>
        selectedTinhThanh.includes(job.tinhThanh)
      );
      filteredJob = filtered;
      setFilteredJobs(filtered);
      FilterProvince = [...new Set(filteredJob.map((job) => job.tinhThanh))];
    } else {
      setDropdownTinhThanh(false);
      const filtered = jobListings.filter((job) =>
        selectedTinhThanh.includes(job.tinhThanh)
      );
      filteredJob = filtered;
      setFilteredJobs(filtered);
      FilterProvince = [...new Set(filteredJob.map((job) => job.tinhThanh))];
    }
  };

  const cancelTinhThanh = () => {
    if (filteredJob.length > 0) {
      setSelectedTinhThanh([]);
      setDropdownTinhThanh(false);
      setFilteredJobs(filteredJob);
    } else {
      setSelectedTinhThanh([]);
      setDropdownTinhThanh(false);
      setFilteredJobs(currentJobListings);
    }
  };
  var uniqueTinhThanh = null;
  if (filteredJob.length > 0) {
    uniqueTinhThanh = [...new Set(filteredJob.map((job) => job.tinhThanh))];
  } else {
    uniqueTinhThanh = [...new Set(jobListings.map((job) => job.tinhThanh))];
  }

  // lọc theo danh nghiệp

  const handleCheckboxChangeCompanies = (companyName) => {
    setSelectedCompanies((prevSelected) =>
      prevSelected.includes(companyName)
        ? prevSelected.filter((item) => item !== companyName)
        : [...prevSelected, companyName]
    );
  };

  const applyCompanies = () => {
    if (filteredJob.length > 0) {
      setDropdownCompanies(false);
      const filtered = filteredJob.filter((job) =>
        selectedViTri.includes(job.viTri)
      );
      filteredJob = filtered;
      setFilteredJobs(filtered);
      FilterCompanies = [...new Set(filteredJob.map((job) => job.tenCongTy))];
      console.log(FilterCompanies);
    } else {
      setDropdownCompanies(false);
      const filtered = jobListings.filter((job) =>
        selectedCompanies.includes(job.tenCongTy)
      );
      filteredJob = filtered;
      setFilteredJobs(filtered);
      FilterCompanies = [...new Set(filteredJob.map((job) => job.tenCongTy))];
      console.log(FilterCompanies);
    }
  };

  // Hàm để hủy lọc
  const cancelCompanies = () => {
    if (filteredJob.length > 0) {
      setSelectedCompanies([]);
      setDropdownCompanies(false);
      setFilteredJobs(filteredJob);
    } else {
      setSelectedCompanies([]);
      setDropdownCompanies(false);
      setFilteredJobs(currentJobListings);
    }
  };
  var uniqueCompanies = null;
  if (filteredJob.length > 0) {
    uniqueCompanies = [...new Set(filteredJob.map((job) => job.tenCongTy))];
  } else {
    uniqueCompanies = [...new Set(jobListings.map((job) => job.tenCongTy))];
  }
  const RemoveFilter = () => {
    filteredJob = [];
    setFilteredJobs(currentJobListings);
    FilterPosition = [];
    FilterProvince = [];
    FilterCompanies = [];
  };
  return (
    <div className=" container text-white ">
      {/* Header */}
      <div className=" py-2 flex justify-between text-black items-center ">
        <div className="flex space-x-4 px-8 ">
          <div onClick={() => handleToggleDropdown("viTri")}>
            <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-300 hover:rounded-lg cursor-pointer">
              <button className="text-xl pr-3  font-bold ">Vị trí</button>
              <RxCaretDown className="text-3xl" />
            </div>
            <ul>
              <li>
                {isDropdownViTri && (
                  <div className=" absolute  w-1/5 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    <div className="p-2 max-h-80 overflow-y-auto">
                      <ul>
                        {sortedViTri.map(([location, count]) => (
                          <li
                            key={location}
                            onClick={(e) => e.stopPropagation()} 
                            className="flex items-center space-x-2 py-2"
                          >
                            <input
                              type="checkbox"
                              checked={selectedViTri.includes(location)}
                              onChange={() => handleLocationChange(location)}
                              className="form-checkbox"
                            />
                            <span className="text-black">{location}</span>
                            <span className="ml-2 text-gray-500">
                              ({count})
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Các nút Cancel và Apply */}
                    <div className="flex justify-between items-center px-4 py-2 border-t border-gray-300">
                      <button
                        onClick={handleCancel}
                        className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleApply}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>

          <div onClick={() => handleToggleDropdown("tinhThanh")}>
            <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-300 hover:rounded-lg cursor-pointer">
              <button className="text-xl  font-bold pr-3 ">Tỉnh Thành</button>
              <RxCaretDown className="text-3xl" />
            </div>
            <ul>
              <li>
                {isDropdownTinhThanh && (
                  <div  className="absolute  bg-white border shadow-md z-10 mt-2 rounded-lg w-60">
                    <div className="max-h-60 overflow-auto p-2">
                      {/* Checkbox cho mỗi tỉnh thành */}
                      {uniqueTinhThanh.map((tinhThanh, index) => (
                        <label
                          key={index}
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center space-x-2 mb-2"
                        >
                          <input
                            type="checkbox"
                            value={tinhThanh}
                            checked={selectedTinhThanh.includes(tinhThanh)}
                            onChange={() =>
                              handleCheckboxChangeTinhThanh(tinhThanh)
                            }
                            className="form-checkbox"
                          />
                          <span className="text-black">{tinhThanh}</span>
                        </label>
                      ))}
                    </div>

                    {/* Button Apply và Cancel */}
                    <div className="flex justify-between p-2">
                      <button
                        onClick={cancelTinhThanh}
                        className="text-gray-600"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={applyTinhThanh}
                        className="bg-blue-500 text-white px-4 py-1 rounded-lg"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
          <div onClick={() => handleToggleDropdown("companies")}>
            <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-300 hover:rounded-lg cursor-pointer">
              <button className="text-xl pr-3  font-bold ">Danh nghiệp</button>
              <RxCaretDown className="text-3xl" />
            </div>
            <ul>
              <li>
                {isDropdownCompanies && (
                  <div className="absolute bg-white border shadow-md z-10 mt-2 rounded-lg w-60">
                    <div className="max-h-60 overflow-auto p-2">
                      {/* Checkbox cho mỗi công ty */}
                      {uniqueCompanies.map((tenCongTy, index) => (
                        <label
                          key={index}
                          onClick={(e) => e.stopPropagation()} 
                          className="flex items-center space-x-2 mb-2"
                        >
                          <input
                            type="checkbox"
                            value={tenCongTy}
                            checked={selectedCompanies.includes(tenCongTy)}
                            onChange={() =>
                              handleCheckboxChangeCompanies(tenCongTy)
                            }
                            className="form-checkbox"
                          />
                          <span className="text-black">{tenCongTy}</span>
                        </label>
                      ))}
                    </div>

                    {/* Button Apply và Cancel */}
                    <div className="flex justify-between p-2">
                      <button
                        onClick={cancelCompanies}
                        className="text-gray-600"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={applyCompanies}
                        className="bg-blue-500 text-white px-4 py-1 rounded-lg"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
          <div onClick={() => handleToggleDropdown("open")}>
            <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-300 hover:rounded-lg cursor-pointer">
              <button className="text-xl pr-3 font-bold">
                {selectedOption}
              </button>
              <RxCaretDown className="text-3xl" />
            </div>
            <ul>
              <li>
                {isDropdownOpen && (
                  <div className="absolute left-200 w-1/5 bg-white border rounded-lg shadow-lg z-10">
                    {options.map((option, index) => (
                      <div
                        key={index}
                        className={`px-4 py-2 hover:bg-[#0cc0df] rounded-lg ${
                          selectedOption === option ? "font-bold bg-white" : ""
                        } cursor-pointer`}
                        onClick={() => handleOptionClick(option)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex ">
        <span className="text-black font-bold py-2 px-4">Lọc Theo:</span>
        <div className="flex space-x-2 ">
          {FilterPosition ? (
            FilterPosition.map((position, index) => (
              <span
                className="text-black p-2 bg-gray-200 rounded-lg"
                key={index}
              >
                {position}
              </span>
            ))
          ) : (
            <span></span>
          )}
          {FilterProvince ? (
            FilterProvince.map((province, index) => (
              <span
                className="text-black p-2 bg-gray-200 rounded-lg"
                key={index}
              >
                {province}
              </span>
            ))
          ) : (
            <span></span>
          )}
          {FilterCompanies ? (
            FilterCompanies.map((companies, index) => (
              <span
                className="text-black p-2 bg-gray-200 rounded-lg"
                key={index}
              >
                {companies}
              </span>
            ))
          ) : (
            <span></span>
          )}
          <button
            className=" px-2 py-1 m-0 color-item rounded-lg text-right items-right"
            onClick={() => RemoveFilter()}
          >
            Xóa Lọc
          </button>
        </div>
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-2 ">
        {filteredJobs.length > 0
          ? filteredJobs.map((job) => (
              <div
                key={job.idbaiDang}
                className="bg-gray-700 px-4 py-3 rounded-lg shadow-md relative"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={job.logoCongTy}
                    alt={job.tenCongTy}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold m-0">{job.tenCongTy}</p>
                  </div>
                </div>
                {/* Hạn chót ở góc trên bên phải */}
                <p className="absolute top-6 right-4 text-sm">
                  Deadline: {job.hanChot}
                </p>
                <p className="text-xl text-white font-bold p-2 m-0">
                  {job.tenBaiDang}
                </p>
                <p className="text-sm px-2 m-0">{job.viTri}</p>
                <div className="mt-2 text-sm px-2 flex justify-between">
                  <p className="m-0">{job.tinhThanh}</p>
                  <p>{job.soLuong}</p>
                </div>
                <Link
                  to={`/job/${job.idbaiDang}`}
                  className="color-item hover:no-underline hover:text-[#0cc0df]"
                >
                  <p className="text-sm px-2 m-0 text-right">Xem chi tiết</p>
                </Link>
              </div>
            ))
          : currentJobListings.map((job) => (
              <div
                key={job.idbaiDang}
                className="bg-gray-700 px-4 py-3 rounded-lg shadow-md relative"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={job.logoCongTy}
                    alt={job.tenCongTy}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold m-0">{job.tenCongTy}</p>
                  </div>
                </div>
                {/* Hạn chót ở góc trên bên phải */}
                <p className="absolute top-6 right-4 text-sm">
                  Deadline: {job.hanChot}
                </p>
                <p className="text-xl text-white font-bold p-2 m-0">
                  {job.tenBaiDang}
                </p>
                <p className="text-sm px-2 m-0">{job.viTri}</p>
                <div className="mt-2 text-sm px-2 flex justify-between">
                  <p className="m-0">{job.tinhThanh}</p>
                  <p>{job.soLuong}</p>
                </div>
                <Link
                  to={`/job/${job.idbaiDang}`}
                  className="color-item hover:no-underline hover:text-[#0cc0df]"
                >
                  <p className="text-sm px-2 m-0 text-right">Xem chi tiết</p>
                </Link>
              </div>
            ))}
      </div>
      <div className="pagination text-black justify-between p-4 text-xl font-bold">
        <div className="flex items-center">
          <MdArrowBackIos />
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous
          </button>
        </div>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <div className="flex items-center">
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next{" "}
          </button>
          <GrNext />
        </div>
      </div>
    </div>
  );
};

export default Home;
