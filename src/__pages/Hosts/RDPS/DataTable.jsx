import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DataTable from "react-data-table-component";
import {
  Button,
  ButtonGroup,
  Col,
  FormGroup,
  Label,
  Row,
  Input,
} from "reactstrap";
import { fetch_rdps, get_rdp } from "../../../redux/actions/rdps";
import { Btn } from "../../../AbstractElements";
import EditModal from "./EditModal";
import CustomePagination from "../../../__components/CustomePagination";

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
                outline: false,
              }}
            >
              <i className="fa fa-paper-plane-o"></i>
            </Btn>
            {user && user.role === "admin" ? (
              <Button
                size="sm"
                className="p-2"
                color="info"
                outline={false}
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
                  outline: false,
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

  const tableColumns = [
    {
      name: "Country",
      selector: (row) => row["country"],
      sortable: false,
      center: false,
      width: "7%",
    },
    {
      name: "IP",
      selector: (row) => `${row.ip}`,
      sortable: false,
      center: false,
      width: "10%",
    },
    {
      name: "Windows",
      selector: (row) => `${row.windows}`,
      sortable: false,
      center: false,
      width: "10%",
    },
    {
      name: "RAM",
      selector: (row) => `${row.ram}`,
      sortable: false,
      center: false,
      width: "10%",
    },
    {
      name: "Access",
      selector: (row) => row.access,
      sortable: false,
      center: false,
      width: "7%",
    },
    {
      name: "User",
      selector: (row) => `${row.user}`,
      sortable: false,
      center: false,
      width: "10%",
    },
    {
      name: "Detect Hosting",
      selector: (row) => row.detect_hosting,
      sortable: false,
      center: false,
      width: "10%",
    },
    {
      name: "Seller",
      selector: (row) => row.seller,
      sortable: false,
      center: false,
      width: "10%",
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: false,
      center: false,
      width: "6%",
    },
    {
      name: "Added on",
      selector: (row) => row.added_on,
      sortable: false,
      center: false,
      width: "12%",
    },
    {
      name: "Action",
      selector: (row) => row["action"],
      sortable: false,
      center: true,
      width: "8%",
    },
  ];

  return (
    <Fragment>
      <>
        {/* <div className="table-responsive">
        <Table>
          <thead>
            <tr className="border-bottom-primary">
              <th scope="col">{"Country"}</th>
              <th scope="col">{"IP"}</th>
              <th scope="col">{"Windows"}</th>
              <th scope="col">{"RAM"}</th>
              <th scope="col">{"Access"}</th>
              <th scope="col">{"User"}</th>
              <th scope="col">{"Detect Hosting"}</th>
              <th scope="col">{"Seller"}</th>
              <th scope="col">{"Price"}</th>
              <th scope="col">{"Added on"}</th>
              <th scope="col">{"Action"}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className={`border-bottom-${item.color}`}>
                <td>{item.country}</td>
                <td>{item.ip}</td>
                <td>{item.windows}</td>
                <td>{item.ram}</td>
                <td>{item.access}</td>
                <td>{item.user}</td>
                <td>{item.detect_hosting}</td>
                <td>{item.seller}</td>
                <td>{item.price}</td>
                <td>{item.added_on}</td>
                <td>
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
                          outline: false,
                        }}
                      >
                        <i className="fa fa-paper-plane-o"></i>
                      </Btn>
                      <Btn
                        attrBtn={{
                          size: "sm",
                          className: "p-2",
                          color: "info",
                          outline: false,
                        }}
                      >
                        {user.role === "admin" ? (
                          <i className="fa fa-edit"></i>
                        ) : (
                          <i className="fa fa-shopping-cart"></i>
                        )}
                      </Btn>
                    </ButtonGroup>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div> */}
      </>
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
