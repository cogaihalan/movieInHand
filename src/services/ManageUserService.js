import { BaseService } from "./BaseService";

class ManageUserService extends BaseService {
  dangKy(userInfo) {
    return this.post("/api/QuanLyNguoiDung/DangNhap", userInfo);
  }
  dangNhap(userInfo) {
    return this.post("/api/QuanLyNguoiDung/DangKy", userInfo);
  }
}

export const QLUserService = new ManageUserService();
