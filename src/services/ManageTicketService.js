import { BaseService } from "./BaseService";

class ManageTicketService extends BaseService {
  layDanhSachPhongVe = (maLichChieu) => {
    return this.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
  };
}

export const QLTicketService = new ManageTicketService();
