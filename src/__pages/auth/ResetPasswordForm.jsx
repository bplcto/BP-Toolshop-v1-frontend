import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Btn, H4, P } from '../../AbstractElements';
import { Link, useParams } from 'react-router-dom';

import { 
  ConfirmPassword,
  Password, 
} from '../../Constant';

import { ToastContainer, toast } from 'react-toastify';
import { reset_password } from './../../redux/actions/user';

const ResetPasswordForm = () => {
  const dispatch = useDispatch();
  const { token } = useParams();
  
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { password, confirmPassword } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const isMatched = password === confirmPassword;
    if (isMatched) {
      const data = {
        password,
        token,
      }
      dispatch(reset_password(data));
    } else {
      toast.error("Password does not match!");
    }
  };

  return (
    <Fragment>
      <ToastContainer />
      <Form className='theme-form' onSubmit={onSubmit}>
        <H4 attrH4={{ className: 'text-center' }}>
          <i className="fa fa-shopping-cart"></i>&nbsp;
          bpltoolshop - Reset Password
        </H4>
        <FormGroup className='position-relative'>
          <Label className='col-form-label'>{Password}</Label>
          <div className='position-relative'>
            <Input 
              className='form-control' 
              type={togglePassword ? 'text' : 'password'} 
              name='password'
              value={password}
              onChange={onChange}
              required
              minLength={6}
              />
            <div className='show-hide text-black' onClick={() => setTogglePassword(!togglePassword)}>
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
              name='confirmPassword'
              onChange={onChange}
              value={confirmPassword} 
              required
              />
            <div className='show-hide text-black' onClick={() => setToggleConfirmPassword(!toggleConfirmPassword)}>
              {toggleConfirmPassword ? <i className='fa fa fa-eye-slash'></i> : <i className='fa fa-eye'></i>}
            </div>
          </div>
        </FormGroup>
        <div className='position-relative form-group mb-0'>
          <Btn attrBtn={{ 
            color: 'primary', 
            className: 'd-block w-100 mt-5'
          }}>Done</Btn>
        </div>
        <P attrPara={{ className: 'text-center mb-0 mt-4' }}>
          Login here:&nbsp;
          <Link className='ms-2' to='/login'>
            Login
          </Link>
        </P>
      </Form>
    </Fragment>
  );
};

export default ResetPasswordForm;
