import { IsEmpty } from 'class-validator';

export class UpdatePositionDto {
  @IsEmpty()
  idViTri: string;

  @IsEmpty()
  tenViTri: string;

  @IsEmpty()
  trangThai: string;
}

export class UpdateProvinceDto {
  @IsEmpty()
  idTinhThanh: string;

  @IsEmpty()
  tenTinhThanh: string;

  @IsEmpty()
  trangThai: string;
}

export class UpdateLevelDto {
  @IsEmpty()
  idCapDo: string;

  @IsEmpty()
  tenCapDo: string;

  @IsEmpty()
  trangThai: string;
}

export class AddManagerDto {
  @IsEmpty()
  ten: string;
}
