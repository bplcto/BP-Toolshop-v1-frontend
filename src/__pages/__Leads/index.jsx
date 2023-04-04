import React, { useState } from 'react'
import { Row } from 'reactstrap';
import __Filter from './__Filter'
import __DataTable from './__DataTable'

const __Leads = () => {

  return (
    <Row>
      <__Filter />
      <__DataTable />
    </Row>
  )
}

export default __Leads;
