import React from 'react'
import { Fragment } from 'react'
import __DataTable from './__DataTable'
import { Card, CardBody, CardHeader } from 'reactstrap'
import { H4 } from '../../../AbstractElements'

const __Order = () => {
  return (
    <Fragment>
      <Card>
        <CardHeader>
          <H4><i className='fa fa-shopping-cart'></i>My Order</H4>
        </CardHeader>
        <CardBody>
          <__DataTable />
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default __Order
