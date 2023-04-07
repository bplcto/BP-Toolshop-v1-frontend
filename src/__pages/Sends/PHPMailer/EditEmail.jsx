import React from "react"
import { FormGroup, Input, InputGroup, InputGroupText, Label } from "reactstrap"
import { Change, CheckerEmail } from "../../../Constant"
import { Btn } from "../../../AbstractElements"

const EditEmail = () => {

  // const { email, setEmail } = useState('james.gaylor721@gmail.com');
  return (
    <FormGroup className=" m-formgroup">
      <Label>{CheckerEmail}</Label>
      <InputGroup>
        <Input className="form-control" type="text" placeholder="Email" />
        <InputGroupText>
          <Btn>{Change}<i className="fa fa-pencil"></i></Btn>
        </InputGroupText>
      </InputGroup>
    </FormGroup>
  )
}

export default EditEmail
