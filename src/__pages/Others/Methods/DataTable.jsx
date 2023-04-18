import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DataTable from "react-data-table-component";
import { Button, ButtonGroup } from "reactstrap";
import { fetch_methods, get_method } from "../../../redux/actions/method";
import { tableColumns } from "./const";
import { Btn } from "../../../AbstractElements";
import CustomePagination from "../../../__components/CustomePagination";
import EditModal from "./EditModal";

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
    dispatch(fetch_methods(filter));
  }, []);

  const { methods, cnt } = useSelector((state) => state.method);
  const { user } = useSelector((state) => state.auth);

  let data = [];

  methods.map((item) => {
    data.push({
      country: item.country,
      description: item.description,
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
                  dispatch(get_method(item));
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
      <CustomePagination cnt={cnt} func={fetch_methods} />
      <EditModal isOpen={modal} title={"Edit"} toggler={toggle} />
    </Fragment>
  );
};
export default Table;
