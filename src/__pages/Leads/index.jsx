import React, { Fragment } from 'react'
import { Row } from 'reactstrap';
import Filter from './Filter'
import DataTable from './DataTable'
import Add from './Add';

const Leads = () => {

  return (
    <Fragment>
      <Row>
        <Filter />
        <DataTable />
      </Row>
    </Fragment>
  )
}

export default Leads;
