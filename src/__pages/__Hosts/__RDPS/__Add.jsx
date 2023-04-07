import React, { Fragment, useState } from 'react'
import { Btn } from '../../../AbstractElements'
import { addBtnStyle } from '../../../assets/additionalStyle'
import CommonModal from '../../../Components/UiKits/Modals/common/modal';
import { Form, FormGroup, Input, Label } from 'reactstrap';

function __Add() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <Fragment>
      <Btn attrBtn={{className: "shadow-sm shadow-showcase", style : addBtnStyle, onClick: toggle}}>Add</Btn>
      <CommonModal isOpen={modal} title="Add Something..." toggler={toggle} >
        <Form>
          <FormGroup>
            <Label></Label>
            <Input></Input>
          </FormGroup>
        </Form>
      </CommonModal>
    </Fragment>
  )
}

export default __Add
