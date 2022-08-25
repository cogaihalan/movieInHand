import { BaseService } from "./BaseService";

class ManageUserService extends BaseService {
  dangKy(newUser) {
    return this.post("/api/QuanLyNguoiDung/DangKy", newUser);
  }
  dangNhap(userInfo) {
    return this.post("/api/QuanLyNguoiDung/DangNhap", userInfo);
  }
  layThongTinTaiKhoan() {
    return this.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan");
  }
}

export const QLUserService = new ManageUserService();
