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
}

export const QLFilmsService = new ManageFilmsService();
