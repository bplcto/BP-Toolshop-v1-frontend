import React, { Fragment } from 'react'
import { Col, FormGroup, Input, Label, Row } from 'reactstrap'
import { Btn } from '../../../AbstractElements'

const Filter = () => {
  return(
    <Fragment>
      <Row>
        <Col xl="2" lg='2' md='4' sm='12'>
          <FormGroup>
            <Label htmlFor="exampleFormControlInput1"><i className="fa fa-globe"></i><b>Country</b></Label>
            <Input type="select" name="country" className="form-control digits" defaultValue="All">
              <option>{'All'}</option>
              <option>{'United States'}</option>
              <option>{'Canada'}</option>
              <option>{'India'}</option>
              <option>{'Brazil'}</option>
            </Input>
          </FormGroup>
        </Col>
        <Col xl="3" lg='3' md='4' sm='12'>
          <FormGroup>
            <Label htmlFor="exampleFormControlInput1"><i className="fa fa-windows"></i><b>Windows Type</b></Label>
            <Input type="select" name="windows_type" className="form-control digits" defaultValue="All">
              <option>{'All'}</option>
              <option>{'2022'}</option>
              <option>{'2022 ✅✅💯💯'}</option>
              <option>{'2022💯✅'}</option>
              <option>{'2022 ✅💯'}</option>
            </Input>
          </FormGroup>
        </Col>
        <Col xl="1" lg='1' md='4' sm='12'>
          <FormGroup>
            <Label htmlFor="exampleFormControlInput1"><i className="fa fa-user-shield"></i><b>Access</b></Label>
            <Input type="select" name="access" className="form-control digits" defaultValue="All">
              <option value={'All'}>{'All'}</option>
              <option value={'Admin'}>{'Admin'}</option>
              <option value={'admin'}>{'admin'}</option>
              <option value={'user'}>{'user'}</option>
            </Input>
          </FormGroup>
        </Col>
        <Col xl="2" lg='4' md='4' sm='12'>
          <FormGroup>
            <Label htmlFor="exampleFormControlInput1"><i className="fa fa-globe"></i><b>Detected Hosting</b></Label>
            <Input type="text" name="detected_hosting" className="form-control" />
          </FormGroup>
        </Col>
        <Col xl="2" lg='2' md='4' sm='12'>
          <FormGroup>
            <Label htmlFor="exampleFormControlInput1"><i className="fa fa-fire"></i><b>Seller</b></Label>
            <Input type="select" name="seller" className="form-control digits" defaultValue="1">
              <option value={'All'}>{'All'}</option>
              <option value={'Seller1'}>{'Seller1'}</option>
              <option value={'Seller2'}>{'Seller2'}</option>
              <option value={'Seller3'}>{'Seller3'}</option>
              <option value={'Seller4'}>{'Seller4'}</option>
            </Input>
          </FormGroup>
        </Col>
        <Col xl="2" lg='2' md='4' sm='12' className='d-flex align-items-center'>
            <Btn attrBtn={{color: 'info'}}>Filter<i className='fa fa-filter'></i></Btn>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Filter
