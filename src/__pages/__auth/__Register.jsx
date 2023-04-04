import React from "react"
import { Container, Row, Col, TabContent, TabPane } from 'reactstrap';
import __RegisterForm from "./__RegisterForm"

const __Register = () => {
  return (
    <Container fluid={true} className='p-0 login-page'>
      <Row>
        <Col xs='12'>
          <div className='login-card'>
            <div className='login-main login-tab'>
              <__RegisterForm />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default __Register
