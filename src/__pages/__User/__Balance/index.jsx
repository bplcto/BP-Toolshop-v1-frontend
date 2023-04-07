import React, { Fragment } from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { H2 } from '../../../AbstractElements'
import __Help from './__Help'
import __AddBalance from './__AddBalance'

const __Balance = () => {
  return (
    <Fragment>
      <Row>
        <Col>
          <Card>
            <CardHeader><H2>Add Balance</H2></CardHeader>
            <CardBody>
              <Row>
                <Col xl='6' lg='6' sm='6' xs='6'>
                  <__AddBalance />
                </Col>
                <Col xl='6' lg='6' sm='6' xs='6'>
                  <__Help />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default __Balance
