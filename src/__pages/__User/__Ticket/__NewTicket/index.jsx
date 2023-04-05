import React, { Fragment } from 'react'
import { Col, Row } from 'reactstrap'
import __TicketForm from './__TicketForm'

const __NewTicket = () => {
  return(
    <Fragment>
      <Row>
        <Col xl='6' lg='6' md='6' sm='12'>
          <__TicketForm />
        </Col>
        <Col xl='6' lg='6' md='6' sm='12'></Col>
      </Row>
    </Fragment>
  )
}

export default __NewTicket
