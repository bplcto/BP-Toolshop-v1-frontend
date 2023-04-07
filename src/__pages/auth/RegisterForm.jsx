import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
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

import { register } from '../../redux/actions/auth';

import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {

  const dispatch = useDispatch();
  
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { name, email, password, confirmPassword } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const {
    // register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("hello");
    if (data !== '') {
      dispatch(register({name, email, password}));
    } else {
      errors.showMessages();
    }
  };

  return (
    <Fragment>
      {/* handleSubmit(onSubmit) */}
      {/* was-validated */}
      <Form className='theme-form' onSubmit={handleSubmit(onSubmit)}>
        <H4 attrH4={{ className: 'text-center' }}>
          <i className="fa fa-shopping-cart"></i>&nbsp;
          bpltoolshop - Register
        </H4>
        <FormGroup>
          <Label className='col-form-label'>{Username}</Label>
          <Input 
            className='form-control' 
            type='text' 
            name='name'
            required
            onChange={onChange} 
            value={name} 
            />
          {/* <div className="invalid-feedback">{"Please input name"}</div> */}
        </FormGroup>
        <FormGroup>
          <Label className='col-form-label'>{EmailAddress}</Label>
          <Input 
            className='form-control' 
            type='email' 
            name='email'
            onChange={onChange}
            value={email} 
            required
            />
          {/* <div className="invalid-feedback">{"Please input email or valid email"}</div> */}
        </FormGroup>
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
            {/* <div className="invalid-feedback">{"Please input at least 6 characters"}</div> */}
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
              name='confirmPassword'
              onChange={onChange}
              value={confirmPassword} 
              required
              />
            <div className='show-hide' onClick={() => setToggleConfirmPassword(!toggleConfirmPassword)}>
              {toggleConfirmPassword ? <i className='fa fa fa-eye-slash'></i> : <i className='fa fa-eye'></i>}
            </div>
            {/* <div className="invalid-feedback">{"Please input at least 6 characters"}</div> */}
          </div>
        </FormGroup>
        <div className='position-relative form-group mb-0'>
          <Btn attrBtn={{ 
            color: 'primary', 
            className: 'd-block w-100 mt-2'
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

export default RegisterForm;
