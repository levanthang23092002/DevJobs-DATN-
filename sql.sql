use devjobs ;

INSERT INTO loaitaikhoan (quyen, moTa) 
VALUES 
('Admin', 'Loại tài khoản dành cho người quản lí'),
('Company', 'Loại tài khoản dành cho nhà tuyển dụng'),
('User', 'Loại tài khoản dành cho ứng viên');

INSERT INTO capdo (tenCapDo) VALUES
('Intern'),
('Fresher'),
('Junior'),
('Mid-level'),
('Senior'),
('Lead'),
('Manager'),
('Director'),
('Vice President'),
('President'),
('Executive');

INSERT INTO vitriungtuyen (tenViTri) VALUES
('Lập trình viên'),
('Kỹ sư phần mềm'),
('Quản lý dự án CNTT'),
('Chuyên viên phân tích hệ thống'),
('Chuyên viên bảo mật'),
('Nhà phát triển web'),
('Nhà phát triển di động'),
('Kỹ sư mạng'),
('Quản trị hệ thống'),
('Quản lý sản phẩm công nghệ'),
('Chuyên viên IT support'),
('Chuyên gia AI');

INSERT INTO tinhthanh (tenTinhThanh) VALUES
('Hà Nội'),
('Hồ Chí Minh'),
('Đà Nẵng'),
('Cần Thơ'),
('Hải Phòng'),
('Hải Dương'),
('Bắc Ninh'),
('Bình Dương'),
('Bình Phước'),
('Long An'),
('Thừa Thiên Huế'),
('An Giang'),
('Đắk Lắk'),
('Quảng Ninh'),
('Quảng Bình'),
('Phú Thọ'),
('Kiên Giang'),
('Lâm Đồng'),
('Vĩnh Long'),
('Bà Rịa - Vũng Tàu'),
('Bắc Giang'),
('Thái Nguyên'),
('Quảng Nam'),
('Hưng Yên'),
('Thanh Hóa'),
('Nghệ An'),
('Lào Cai'),
('Tây Ninh'),
('Vĩnh Phúc'),
('Đắk Nông'),
('Yên Bái'),
('Bến Tre'),
('Bắc Kạn'),
('Cao Bằng'),
('Quảng Trị'),
('Hòa Bình'),
('Gia Lai'),
('Kon Tum'),
('Ninh Bình'),
('Bình Định'),
('Phú Yên'),
('Khánh Hòa'),
('Tuyên Quang'),
('Sóc Trăng'),
('Nam Định'),
('Trà Vinh'),
('Điện Biên'),
('Lai Châu'),
('Hà Giang'),
('Sơn La'),
('Lào Cai'),
('Quảng Ngãi'),
('Cao Bằng'),
('Hà Nam'),
('Quảng Bình'),
('Thái Bình'),
('Bắc Giang'),
('Hải Dương'),
('Hà Tĩnh');

INSERT INTO nguoidung (idLoaiTK, idViTri, idTinhThanh, idCapDo, ten, ngaySinh, sdt, email, matKhau) VALUES
(1, 1, 1, 2, 'Nguyễn Văn A', '1990-01-01', '0912345678', 'nguyenvana@gmail.com', 'password123'),
(2, 2, 2, 1, 'Trần Thị B', '1995-05-10', '0987654321', 'tranb@gmail.com', 'password123');

-- Insert vào bảng hocvan
INSERT INTO hocvan (noiHoc, diaChi, nganhHoc, diem, idNguoiDung) VALUES
('Đại học Bách Khoa Hà Nội', 'Hà Nội', 'Kỹ thuật phần mềm', 8.5, 1),
('Đại học FPT', 'Hồ Chí Minh', 'Công nghệ thông tin', 9.0, 2);

