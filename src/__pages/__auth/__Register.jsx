import React, { Fragment } from "react"
import { Container, Row, Col } from 'reactstrap';
import __RegisterForm from "./__RegisterForm"

const __Register = () => {
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default __Register
