import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AuthRepository {
  constructor(private prisma: PrismaService) {}

  async getAllCity() {
    const allCity = await this.prisma.tINHTHANH.findMany();
    return allCity;
  }

  async getAllPosition() {
    const allPoosition = await this.prisma.vITRIUNGTUYEN.findMany();
    return allPoosition;
  }

  async getAllLevel() {
    const allPoosition = await this.prisma.capDo.findMany();
    return allPoosition;
  }
  async getAllCompany() {
    return await this.prisma.cONGTY.findMany();
  }
  async getAllPost() {
    const rawData = await this.prisma.bAIDANG.findMany({
      include: {
        congTy: {
          select: {
            tenCongTy: true,
            logo: true,
            nganhNghe: true,
            linkWeb: true,
            email: true,
            sDT: true,
          },
        },
        tinhThanh: {
          select: {
            tenTinhThanh: true,
          },
        },
        yeuCau: {
          select: {
            idYeuCau: true,
            noiDung: true,
          },
        },
      },
      orderBy: {
        ngayDang: 'desc',
      },
    });

    return rawData.map((baiDang) => ({
      idBaiDang: baiDang.idBaiDang,
      email: baiDang.congTy.email,
      sdt: baiDang.congTy.sDT,
      logo: baiDang.congTy.logo || 'https://via.placeholder.com/40',
      tenCongTy: baiDang.congTy.tenCongTy,
      nganhNghe: baiDang.congTy.nganhNghe,
      linkWeb: baiDang.congTy.linkWeb,
      tenBaiDang: baiDang.tenBaiDang,
      viTri: baiDang.viTri,
      soLuong: baiDang.soLuong,
      trangThai: baiDang.trangThai,
      hinhAnh: baiDang.hinhAnh || 'https://via.placeholder.com/100',
      luongBatDau: baiDang.luongBatDau
        ? baiDang.luongBatDau.toLocaleString('vi-VN')
        : 'Thỏa thuận',
      luongKetThuc: baiDang.luongKetThuc
        ? baiDang.luongKetThuc.toLocaleString('vi-VN')
        : 'Thỏa thuận',
      hanChot: baiDang.hanChot.toISOString().split('T')[0],
      ngayDang: baiDang.ngayDang.toISOString().split('T')[0],
      ngaySua: baiDang.ngaySua.toISOString().split('T')[0],
      diaChiCuThe: baiDang.diaChiCuThe,
      tenTinhThanh: baiDang.tinhThanh.tenTinhThanh,
      moTa: baiDang.moTa || 'Không có mô tả',
      yeuCau: baiDang.yeuCau.map((yeuCau) => ({
        idYeuCau: yeuCau.idYeuCau,
        noiDung: yeuCau.noiDung,
      })),
    }));
  }

  async getAllCandidate() {
    const rawData = await this.prisma.nGUOIDUNG.findMany({
      include: {
        viTri: {
          select: {
            tenViTri: true,
          },
        },
        tinhThanh: {
          select: {
            tenTinhThanh: true,
          },
        },
        capDo: {
          select: {
            tenCapDo: true,
          },
        },
      },
    });

    // Chuyển đổi dữ liệu
    return rawData.map((nguoiDung) => ({
      idNguoiDung: nguoiDung.idNguoiDung,
      ten: nguoiDung.ten,
      tenViTri: nguoiDung.viTri.tenViTri,
      tenCapDo: nguoiDung.capDo.tenCapDo,
      tenTinhThanh: nguoiDung.tinhThanh.tenTinhThanh,
      ngaySinh: nguoiDung.ngaySinh.toISOString().split('T')[0], // Định dạng ngày
      sdt: nguoiDung.sdt,
      diaChi: nguoiDung.diaChi,
      email: nguoiDung.email,
      trangThai: nguoiDung.trangThai,
      anhDaiDien: nguoiDung.anhDaiDien || 'https://via.placeholder.com/40', // Giá trị mặc định nếu null
    }));
  }
}
