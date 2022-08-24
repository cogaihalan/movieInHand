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
}

export const QLCinemasService = new ManageCinemasService();
