import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, ButtonGroup } from "reactstrap";
import { fetch_phpmailers, get_phpmailer } from "../../../redux/actions/phpmailer";
import { tableColumns } from "./const";
import { Btn } from "../../../AbstractElements";
import DataTable from "react-data-table-component";
import CustomePagination from "../../../__components/CustomePagination";
import EditModal from "./EditModal";
import ReactCountryFlag from "react-country-flag"
import Loader from "../../../__components/Loader";

const moment = require("moment");
const { getName } = require('country-list');

const Table = () => {
  const dispatch = useDispatch();

  const { phpmailers, cnt } = useSelector((state) => state.phpmailer);
  const { user } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.app);

  const [modal, setModal] = useState(false);
  const [ data, setData ] = useState([]);

  const searchParams = new URL(window.location.href).searchParams;

  const filter = {};

  let tempData = [];

  for (const key of searchParams.keys()) {
    filter[key] = searchParams.get(key);
  }
  
  useEffect(() => {
    dispatch(fetch_phpmailers(filter));
  }, []);

  useEffect(() => {
    phpmailers.map((item) => {
      return tempData.push({
        id: item.id,
        country: (<><ReactCountryFlag countryCode={item.country} svg style={{ fontSize: '2em' }}/>&nbsp;<span>{getName(item.country)}</span></>),
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
                    dispatch(get_phpmailer(item));
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
                    // onClick: toggle(item),
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
    setData(tempData);
  }, [phpmailers])

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <Fragment>
      {
        loading ? <Loader /> : 
        <>
          <DataTable
            data={data}
            columns={tableColumns}
            striped={true}
            center={false}
            pagination
            responsive={true}
          />
          <hr className="mt-4 mb-4" />
          <CustomePagination cnt={cnt} func={fetch_phpmailers} />
          <EditModal isOpen={modal} title={"Edit"} toggler={toggle} />
        </>
      }
    </Fragment>
  );
};

export default Table;
