import { BaseService } from "./BaseService";

class ManageTicketService extends BaseService {
  layDanhSachPhongVe = (maLichChieu) => {
    return this.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
  };
  datVe = (danhSachVe) => {
    return this.post(`/api/QuanLyDatVe/DatVe`, danhSachVe);
  };
}

export const QLTicketService = new ManageTicketService();
