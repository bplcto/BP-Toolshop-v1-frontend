import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DataTable from "react-data-table-component";
import { Button, ButtonGroup } from "reactstrap";
import { Btn } from "../../../AbstractElements";
import CustomePagination from "../../../__components/CustomePagination";
import { dummytabledata, tableColumns } from "./const";
import { fetch_smtps, get_smtp } from "../../../redux/actions/smtp";
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
    dispatch(fetch_smtps(filter));
  }, []);

  const { smtps, cnt } = useSelector((state) => state.smtp);
  const { user } = useSelector((state) => state.auth);

  let data = [];

  smtps.map((item) => {
    data.push({
      smtpid: item.smtpid,
      country: item.country,
      domain: item.domain,
      webmail: item.webmail,
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
                  dispatch(get_smtp(item));
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
      <CustomePagination cnt={cnt} func={fetch_smtps} />
      <EditModal isOpen={modal} title={"Edit"} toggler={toggle} />
    </Fragment>
  );
};
export default Table;
