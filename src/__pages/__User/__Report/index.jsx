import React from 'react'
import { Fragment } from 'react'
import __DataTable from './__DataTable'
import { Card, CardBody, CardHeader } from 'reactstrap'
import { H1 } from '../../../AbstractElements'

const __Report = () => {
  return (
    <Fragment>
      <Card>
        <CardHeader>
          <H1><i className='fa fa-bug'></i>Reports</H1>
        </CardHeader>
        <CardBody>
          <__DataTable />
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default __Report
