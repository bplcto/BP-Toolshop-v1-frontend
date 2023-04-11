import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DataTable from "react-data-table-component";
import { ButtonGroup } from "reactstrap";
import { fetch_rdps } from "../../../redux/actions/rdps";
import { Btn } from "../../../AbstractElements";

const moment = require('moment');

const Table = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_rdps({}));
  }, []);

  const { rdps } = useSelector((state) => state.rdps);

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
            <Btn
              attrBtn={{
                size: "sm",
                className: "p-2",
                color: "info",
                outline: false,
              }}
            >
              <i className="fa fa-shopping-cart"></i>
            </Btn>
          </ButtonGroup>
        </div>
      ),
    });
  });

  const tableColumns = [
    {
        name: 'Country',
        selector: row => row['country'],
        sortable: false,
        center: false,
        width: '7%'
    },
    {
        name: 'IP',
        selector: row => `${row.ip}`,
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: 'Windows',
        selector: row => `${row.windows}`,
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: 'RAM',
        selector: row => `${row.ram}`,
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: 'Access',
        selector: row => row.access,
        sortable: false,
        center: false,
        width: '7%'
    },
    {
        name: 'User',
        selector: row => `${row.user}`,
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: 'Detect Hosting',
        selector: row => row.detect_hosting,
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: 'Seller',
        selector: row => row.seller,
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: 'Price',
        selector: row => row.price,
        sortable: false,
        center: false,
        width: '6%'
    },
    {
        name: 'Added on',
        selector: row => row.added_on,
        sortable: false,
        center: false,
        width: '12%'
    },
    {
        name: 'Action',
        selector: row => row['action'],
        sortable: false,
        center: true,
        width: '8%'
    },
];

  return (
    <Fragment>
      <DataTable
        data={data}
        columns={tableColumns}
        striped={true}
        center={false}
        responsive={true}
        pagination
      />
    </Fragment>
  );
};
export default Table;
