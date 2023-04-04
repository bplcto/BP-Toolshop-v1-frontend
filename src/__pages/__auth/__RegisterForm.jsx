import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom'
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Btn, H4, P } from '../../AbstractElements';

import { 
  ConfirmPassword,
  EmailAddress, 
  Login, 
  Password, 
  REGISTER, 
  Username,  
} from '../../Constant';


import { useNavigate } from 'react-router-dom';

const __RegisterForm = () => {
  const [email, setEmail] = useState('test@gmail.com');
  const [password, setPassword] = useState('test123');
  const [userName, setUserName] = useState('test');
  
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);

  const history = useNavigate();

  return (
    <Fragment>
      <Form className='theme-form'>
        <H4 attrH4={{ className: 'text-center' }}>
          <i className="fa fa-shopping-cart"></i>&nbsp;
          bpltoolshop - Register
        </H4>
        <FormGroup>
          <Label className='col-form-label'>{Username}</Label>
          <Input 
            className='form-control' 
            type='text' 
            onChange={(e) => setUserName(e.target.value)} 
            value={userName} 
            />
        </FormGroup>
        <FormGroup>
          <Label className='col-form-label'>{EmailAddress}</Label>
          <Input 
            className='form-control' 
            type='email' 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
            />
        </FormGroup>
        <FormGroup className='position-relative'>
          <Label className='col-form-label'>{Password}</Label>
          <div className='position-relative'>
            <Input 
              className='form-control' 
              type={togglePassword ? 'text' : 'password'} 
              onChange={(e) => setPassword(e.target.value)} 
              value={password} 
              />
            <div className='show-hide' onClick={() => setTogglePassword(!togglePassword)}>
              {togglePassword ? <i className='fa fa fa-eye-slash'></i> : <i className='fa fa-eye'></i>}
            </div>
          </div>
        </FormGroup>
        <FormGroup className='position-relative'>
          <Label className='col-form-label'>{ConfirmPassword}</Label>
          <div className='position-relative'>
            <Input 
              className='form-control' 
              type={toggleConfirmPassword ? 'text' : 'password'} 
              onChange={(e) => setPassword(e.target.value)} 
              value={password} 
              />
            <div className='show-hide' onClick={() => setToggleConfirmPassword(!toggleConfirmPassword)}>
              {toggleConfirmPassword ? <i className='fa fa fa-eye-slash'></i> : <i className='fa fa-eye'></i>}
            </div>
          </div>
        </FormGroup>
        <div className='position-relative form-group mb-0'>
          <Btn attrBtn={{ 
            color: 'primary', 
            className: 'd-block w-100 mt-2', 
            onClick: (e) => {history('/login')}
          }}>{REGISTER}</Btn>
        </div>
        <P attrPara={{ className: 'text-center mb-0 mt-4' }}>
          Already have account:&nbsp;
          <Link className='ms-2' to='/login'>
            {Login}
          </Link>
        </P>
      </Form>
    </Fragment>
  );
};

export default __RegisterForm;
