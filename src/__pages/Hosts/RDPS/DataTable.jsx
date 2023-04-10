import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DataTable from "react-data-table-component";
import { ButtonGroup } from "reactstrap";
import { fetch_rdps } from "../../../redux/actions/rdps";
import { Btn } from "../../../AbstractElements";
import { Buy, Send } from "../../../Constant";

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
      added_on: item.date,
      action: (
        <div className="btn-group-showcase">
          <ButtonGroup
            className="btn-group-pill"
            style={{ display: "contents" }}
          >
            <Btn
              attrBtn={{
                size: "sm",
                className: "p-1",
                color: "success",
                outline: false,
              }}
            >
              {Send}
            </Btn>
            <Btn
              attrBtn={{
                size: "sm",
                className: "p-1",
                color: "info",
                outline: false,
              }}
            >
              {Buy}
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
        // width: '10%'
    },
    {
        name: 'IP',
        selector: row => `${row.ip}`,
        sortable: false,
        center: false,
        // width: '10%'
    },
    {
        name: 'Windows',
        selector: row => `${row.windows}`,
        sortable: false,
        center: false,
        // width: '7%'
    },
    {
        name: 'RAM',
        selector: row => `${row.ram}`,
        sortable: false,
        center: false,
        // width: '20%'
    },
    {
        name: 'Access',
        selector: row => row.access,
        sortable: false,
        center: false,
        // width: '7%'
    },
    {
        name: 'User',
        selector: row => `${row.user}`,
        sortable: false,
        center: false,
        // width: '8%'
    },
    {
        name: 'Detect Hosting',
        selector: row => row.detect_hosting,
        sortable: false,
        center: false,
        // width: '8%'
    },
    {
        name: 'Seller',
        selector: row => row.seller,
        sortable: false,
        center: false,
        // width: '5%'
    },
    {
        name: 'Price',
        selector: row => row.price,
        sortable: false,
        center: false,
        // width: '5%'
    },
    {
        name: 'Added on',
        selector: row => row.added_on,
        sortable: false,
        center: false,
        // width: '13%'
    },
    {
        name: 'Action',
        selector: row => row['action'],
        sortable: false,
        center: true,
        // width: '7%'
    },
];

  return (
    <Fragment>
      <DataTable
        data={data}
        columns={tableColumns}
        striped={true}
        center={false}
        pagination
        //   responsive={true}
        highlightOnHover
        customStyles={{
          headCells: {
            style: {
              whiteSpace: "pre",
              // padding: '0px 4px',
            },
          },
          cells: {
            style: {
              // padding: '0px 1px!important',
              whiteSpace: "break-spaces!important",
            },
          },
        }}
      />
    </Fragment>
  );
};
export default Table;
