import React, { Fragment } from 'react'
import { Col, Row } from 'reactstrap'
import TicketForm from './TicketForm'

const NewTicket = () => {
  return(
    <Fragment>
      <Row className='d-flex justify-content-center'>
        <Col xl='6' lg='6' md='6' sm='12'>
          <TicketForm />
        </Col>
      </Row>
    </Fragment>
  )
}

export default NewTicket
