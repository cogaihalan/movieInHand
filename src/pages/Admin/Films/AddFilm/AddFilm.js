import { DatePicker, Form, Input, InputNumber, Switch } from "antd";
import React, { useState } from "react";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch } from "react-redux";
import { uploadFilm } from "../../../../redux/actions/ManageFilmActions";
import { GROUPID } from "../../../../utils/settings/config";
const AddFilm = () => {
  const [componentSize, setComponentSize] = useState("default");
  const [imgSrc, setImgSrc] = useState(null);
  const dispatch = useDispatch();
  const filmFormik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: false,
      sapChieu: false,
      danhGia: 0,
      hot: false,
      hinhAnh: {},
    },
    onSubmit: (values) => {
      console.log("values", values);
      const formData = new FormData();
      values.maNhom = GROUPID;
      for (let key in values) {
        console.log(key);
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          formData.append("File", values.hinhAnh, values.hinhAnh.name);
        }
      }
      dispatch(uploadFilm(formData));
    },
  });
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
  const handleChangeFile = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setImgSrc(e.target.result);
    };
    filmFormik.setFieldValue("hinhAnh", file);
  };
  return (
    <div className="p-4">
      <h4 className="font-bold text-xl text-slate-800">Add New Film</h4>
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
        size={componentSize}
      >
        <Form.Item label="Tên phim">
          <Input name="tenPhim" onChange={filmFormik.handleChange} />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input name="trailer" onChange={filmFormik.handleChange} />
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input name="moTa" onChange={filmFormik.handleChange} />
        </Form.Item>
        <Form.Item label="Hình ảnh phim">
          <input name="hinhAnh" type="file" onChange={handleChangeFile} />
          <img
            src={imgSrc}
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
            name="ngayKhoiChieu"
          />
        </Form.Item>
        <Form.Item label="Đánh Giá">
          <InputNumber
            min={1}
            max={10}
            onChange={handleChangeFieldValue("danhGia")}
          />
        </Form.Item>
        <Form.Item label="Đang Chiếu" valuePropName="checked">
          <Switch onChange={handleChangeFieldValue("dangChieu")} />
        </Form.Item>
        <Form.Item label="Sắp Chiếu" valuePropName="checked">
          <Switch onChange={handleChangeFieldValue("sapChieu")} />
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked">
          <Switch onChange={handleChangeFieldValue("hot")} />
        </Form.Item>
        <Form.Item label="Xác Nhận">
          <button
            className="py-1 px-3 border-sky-100 border-2 hover:border-sky-300 focus:border-sky-300  bg-white"
            type="submit"
          >
            Thêm Phim
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddFilm;
