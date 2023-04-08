import React, { Fragment } from 'react'
import { Col, FormGroup, Input, Label, Row } from 'reactstrap'
import { Btn } from '../../../AbstractElements'
import { DetectHosting, Domain, SSL, ServerInformation, TLD } from '../../../Constant'

const Filter = () => {
  return(
    <Fragment>
      <Row>
        <Col xl="2" lg='2' md='2' sm='12'>
          <FormGroup>
            <Label htmlFor="exampleFormControlInput1"><b>Country</b></Label>
            <Input type="select" name="country" className="form-control digits" defaultValue="All">
              <option>{'All'}</option>
              <option>{'United States'}</option>
              <option>{'Canada'}</option>
              <option>{'India'}</option>
              <option>{'Brazil'}</option>
            </Input>
          </FormGroup>
        </Col>
        <Col xl="2" lg='2' md='2' sm='12'>
          <FormGroup>
            <Label htmlFor="exampleFormControlInput1"><b>{Domain} {TLD}</b></Label>
            <Input type="text" name="domain_tld" className="form-control" />
          </FormGroup>
        </Col>
        <Col xl="1" lg='1' md='1' sm='12'>
          <FormGroup>
            <Label htmlFor="exampleFormControlInput1"><b>{SSL}</b></Label>
            <Input type="select" name="seller" className="form-control digits" defaultValue="1">
              <option value={'All'}>{'All'}</option>
              <option value={'Seller1'}>{'Seller1'}</option>
              <option value={'Seller2'}>{'Seller2'}</option>
              <option value={'Seller3'}>{'Seller3'}</option>
              <option value={'Seller4'}>{'Seller4'}</option>
            </Input>
          </FormGroup>
        </Col>
        <Col xl="2" lg='2' md='2' sm='12'>
          <FormGroup>
            <Label htmlFor="exampleFormControlInput1"><b>{ServerInformation}</b></Label>
            <Input type="text" name="server_information" className="form-control" />
          </FormGroup>
        </Col>
        <Col xl="2" lg='2' md='2' sm='12'>
          <FormGroup>
            <Label htmlFor="exampleFormControlInput1"><b>{DetectHosting}</b></Label>
            <Input type="text" name="detected_hosting" className="form-control" />
          </FormGroup>
        </Col>
        <Col xl="2" lg='2' md='2' sm='12'>
          <FormGroup>
            <Label htmlFor="exampleFormControlInput1"><b>Seller</b></Label>
            <Input type="select" name="seller" className="form-control digits" defaultValue="1">
              <option value={'All'}>{'All'}</option>
              <option value={'Seller1'}>{'Seller1'}</option>
              <option value={'Seller2'}>{'Seller2'}</option>
              <option value={'Seller3'}>{'Seller3'}</option>
              <option value={'Seller4'}>{'Seller4'}</option>
            </Input>
          </FormGroup>
        </Col>
        <Col xl="1" lg='1' md='1' sm='12' className='d-flex align-items-center'>
            <Btn attrBtn={{color: 'info', className: 'p-1'}}>Filter<i className='fa fa-filter'></i></Btn>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Filter
