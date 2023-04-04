import React, { Fragment } from 'react'
import { Row } from 'reactstrap';
import __Tabs from './__Tabs';
import __DataTable from './__DataTable'

const __SMTP = () => {

  return (
    <Fragment>
      <Row>
        <__Tabs />
        <__DataTable />
      </Row>
    </Fragment>
  )
}

export default __SMTP;
