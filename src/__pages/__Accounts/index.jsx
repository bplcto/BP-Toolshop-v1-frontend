import React, { Fragment } from 'react'
import { Row } from 'reactstrap';
import __Filter from './__Filter'
import __DataTable from './__DataTable'

const __Accounts = () => {

  return (
    <Fragment>
      <Row>
        <__Filter />
        <__DataTable />
      </Row>
    </Fragment>
  )
}

export default __Accounts;
