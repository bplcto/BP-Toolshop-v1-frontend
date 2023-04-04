import React, { Fragment } from 'react';
import __DataTable from './__DataTable';
import __Filter from './__Filter';

const __Shell = () => {
  return(
    <Fragment>
      <__Filter />
      <__DataTable />
    </Fragment>
  )
}

export default __Shell
