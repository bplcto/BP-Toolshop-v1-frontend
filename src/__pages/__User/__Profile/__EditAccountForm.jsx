import React, { Fragment, useState } from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'
import { CurrentPassword, EmailAddress, NewPassword, UpdateInformation } from '../../../Constant'
import { Btn } from '../../../AbstractElements';

const __EditAccountForm = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    old_password: '',
  });

  const { email, password, old_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <Fragment>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label className='col-form-label'><i className="fa fa-key"></i>{CurrentPassword}</Label>
          <Input 
            className='form-control' 
            type='password' 
            name='old_password'
            onChange={onChange} 
            value={old_password} 
            required
            />
        </FormGroup>
        <FormGroup>
          <Label className='col-form-label'><i className="fa fa-key"></i>{NewPassword}</Label>
          <Input 
            className='form-control' 
            type='password' 
            name='password'
            onChange={onChange} 
            value={password} 
            required
            />
        </FormGroup>
        <FormGroup>
          <Label className='col-form-label'><i className="fa fa-envelope"></i>{EmailAddress}</Label>
          <Input 
            className='form-control' 
            type='email' 
            name='email'
            onChange={onChange} 
            value={email} 
            required
            />
        </FormGroup>
        <FormGroup>
          <Btn attrBtn={{ color:'primary' }}>{UpdateInformation}</Btn>
        </FormGroup>
      </Form>
    </Fragment>
  )
}

export default __EditAccountForm
