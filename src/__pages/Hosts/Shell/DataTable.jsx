import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DataTable from "react-data-table-component";
import { Button, ButtonGroup } from "reactstrap";
import { fetch_shells, get_shell } from "../../../redux/actions/shell";
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
    dispatch(fetch_shells(filter));
  }, []);

  const { shells, cnt } = useSelector((state) => state.shell);
  const { user } = useSelector((state) => state.auth);

  let data = [];

  shells.map((item) => {
    data.push({
      country: item.country,
      domain: item.domain,
      tld: item.tld,
      ssl:
        item.ssl === "https" ? (
          <span className="text-success">
            <i className="fa fa-lock"></i>&nbsp;https
          </span>
        ) : (
          <span>
            <i className="fa fa-unlock"></i>&nbsp;http
          </span>
        ),
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
                  dispatch(get_shell(item));
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
      <CustomePagination cnt={cnt} func={fetch_shells} />
      <EditModal isOpen={modal} title={"Edit"} toggler={toggle} />
    </Fragment>
  );
};
export default Table;
