import React, { Fragment } from 'react'
import { Row } from 'reactstrap';
import Filter from './Filter'
import DataTable from './DataTable'

const Methods = () => {

  return (
    <Fragment>
      <Row>
        <Filter />
        <DataTable />
      </Row>
    </Fragment>
  )
}

export default Methods;
