import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxCaretDown } from "react-icons/rx";
import { MdArrowBackIos } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import AuthApi from "../../api/auth/auth";

const jobListings = await AuthApi.getAllAuth("/all-post");

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
        selectedTinhThanh.includes(job.tenTinhThanh)
      );
      filteredJob = filtered;
      setFilteredJobs(filtered);
      FilterProvince = [...new Set(filteredJob.map((job) => job.tenTinhThanh))];
    } else {
      setDropdownTinhThanh(false);
      const filtered = jobListings.filter((job) =>
        selectedTinhThanh.includes(job.tenTinhThanh)
      );
      filteredJob = filtered;
      setFilteredJobs(filtered);
      FilterProvince = [...new Set(filteredJob.map((job) => job.tenTinhThanh))];
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
    uniqueTinhThanh = [...new Set(filteredJob.map((job) => job.tenTinhThanh))];
  } else {
    uniqueTinhThanh = [...new Set(jobListings.map((job) => job.tenTinhThanh))];
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
                  <div className="absolute  bg-white border shadow-md z-10 mt-2 rounded-lg w-60">
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
                key={job.idBaiDang}
                className="bg-gray-700 px-4 py-3 rounded-lg shadow-md relative"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={job.logo}
                    alt={job.tenCongTy}
                    className="rounded-full w-16 h-16"
                  />
                  <div className="mt-4">
                    <p className="font-semibold py-1 px-2  m-0">{job.tenCongTy}</p>
                    <p className="text-xl text-white font-bold py-1 px-2  m-0">
                      {job.tenBaiDang}
                    </p>
                  </div>
                </div>
                {/* Hạn chót ở góc trên bên phải */}
                <p className="absolute top-2 bg-orange-500 p-1 rounded-lg right-2 text-sm">
                  Deadline: {job.hanChot}
                </p>

                <p className="text-sm px-2 m-0">{job.viTri}</p>
                <div className="mt-2 text-sm px-2 flex justify-between">
                  <p className="m-0">{job.tenTinhThanh}</p>
                  <p>{job.soLuong}</p>
                </div>
                <Link
                  to={`/job/${job.idBaiDang}`}
                  className="color-item hover:no-underline hover:text-[#0cc0df]"
                >
                  <p className="text-sm px-2 m-0 text-right">Xem chi tiết</p>
                </Link>
              </div>
            ))
          : currentJobListings.map((job) => (
              <div
                key={job.idBaiDang}
                className="bg-gray-700 px-4 py-3 rounded-lg shadow-md relative"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={job.logo}
                    alt={job.tenCongTy}
                    className="rounded-full w-16 h-16"
                  />
                  <div className="mt-4">
                    <p className="font-semibold py-1 px-2 m-0">{job.tenCongTy}</p>
                    <p className="text-xl text-white font-bold px-2 py-1  m-0">
                      {job.tenBaiDang}
                    </p>
                  </div>
                </div>
                {/* Hạn chót ở góc trên bên phải */}
                <p className="absolute top-2 bg-orange-500 p-1 rounded-lg right-2 text-sm">
                  Deadline: {job.hanChot}
                </p>

                <p className="text-sm px-2 m-0">{job.viTri}</p>
                <div className="mt-2 text-sm px-2 flex justify-between">
                  <p className="m-0">{job.tenTinhThanh}</p>
                  <p>{job.soLuong}</p>
                </div>
                <Link
                  to={`/job/${job.idBaiDang}`}
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
