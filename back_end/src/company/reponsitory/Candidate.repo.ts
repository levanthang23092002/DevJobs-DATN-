import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CandidateRepository {
  constructor(private prisma: PrismaService) {}

  async getAllCandidate(idBD: number) {
    const listUngVien = await this.prisma.dANHSACH_UV.findMany({
      where: {
        idBaiDang: idBD,
      },
      include: {
        nguoiDung: {
          select: {
            idNguoiDung: true,
            ten: true,
            anhDaiDien: true,
          },
        },
      },
    });

    // Định dạng lại dữ liệu để khớp với cấu trúc `ListUngVien`
    const formattedList = listUngVien.map((uv) => ({
      idNguoiDung: uv.nguoiDung.idNguoiDung,
      tenNguoiDung: uv.nguoiDung.ten,
      logo:
        uv.nguoiDung.anhDaiDien ||
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZwkVfEKEdjFIryQmVhdVlLIwBGfGBzAA3GA&s',
      trangThai: uv.trangThai,
    }));

    return formattedList;
  }

  async updateStatus(idBD: number, idND: number, noidung) {
    const update = await this.prisma.dANHSACH_UV.update({
      where: {
        idBaiDang_idNguoiDung: {
          idBaiDang: idBD,
          idNguoiDung: idND,
        },
      },
      data: {
        trangThai: noidung.newStatus,
        thoiBatDau: noidung.startTime,
        kieuPhongVan: noidung.interviewType,
        diaChi: noidung.interviewAddress,
        link: noidung.interviewLink,
      },
    });

    return update;
  }
  async updateNote(idBD: number, idND: number, noidung) {
    const update = await this.prisma.dANHSACH_UV.update({
      where: {
        idBaiDang_idNguoiDung: {
          idBaiDang: idBD,
          idNguoiDung: idND,
        },
      },
      data: {
        trangThai: noidung,
      },
    });

    return update;
  }

  async getSchedule(idBD: number, idND: number) {
    const data = await this.prisma.dANHSACH_UV.findUnique({
      where: {
        idBaiDang_idNguoiDung: {
          idBaiDang: idBD,
          idNguoiDung: idND,
        },
      },
    });

    return data;
  }
  async getCandidateDetail(id: number) {
    const candidate = await this.prisma.nGUOIDUNG.findUnique({
      where: { idNguoiDung: id },
      include: {
        viTri: {
          select: {
            tenViTri: true,
          },
        },
      },
    });
    if (!candidate) {
      throw new Error('Candidate not found');
    }

    return {
      idNguoiDung: candidate.idNguoiDung,
      ten: candidate.ten,
      sdt: candidate.sdt,
      email: candidate.email,
      diaChi: candidate.diaChi,
      ngaySinh: candidate.ngaySinh.toISOString().split('T')[0],
      anhDaiDien:
        candidate.anhDaiDien ??
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZwkVfEKEdjFIryQmVhdVlLIwBGfGBzAA3GA&s',
      luongBatDau: candidate.luongBatDau ? candidate.luongBatDau : 'Thỏa thuận',
      luongKetThuc: candidate.luongKetThuc
        ? candidate.luongKetThuc
        : 'Thỏa thuận',
      tenViTri: candidate.viTri.tenViTri,
      idCapDo: candidate.idCapDo,
      idTinhThanh: candidate.idTinhThanh,
    };
  }
}
