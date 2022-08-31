import { GROUPID } from "../utils/settings/config";
import { BaseService } from "./BaseService";

class ManageFilmsService extends BaseService {
  layDanhSachBanner() {
    return this.get("/api/QuanLyPhim/LayDanhSachBanner");
  }
  layDanhSachPhim() {
    return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
  }
  themPhimUploadHinh(formData) {
    return this.post("/api/QuanLyPhim/ThemPhimUploadHinh", formData);
  }
  layThongTinPhim = (maPhim) => {
    return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  };

  capNhatPhimUpload = (formData) => {
    return this.post(`/api/QuanLyPhim/CapNhatPhimUpload`, formData);
  };

  xoaPhim = (maPhim) => {
    return this.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  };
}

export const QLFilmsService = new ManageFilmsService();
