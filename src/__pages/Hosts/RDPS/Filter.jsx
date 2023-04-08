import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import { Btn } from "../../../AbstractElements";
import { FilterTxt } from "../../../Constant";
import { fetch_rdps, fetch_select_options } from "../../../redux/actions/rdps";

const Filter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_select_options());
  }, []);

  const { country, access, windows, detect_hosting, seller } = useSelector(
    (state) => state.rdps.rdpsOptionValue
  );

  const [filter, setFilter] = useState({
    country: "All",
    windows: "All",
    access: "All",
    seller: "All",
    detect_hosting: "",
  });

  const onChange = (e) =>
    setFilter({ ...filter, [e.target.name]: e.target.value });

  const onFilter = () => {
    dispatch(fetch_rdps(filter));
  };

  return (
    <Fragment>
      <Row>
        <Col xl="2" lg="2" md="4" sm="12">
          <FormGroup>
            <Label htmlFor="exampleFormControlInput1">
              <b>Country</b>
            </Label>
            <Input
              type="select"
              name="country"
              value={filter.country}
              onChange={onChange}
              className="form-control digits"
              defaultValue="All"
            >
              <option>{"All"}</option>
              {country &&
                country.map((c, index) => (
                  <option value={c} key={index}>
                    {c}
                  </option>
                ))}
            </Input>
          </FormGroup>
        </Col>
        <Col xl="3" lg="3" md="4" sm="12">
          <FormGroup>
            <Label htmlFor="exampleFormControlInput1">
              <b>Windows Type</b>
            </Label>
            <Input
              type="select"
              name="windows"
              value={filter.windows}
              onChange={onChange}
              className="form-control digits"
              defaultValue="All"
            >
              <option>{"All"}</option>
              {windows &&
                windows.map((c, index) => (
                  <option value={c} key={index}>
                    {c}
                  </option>
                ))}
            </Input>
          </FormGroup>
        </Col>
        <Col xl="2" lg="2" md="4" sm="12">
          <FormGroup>
            <Label htmlFor="exampleFormControlInput1">
              <i className="fa fa-user-shield"></i>
              <b>Access</b>
            </Label>
            <Input
              type="select"
              name="access"
              value={filter.access}
              onChange={onChange}
              className="form-control digits"
              defaultValue="All"
            >
              <option value={"All"}>{"All"}</option>
              {access &&
                access.map((c, index) => (
                  <option value={c} key={index}>
                    {c}
                  </option>
                ))}
            </Input>
          </FormGroup>
        </Col>
        <Col xl="2" lg="4" md="4" sm="12">
          <FormGroup>
            <Label htmlFor="exampleFormControlInput1">
              <b>Detected Hosting</b>
            </Label>
            <Input
              type="text"
              name="detect_hosting"
              value={filter.detect_hosting}
              onChange={onChange}
              className="form-control"
            />
          </FormGroup>
        </Col>
        <Col xl="2" lg="2" md="4" sm="12">
          <FormGroup>
            <Label htmlFor="exampleFormControlInput1">
              <b>Seller</b>
            </Label>
            <Input
              type="select"
              name="seller"
              value={filter.seller}
              onChange={onChange}
              className="form-control digits"
              defaultValue="1"
            >
              <option value={"All"}>{"All"}</option>
              {seller &&
                seller.map((c, index) => (
                  <option value={c} key={index}>
                    {c}
                  </option>
                ))}
            </Input>
          </FormGroup>
        </Col>
        <Col xl="1" lg="1" md="4" sm="12" className="d-flex align-items-center">
          {/* <FormGroup> */}
            <Btn attrBtn={{ color: "info", onClick: onFilter }}>
              {FilterTxt}
            </Btn>
          {/* </FormGroup> */}
        </Col>
      </Row>
    </Fragment>
  );
};

export default Filter;
