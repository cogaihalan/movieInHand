import { DatePicker, Form, Input, InputNumber, Switch } from "antd";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilmDetail,
  updateFilm,
} from "../../../../redux/actions/ManageFilmActions";
import { GROUPID } from "../../../../utils/settings/config";
const EditFilm = (props) => {
  const [componentSize, setComponentSize] = useState("default");
  const { filmDetail } = useSelector(
    (stateList) => stateList.ManageFilmsReducer
  );
  const [imgSrc, setImgSrc] = useState("");
  const dispatch = useDispatch();
  const filmFormik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maNhom: GROUPID,
      maPhim: filmDetail.maPhim,
      tenPhim: filmDetail.tenPhim,
      trailer: filmDetail.trailer,
      moTa: filmDetail.moTa,
      ngayKhoiChieu: filmDetail?.ngayKhoiChieu,
      dangChieu: filmDetail.dangChieu,
      sapChieu: filmDetail.sapChieu,
      danhGia: filmDetail.danhGia,
      hot: filmDetail.hot,
      hinhAnh: null,
    },
    onSubmit: (values) => {
      const formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          if (values.hinhAnh !== null) {
            formData.append("File", values.hinhAnh, values.hinhAnh.name);
          }
        }
      }
      dispatch(updateFilm(formData));
    },
  });
  useEffect(() => {
    const filmID = props.match.params.id;

    dispatch(getFilmDetail(filmID));
  }, []);
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const handleChangeDatePicker = (value) => {
    filmFormik.setFieldValue(
      "ngayKhoiChieu",
      moment(value).format("DD/MM/YYYY")
    );
  };
  const handleChangeFieldValue = (name) => {
    return (value) => filmFormik.setFieldValue(name, value);
  };
  const handleChangeFile = async (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    await filmFormik.setFieldValue("hinhAnh", file);
    reader.onload = (e) => {
      setImgSrc(e.target.result);
    };
  };
  return (
    <div className="p-4">
      <h4 className="font-bold text-xl text-slate-800">Update Film</h4>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onSubmitCapture={filmFormik.handleSubmit}
        onValuesChange={onFormLayoutChange}
      >
        <Form.Item label="Tên phim">
          <Input
            name="tenPhim"
            onChange={filmFormik.handleChange}
            value={filmFormik.values.tenPhim}
          />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input
            name="trailer"
            onChange={filmFormik.handleChange}
            value={filmFormik.values.trailer}
          />
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input
            name="moTa"
            onChange={filmFormik.handleChange}
            value={filmFormik.values.moTa}
          />
        </Form.Item>
        <Form.Item label="Hình ảnh phim">
          <input name="hinhAnh" type="file" onChange={handleChangeFile} />
          <img
            src={imgSrc || filmDetail.hinhAnh}
            accept="image/*"
            alt="..."
            className="bg-slate-400 mt-2"
            style={{ width: "90px", height: "100px" }}
          />
        </Form.Item>
        <Form.Item label="Ngày khởi chiếu">
          <DatePicker
            format={"DD/MM/YYYY"}
            onChange={handleChangeDatePicker}
            value={moment(filmFormik.values.ngayKhoiChieu, "DD/MM/YYYY")}
            name="ngayKhoiChieu"
          />
        </Form.Item>
        <Form.Item label="Đánh Giá">
          <InputNumber
            min={1}
            max={10}
            onChange={handleChangeFieldValue("danhGia")}
            value={filmFormik.values.danhGia}
          />
        </Form.Item>
        <Form.Item label="Đang Chiếu" valuePropName="checked">
          <Switch
            onChange={handleChangeFieldValue("dangChieu")}
            checked={filmFormik.values.dangChieu}
          />
        </Form.Item>
        <Form.Item label="Sắp Chiếu" valuePropName="checked">
          <Switch
            onChange={handleChangeFieldValue("sapChieu")}
            checked={filmFormik.values.sapChieu}
          />
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked">
          <Switch
            onChange={handleChangeFieldValue("hot")}
            checked={filmFormik.values.hot}
          />
        </Form.Item>
        <Form.Item label="Xác Nhận">
          <button
            className="py-1 px-3 border-sky-100 border-2 hover:border-sky-300 focus:border-sky-300  bg-white"
            type="submit"
          >
            Cập nhật
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditFilm;
