import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Btn, H4, H6, P } from '../../AbstractElements';
import { Login } from '../../Constant';

const ForgetPwd = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  return (
    <Fragment>
      <section>
        <Container className='p-0 login-page' fluid={true}>
          <Row className='m-0'>
            <Col className='p-0'>
              <div className='login-card'>
                <div>
                  <div className='login-main'>
                    <Form className='theme-form login-form'>
                      <H4>Reset Your Password</H4>
                      <FormGroup>
                        <Label className='m-0 col-form-label'>Enter Your Mobile Number</Label>
                        <Row>
                          <Col xs='4' sm='3'>
                            <Input className='form-control' type='text' value='+ 91' />
                          </Col>
                          <Col xs='8' sm='9'>
                            <Input className='form-control' type='tel' value='000-000-0000' />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup className='text-end'>
                        <Btn attrBtn={{ className: 'btn-block ', color: 'primary', type: 'submit' }}>Send</Btn>
                      </FormGroup>
                      <FormGroup className='mb-4 mt-4'>
                        <span className='reset-password-link'>
                          If don't receive OTP?  
                          <a className='btn-link text-danger' href='#javascript'>
                            Resend
                          </a>
                        </span>
                      </FormGroup>
                      <FormGroup>
                        <Label>Enter OTP</Label>
                        <Row>
                          <Col>
                            <Input className='form-control text-center opt-text' type='text' value='00' maxlength='2' />
                          </Col>
                          <Col>
                            <Input className='form-control text-center opt-text' type='text' value='00' maxlength='2' />
                          </Col>
                          <Col>
                            <Input className='form-control text-center opt-text' type='text' value='00' maxlength='2' />
                          </Col>
                        </Row>
                      </FormGroup>
                      <H6 attrH6={{ className: 'mt-4' }}>Create Your Password</H6>
                      <FormGroup className='position-relative'>
                        <Label className='col-form-label m-0'>New Password</Label>
                        <div className='position-relative'>
                          <Input className='form-control' type={togglePassword ? 'text' : 'password'} name='login[password]' required placeholder='*********' />
                          <div className='show-hide' onClick={() => setTogglePassword(!togglePassword)}>
                            {togglePassword ? <i className='fa fa fa-eye-slash'></i> : <i className='fa fa-eye'></i>}
                          </div>
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Label className='col-form-label m-0'>Retype Password</Label>
                        <Input className='form-control' type='password' name='login[password]' required='' placeholder='*********' />
                      </FormGroup>
                      <FormGroup>
                        <div className='checkbox'>
                          <Input id='checkbox1' type='checkbox' />
                          <Label className='text-muted' for='checkbox1'>
                            Remember password
                          </Label>
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Btn attrBtn={{ color: 'primary', className: 'btn d-block w-100', type: 'submit' }}>Done</Btn>
                      </FormGroup>                      
                      <P attrPara={{ className: 'text-center mb-0 mt-4' }}>
                        Already have an password?
                        <Link className='ms-2' to='/login'>
                          {Login}
                        </Link>
                      </P>
                    </Form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default ForgetPwd;