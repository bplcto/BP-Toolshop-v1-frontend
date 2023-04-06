import React, { Fragment } from 'react'
import { Col, Row } from 'reactstrap'
import __EditAccountForm from './__EditAccountForm'

const __EditAccount = () => {
  return (
    <Fragment>
      <Row className='d-flex justify-content-center'>
        <Col xl='6' lg='6' md='6' sm='12'>
          <__EditAccountForm />
        </Col>
      </Row>
    </Fragment>
  )
}

export default __EditAccount
