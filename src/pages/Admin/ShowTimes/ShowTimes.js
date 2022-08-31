import React, { useEffect, useState } from "react";
import { Form, Button, Select, DatePicker, InputNumber } from "antd";
import { QLCinemasService } from "../../../services/MangeCinemasService";
import { STATUS_CODE } from "../../../utils/settings/config";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch } from "react-redux";
import { taoLichChieu } from "../../../redux/actions/ManageTicketActions";

const Showtimes = (props) => {
  const dispatch = useDispatch();
  const filmID = props.match.params.id;
  const scheduleFormik = useFormik({
    initialValues: {
      maPhim: +filmID,
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: 75000,
    },
    onSubmit: (values) => {
      dispatch(taoLichChieu(values));
    },
  });
  const [cinema, setCinema] = useState({
    heThongRap: [],
    cumRap: [],
  });
  useEffect(() => {
    async function fetchData() {
      const { data, status } = await QLCinemasService.layThongTinHeThongRap();
      if (status === STATUS_CODE.SUCCESS) {
        setCinema({
          ...cinema,
          heThongRap: data.content,
        });
      }
    }
    fetchData();
  }, []);
  const handleChangeHeThongRap = async (maHeThongRap) => {
    const { data, status } =
      await QLCinemasService.layThongTinCumRapTheoHeThong(maHeThongRap);
    if (status === STATUS_CODE.SUCCESS) {
      setCinema({
        ...cinema,
        cumRap: data.content,
      });
    }
  };
  const handleChangeCumRap = (value) => {
    console.log(value);
    scheduleFormik.setFieldValue("maRap", value);
  };
  const handleChangeDatePicker = (value) => {
    scheduleFormik.setFieldValue(
      "ngayChieuGioChieu",
      moment(value).format("DD/MM/YYYY hh:mm:ss")
    );
  };
  const handleChangeInputNumber = (value) => {
    scheduleFormik.setFieldValue("giaVe", value);
  };
  const handleOnOk = (value) => {
    scheduleFormik.setFieldValue(
      "ngayChieuGioChieu",
      moment(value).format("DD/MM/YYYY hh:mm:ss")
    );
  };
  const listHeThongRap = () => {
    return cinema.heThongRap?.map((item) => {
      return { label: item.tenHeThongRap, value: item.maHeThongRap };
    });
  };
  const listCumRap = () => {
    return cinema.cumRap?.map((item) => {
      return { label: item.tenCumRap, value: item.maCumRap };
    });
  };
  return (
    <div className="p-4">
      <h3 className="p-2 text-2xl">Create Film Schedule</h3>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >
        <Form.Item label="Hệ thống rạp">
          <Select
            options={listHeThongRap()}
            placeholder="Chọn hệ thống rạp"
            onChange={(value) => {
              handleChangeHeThongRap(value);
            }}
          ></Select>
        </Form.Item>
        <Form.Item label="Cụm rạp">
          <Select
            options={listCumRap()}
            onChange={handleChangeCumRap}
            placeholder="Chọn cụm rạp"
          ></Select>
        </Form.Item>

        <Form.Item label="Ngày Chiếu Giờ Chiếu">
          <DatePicker
            // format="DD/MM/YYYY"
            showTime
            onOk={handleOnOk}
            onChange={handleChangeDatePicker}
          />
        </Form.Item>

        <Form.Item label="Giá Vé">
          <InputNumber
            defaultValue={75000}
            min={75000}
            max={150000}
            onChange={handleChangeInputNumber}
          />
        </Form.Item>

        <Form.Item label="Xác Nhận">
          <Button
            onClick={() => {
              scheduleFormik.handleSubmit();
            }}
          >
            Tạo Lịch Chiếu
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Showtimes;
