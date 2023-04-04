import React, { Fragment, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Btn, H4, P } from '../../AbstractElements';

import { 
  EmailAddress, 
  ForgotPassword, 
  LOGIN,
  Password, 
  RememberPassword,  
} from '../../Constant';

import { useNavigate } from 'react-router-dom';
import CustomizerContext from '../../_helper/Customizer';

const __LoginForm = () => {
  const [email, setEmail] = useState('test@gmail.com');
  const [password, setPassword] = useState('test123');
  const [togglePassword, setTogglePassword] = useState(false);
  
  const history = useNavigate();

  return (
    <Fragment>
      <Form className='theme-form'>
        <H4 attrH4={{ className: 'text-center' }}>
          <i className="fa fa-shopping-cart"></i>&nbsp;
          bpltoolshop - Login
        </H4>
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
          <div className='checkbox'>
            <Input id='checkbox1' type='checkbox' />
            <Label className='text-muted' for='checkbox1'>
            {RememberPassword}
            </Label>
          </div>
          <Link className='link' to='/forget_password'>
            {ForgotPassword}
          </Link>
        </FormGroup>
        <FormGroup>
          <Btn attrBtn={{ 
            color: 'primary', 
            className: 'd-block w-100 mt-2', 
            onClick: (e) => {history('/dashboard')} 
          }}>{LOGIN}</Btn>
        </FormGroup>
        <P attrPara={{ className: 'text-center mb-0 mt-4' }}>
          Don't have account?
          <Link className='ms-2' to='/register'>
            Create Account
          </Link>
        </P>
      </Form>
    </Fragment>
  );
};

export default __LoginForm;
