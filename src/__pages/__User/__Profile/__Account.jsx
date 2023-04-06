import React, { Fragment } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { P } from '../../../AbstractElements'

const __Account = () => {
  const userData = {
    name: "Test Name",
    registered_on: "Mon, Apr 3, 2023 7:56 AM",
    registered_at: "3 days ago",
    balacne: 0,
    email: "test@gmail.com"
  }
  return(
    <Fragment>
      <Row className='d-flex justify-content-center'>
        <Col xl='6' lg='6' md='6' sm='12' xs='12'>
          <Card>
            <CardBody>
              <P>Your name is <b>{userData.name}</b></P>
              <P>Registered on <b>{userData.registered_on}</b></P>
              <P>Registered at <b>{userData.registered_at}</b></P>
              <P>Current balance <b>{userData.balacne}</b></P>
              <P>Your Email is <b>{userData.email}</b></P>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default __Account
