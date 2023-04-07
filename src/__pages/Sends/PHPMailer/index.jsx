import React, { useState } from 'react'
import { Row } from 'reactstrap';
import Tabs from './Tabs';
import DataTable from './DataTable'

const PHPMailer = () => {

  return (
    <Row>
      <Tabs />
      <DataTable />
    </Row>
  )
}

export default PHPMailer;
