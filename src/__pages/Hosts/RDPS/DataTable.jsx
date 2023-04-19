import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DataTable from "react-data-table-component";
import { Button, ButtonGroup } from "reactstrap";
import { fetch_rdps, get_rdp } from "../../../redux/actions/rdps";
import { Btn } from "../../../AbstractElements";
import EditModal from "./EditModal";
import CustomePagination from "../../../__components/CustomePagination";
import { tableColumns } from "./const";

const moment = require("moment");

const Table = () => {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const searchParams = new URL(window.location.href).searchParams;

  const filter = {};

  for (const key of searchParams.keys()) {
    filter[key] = searchParams.get(key);
  }

  const toggle = () => {
    setModal(!modal);
  };

  useEffect(() => {
    dispatch(fetch_rdps(filter));
  }, []);

  const { rdps, cnt } = useSelector((state) => state.rdps);
  const { user } = useSelector((state) => state.auth);

  let data = [];

  rdps.map((item) => {
    data.push({
      country: item.country,
      ip: item.ip,
      windows: item.windows,
      ram: item.ram,
      access: item.access,
      user: item.user,
      detect_hosting: item.detect_hosting,
      seller: item.seller,
      price: `$ ${item.price}`,
      added_on: moment(item.date).format("yyyy.MM.DD hh:mm:ss A"),
      action: (
        <div className="btn-group-showcase">
          <ButtonGroup
            className="btn-group-pill"
            style={{ display: "contents" }}
          >
            <Btn
              attrBtn={{
                size: "sm",
                className: "p-2",
                color: "success",
                outline: true,
              }}
            >
              <i className="fa fa-paper-plane-o"></i>
            </Btn>
            {user && user.role === "admin" ? (
              <Button
                size="sm"
                className="p-2"
                color="info"
                outline={true}
                onClick={() => {
                  dispatch(get_rdp(item));
                  toggle(item);
                }}
              >
                <i className="fa fa-edit"></i>
              </Button>
            ) : (
              <Btn
                attrBtn={{
                  size: "sm",
                  className: "p-2",
                  color: "info",
                  outline: true,
                  onClick: toggle(item),
                }}
              >
                <i className="fa fa-shopping-cart"></i>
              </Btn>
            )}
          </ButtonGroup>
        </div>
      ),
    });
  });

  return (
    <Fragment>
      <DataTable
        data={data}
        columns={tableColumns}
        striped={true}
        center={false}
        responsive={true}
      />
      <hr className="mt-4 mb-4" />
      <CustomePagination cnt={cnt} func={fetch_rdps} />
      <EditModal isOpen={modal} title={"Edit"} toggler={toggle} />
    </Fragment>
  );
};
export default Table;
