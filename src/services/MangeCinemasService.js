import { GROUPID } from "../utils/settings/config";
import { BaseService } from "./BaseService";

class ManageCinemasService extends BaseService {
  layThongTinLichChieuHeThongRap() {
    return this.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`
    );
  }
  layThongTinLichChieuPhim(filmID) {
    return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${filmID}`);
  }
  layThongTinHeThongRap() {
    return this.get("/api/QuanLyRap/LayThongTinHeThongRap");
  }
  layThongTinCumRapTheoHeThong(maHeThongRap) {
    return this.get(
      `/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
    );
  }
}

export const QLCinemasService = new ManageCinemasService();
