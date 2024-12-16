import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const ViewCVCandidate = () => {
  const datas = {
    hocVan: [
      {
        idHocVan: 1,
        noiHoc: "Trường Đại học ABC",
        diaChi: "Hà Nội",
        nganhHoc: "Công nghệ thông tin",
        diem: 8.5,
        idNguoiDung: 1,
      },
      {
        idHocVan: 2,
        noiHoc: "Trường Đại học XYZ",
        diaChi: "TP.HCM",
        nganhHoc: "Kinh tế",
        diem: 7.2,
        idNguoiDung: 2,
      },
    ],
    kinhNghiem: [
      {
        idKinhNghiem: 1,
        tenCongTy: "Công ty ABC",
        thoiGianBatDau: "2020-01-01",
        thoiGianKetThuc: "2022-12-31",
        diaChi: "Hà Nội",
        moTa: "Phát triển phần mềm",
        idNguoiDung: 1,
      },
      {
        idKinhNghiem: 2,
        tenCongTy: "Công ty XYZ",
        thoiGianBatDau: "2021-03-01",
        thoiGianKetThuc: "2023-06-30",
        diaChi: "TP.HCM",
        moTa: "Quản lý dự án",
        idNguoiDung: 2,
      },
    ],
    kyNang: [
      {
        idKyNang: 1,
        loaiKyNang: "Lập trình",
        moTa: "Lập trình web với React",
        idNguoiDung: 1,
      },
      {
        idKyNang: 2,
        loaiKyNang: "Quản lý dự án",
        moTa: "Quản lý dự án Agile",
        idNguoiDung: 2,
      },
    ],
    duAn: [
      {
        idDuAn: 1,
        tenDuAn: "Dự án A",
        thoiGianBatDau: "2022-01-01",
        thoiGianKetThuc: "2022-06-30",
        congNghe: "React, Node.js",
        moTa: "Xây dựng hệ thống quản lý",
        idNguoiDung: 1,
        link: "http://duanA.com",
      },
      {
        idDuAn: 2,
        tenDuAn: "Dự án B",
        thoiGianBatDau: "2021-05-01",
        thoiGianKetThuc: "2022-05-01",
        congNghe: "Java, Spring Boot",
        moTa: "Phát triển ứng dụng doanh nghiệp",
        idNguoiDung: 2,
        link: "http://duanB.com",
      },
    ],
    chungChi: [
      {
        idChungChi: 1,
        tenChungChi: "Chứng chỉ A",
        donViCap: "Cơ quan A",
        idNguoiDung: 1,
        link: "http://chungChiA.com",
      },
      {
        idChungChi: 2,
        tenChungChi: "Chứng chỉ B",
        donViCap: "Cơ quan B",
        idNguoiDung: 2,
        link: "http://chungChiB.com",
      },
    ],
  };

  const [selectedItem, setSelectedItem] = useState(datas); // Mục được chọn để hiển thị bên phải

  const location = useLocation();
  const formData = location.state;

  return (
    <div className="min-h-screen justify-center bg-gray-100 p-8 flex space-x-4">
     
      <div className="w-3/5 relative bg-white rounded-lg shadow-lg p-12">
        <div class="flex flex-col justify-center items-center space-y-12 px-9">
          {formData ? (
            <>
              {/* Dòng 1: Tên */}
              <h2 className="text-2xl font-bold text-gray-800 m-0 p-0 uppercase">
                {formData.ten}
              </h2>
              <p className="text-xl p-0 m-0 uppercase"> {formData.vitri}</p>
              <div className="flex mt-1">
                <p className="text-gray-600  m-0 px-1 border-r-2 border-black ">
                  {formData.email}
                </p>
                <p className="text-gray-600  m-0 px-1 border-r-2 border-black">
                  {formData.sdt}
                </p>
                <p className="text-gray-600  m-0 px-1">{formData.diaChi}</p>
              </div>

              {/* Dòng 3: Vị trí ứng tuyển */}
            </>
          ) : (
            <h2>CV</h2>
          )}
        </div>

        {selectedItem ? (
          <div className="space-y-3 p-2 text-gray-700">
            {/* Học Vấn */}
            {selectedItem.hocVan && selectedItem.hocVan.length > 0 && (
              <div className="px-3">
                <p className="text-xl border-b p-2 uppercase">Học Vấn</p>
                <div className="px-3 pb-0.5 ">
                  {selectedItem.hocVan.map((item, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between ">
                        {item.noiHoc && (
                          <p className=" font-bold uppercase m-0  ">
                            {item.noiHoc}
                          </p>
                        )}
                        {item.diaChi && <i>{item.diaChi}</i>}
                      </div>
                      <div className="flex justify-between m-0 p-0">
                        {item.nganhHoc && (
                          <p className="m-0">{item.nganhHoc}</p>
                        )}
                        <div className="flex space-x-4 m-0 p-0">
                          {item.thoiGianBatDau && (
                            <i className="">{item.thoiGianBatDau}</i>
                          )}
                          {item.thoiGianKetThuc && (
                            <i className="pl-1">{item.thoiGianKetThuc}</i>
                          )}
                        </div>
                      </div>
                      <div className="m-0 p-0">
                        {item.diem && (
                          <p className="text-gray-800 uppercase m-0 ">
                            Điểm: {item.diem}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Kinh Nghiệm */}
            {selectedItem.kinhNghiem && selectedItem.kinhNghiem.length > 0 && (
              <div className="px-3">
                <p className="text-xl border-b p-2 uppercase">Kinh Nghiệm</p>
                {selectedItem.kinhNghiem.map((item, index) => (
                  <div key={index} className="space-y-4 pb-2 px-3 pb-0.5">
                    <div className="flex justify-between  ">
                      {item.tenCongTy && (
                        <p className=" font-bold uppercase m-0 ">
                          {item.tenCongTy}
                        </p>
                      )}
                      <div className="flex space-x-4 m-0 p-0">
                        {item.thoiGianBatDau && (
                          <i className="ml-1 ">{item.thoiGianBatDau}</i>
                        )}
                        {item.thoiGianKetThuc && (
                          <i className="mr-1">{item.thoiGianKetThuc}</i>
                        )}
                      </div>
                    </div>
                    {item.viTri && <p className="m-0">{item.viTri}</p>}
                    {item.moTa && <p className="m-0 px-4">{item.moTa}</p>}
                  </div>
                ))}
              </div>
            )}
            {/* Kỹ Năng */}
            {selectedItem.kyNang && selectedItem.kyNang.length > 0 && (
              <div className="px-3">
                <p className="text-xl border-b p-2 uppercase">kỹ năng</p>
                {selectedItem.kyNang.map((item, index) => (
                  <div key={index} className="flex px-3 space-y-2 ">
                    {item.tenKyNang && (
                      <p className="w-2/5 uppercase m-0">
                        {item.tenKyNang === "languages" &&
                          "Programming Languages:"}
                        {item.tenKyNang === "frameworks" &&
                          "Libraries / Frameworks:"}
                        {item.tenKyNang === "tools" && "Tools / Platforms:"}
                        {item.tenKyNang === "databases" && "Databases:"}
                      </p>
                    )}
                    {item.moTa && <i className="w-3/5 m-0 ">{item.moTa}</i>}
                  </div>
                ))}
              </div>
            )}
            {/* Dự Án */}
            {selectedItem.duAn && selectedItem.duAn.length > 0 && (
              <div className="px-3">
                <p className="text-xl border-b p-2 uppercase">Dự án</p>
                {selectedItem.duAn && selectedItem.duAn.length > 0 && (
                  <div>
                    {selectedItem.duAn.map((item, index) => (
                      <div key={index} className="px-3 pb-0.5 ">
                        <div className="grid grid-cols-2 gap-4 mt-2">
                          <div className="flex">
                            {item.tenDuAn && (
                              <p className="font-bold m-0 p-0 border-r-2 px-2 ">
                                {item.tenDuAn}
                              </p>
                            )}
                            {item.link && (
                              <a
                                href={`${item.link}`}
                                className="font-bold m-0 p-0 text-black underline px-2"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Link
                              </a>
                            )}
                          </div>

                          <div className="text-right">
                            {" "}
                            {item.congNghe && (
                              <i className="m-0 p-0">{item.congNghe}</i>
                            )}
                          </div>
                        </div>
                        {item.moTa && (
                          <p className="m-0 px-6 py-2">{item.moTa}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Chứng Chỉ */}
            {selectedItem.chungChi && selectedItem.chungChi.length > 0 && (
              <div className="px-3">
                <p className="text-xl border-b p-2 uppercase">chứng chỉ</p>
                {selectedItem.chungChi.map((item, index) => (
                  <div
                    key={index}
                    className="flex px-3 space-y-2 justify-between "
                  >
                    <div className="flex">
                      {item.tenChungChi && (
                        <p className="font-bold m-0 p-0 text-black px-2 border-r-2">
                          {item.tenChungChi}
                        </p>
                      )}
                      {item.link && (
                        <a
                          href={`${item.link}`}
                          className="font-bold m-0 p-0 text-black underline px-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Link :
                        </a>
                      )}

                      {item.ketQua && <p className="m-0 px-2">{item.ketQua}</p>}
                    </div>
                    {item.donViCap && (
                      <p className="m-0 px-2">{item.donViCap}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <p className="text-white">Chọn một mục để hiển thị chi tiết.</p>
        )}
      </div>
    </div>
  );
};

export default ViewCVCandidate;