-- Insert vào bảng kinhnghiem
INSERT INTO kinhnghiem (tenCongTy, thoiGianBatDau, thoiGianKetThuc, diaChi, moTa, idNguoiDung) VALUES
('VNG Corporation', '2018-01-01', '2020-12-31', 'Hà Nội', 'Phát triển phần mềm web', 1),
('FPT Software', '2021-01-01', '2023-12-31', 'Hồ Chí Minh', 'Phát triển ứng dụng di động', 2);

-- Insert vào bảng duan
INSERT INTO duan (tenDuAn, thoiGianBatDau, thoiGianKetThuc, congNghe, link, idNguoiDung) VALUES
('Hệ thống quản lý bán hàng', '2022-01-01', '2023-01-01', 'React, Node.js', 'https://project1.com', 1),
('Ứng dụng mobile FPT', '2023-02-01', '2024-01-01', 'Flutter, Firebase', 'https://project2.com', 2);

INSERT INTO loaikn (tenKyNang) VALUES
('Databases'),
('Tools / Platforms'),
('Libraries / Frameworks'),
('Languages');
-- Insert vào bảng kynang
INSERT INTO kynang (idLoaiKN, noiDung, idNguoiDung) VALUES
(1, 'Lập trình React.js', 1),
(2, 'Kỹ năng quản lý dự án', 2);

-- Insert vào bảng chungchi
INSERT INTO chungchi (tenChungChi, link, donViCap, idNguoiDung) VALUES
('Chứng chỉ Lập trình viên Frontend', 'https://cert1.com', 'Google', 1),
('Chứng chỉ Quản lý dự án', 'https://cert2.com', 'PMI', 2);

INSERT INTO congty (idLoaiTK, tenCongTy, diaChi, email, sDT, linkWeb, nganhNghe, soLuongNhanVien, logo, ngayThanhLap, moTa, matKhau) VALUES
(1, 'VNG Corporation', 'Hà Nội', 'contact@vng.com.vn', '0241234567', 'https://vng.com.vn', 'Công nghệ phần mềm', 1000, 'vng_logo.png', '2004-06-10', 'Công ty công nghệ hàng đầu tại Việt Nam', 'password123'),
(2, 'FPT Software', 'Hồ Chí Minh', 'contact@fpt.com.vn', '0281234567', 'https://fpt.com.vn', 'Dịch vụ phần mềm', 5000, 'fpt_logo.png',  '2006-04-12', 'Công ty phần mềm lớn tại Việt Nam', 'password123');
-- Insert vào bảng baidang
INSERT INTO baidang (idCongTy, idTinhThanh, tenBaiDang, viTri, soLuong,  luongBatDau, luongKetThuc, hanChot, ngayDang, ngaySua, diaChiCuThe) VALUES
(1, 1, 'Lập trình viên Frontend', 'Lập trình viên Frontend', 5,  10000000, 15000000, '2024-06-01', '2024-01-01', '2024-01-05', 'Hà Nội'),
(2, 2, 'Quản lý dự án', 'Quản lý dự án', 3,  20000000, 30000000, '2024-07-01', '2024-02-01', '2024-02-05', 'Hồ Chí Minh');
-- Insert vào bảng thongbao
INSERT INTO thongbao (noiDung, thoiGianTB, idNguoiDung, idBaiDang) VALUES
('Cập nhật công việc mới: Lập trình viên Frontend', '2024-01-01', 1, 1),
('Cập nhật công việc mới: Quản lý dự án', '2024-02-01', 2, 2);

-- Insert vào bảng yeucau
INSERT INTO yeucau (noiDung, idBaiDang) VALUES
('Yêu cầu kinh nghiệm 2 năm trở lên', 1),
('Yêu cầu có chứng chỉ PMP', 2);

-- Insert vào bảng danhsach_uv
INSERT INTO danhsach_uv (idBaiDang, idNguoiDung, thoiGianNop) VALUES
(1, 1, '2024-01-10'),
(2, 2, '2024-02-10');

-- Insert vào bảng congty
