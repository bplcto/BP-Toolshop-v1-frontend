import React, { useState } from "react"
import { FormGroup, Input, InputGroup, InputGroupText, Label } from "reactstrap"
import { Change, CheckerEmail } from "../../../Constant"
import { Btn } from "../../../AbstractElements"

const __EditEmail = () => {

  const { email, setEmail } = useState('james.gaylor721@gmail.com');
  return (
    <FormGroup className=" m-form__group">
      <Label>{CheckerEmail}</Label>
      <InputGroup>
        <Input className="form-control" type="text" placeholder="Email" value={email} />
        <InputGroupText>
          <Btn>{Change}<i className="fa fa-pencil"></i></Btn>
        </InputGroupText>
      </InputGroup>
    </FormGroup>
  )
}

export default __EditEmail
