import { GROUPID } from "../utils/settings/config";
import { BaseService } from "./BaseService";

class ManageCinemasService extends BaseService {
  layThongTinLichChieuHeThongRap() {
    return this.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`
    );
  }
}

export const QLCinemasService = new ManageCinemasService();
