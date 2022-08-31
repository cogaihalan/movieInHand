import React, { useEffect, useRef } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Popconfirm, Space, Table, Button, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteFilm,
  getListFilms,
} from "../../../redux/actions/ManageFilmActions";
import { history } from "../../../App";
const { Search } = Input;
export default function Films() {
  const dispatch = useDispatch();
  let keySearch = useRef(null);
  useEffect(() => {
    dispatch(getListFilms());
  }, []);
  const { listFilms } = useSelector(
    (stateList) => stateList.ManageFilmsReducer
  );
  const onSearch = (value) => console.log(value);
  const handleSearch = (e) => {
    keySearch.current = e.target.value;
    if (keySearch.current) clearTimeout(keySearch.current);
    setTimeout(() => {
      dispatch(getListFilms(keySearch.current));
    }, 750);
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "maPhim",
      key: "maPhim",
      width: "5%",
      sorter: (nextItem, item) => nextItem.maPhim - item.maPhim,
    },
    {
      title: "Poster",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      width: "5%",
      render: (srcImg) => {
        return (
          <div>
            <img
              src={srcImg}
              alt={srcImg}
              style={{ width: "60px", height: "60px" }}
            />
          </div>
        );
      },
    },
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",
      key: "tenPhim",
      width: "15%",
      sorter: (nextItem, item) => {
        const tenPhim1 = nextItem.tenPhim?.trim().toLowerCase();
        const tenPhim2 = item.tenPhim?.trim().toLowerCase();
        if (tenPhim1 < tenPhim2) return -1;
        return 1;
      },
    },
    {
      title: "Mô Tả",
      dataIndex: "moTa",
      key: "moTa",
      width: "25%",
      sorter: (nextItem, item) => {
        const desc1 = nextItem.moTa?.trim().toLowerCase();
        const desc2 = item.moTa?.trim().toLowerCase();

        if (desc1 < desc2) return -1;
        return 1;
      },
      sortDirections: ["ascend", "descend"],
      render: (desc) => {
        return (
          <Space>
            {desc.length > 50 ? <div>{desc.substring(0, 80)} ...</div> : desc}
          </Space>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      width: "20%",
      render: (film, record) => {
        return (
          <Space>
            <button
              onClick={() => {
                history.push(`/admin/films/edit/${film.maPhim}`);
              }}
              style={{ color: "white", borderRadius: "4px" }}
              className="p-1 bg-blue-500 text-xl "
            >
              <EditOutlined />
            </button>
            <Popconfirm
              title="Are you sure to delete this project?"
              onConfirm={() => {
                dispatch(deleteFilm(film.maPhim));
              }}
              onCancel={() => {}}
              okText="Yes"
              cancelText="No"
            >
              <button
                style={{ color: "white", borderRadius: "4px" }}
                className="p-1 bg-red-500 text-xl "
              >
                <DeleteOutlined />
              </button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];
  return (
    <div className="container-fluid d-flex flex-column ">
      <div className="flex gap-5  items-center">
        <h3 className="p-2 text-2xl">Films Management</h3>
        <Button
          onClick={() => {
            history.push("/admin/films/add");
          }}
        >
          Thêm phim mới
        </Button>
      </div>
      <Search
        className="my-2"
        placeholder="input search text"
        onSearch={onSearch}
        onChange={handleSearch}
        enterButton
      />
      <Space
        style={{
          marginBottom: 16,
        }}
      ></Space>
      <Table
        size="small"
        columns={columns}
        rowKey={"maPhim"}
        dataSource={listFilms}
      />
    </div>
  );
}
