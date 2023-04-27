import React, { Fragment, useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Message, SubmitTicket, Title } from '../../../../Constant'
import { place_ticket } from '../../../../redux/actions/ticket'
import { useDispatch, useSelector } from 'react-redux'

const TicketForm = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.ticket);

  const [ ticketData, setTicketData ] = useState({
    title: '',
    message: '',
  });

  const onChange = (e) => {
    setTicketData({ ...ticketData, [e.target.name]: e.target.value} );
  }

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(place_ticket(ticketData));
    setTicketData({
      title: '',
      message: ''
    })
  }

  return(
    <Fragment>
      <Form onSubmit={onSubmit}>
        <Row>
          <Col lg='12'>
            <FormGroup>
              <Label>{Title}</Label>
              <Input className="form-control" valid={ticketData.title} invalid={!ticketData.title} type='text' required name='title' value={ticketData.title} onChange={onChange} placeholder={Title} />
            </FormGroup>
          </Col>
          <Col lg='12'>
            <FormGroup>
              <Label>{Message}</Label>
              <Input className="form-control" valid={ticketData.message} invalid={!ticketData.message} type='textarea' required name='message' value={ticketData.message} onChange={onChange} rows="10" placeholder={Message} />
            </FormGroup>
          </Col>
          <Col lg='12' className='d-flex justify-content-end'>
            <FormGroup>
              <Button disabled={loading}><i className='fa fa-paper-plane'></i>&nbsp;{SubmitTicket}</Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Fragment>
  )
}

export default TicketForm
