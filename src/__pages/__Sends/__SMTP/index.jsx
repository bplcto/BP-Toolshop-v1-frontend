import React, { Fragment } from 'react'
import { Card, CardBody, CardHeader, Row } from 'reactstrap';
import __Tabs from './__Tabs';
import __DataTable from './__DataTable'
import __Add from './__Add';

const __SMTP = () => {

  return (
    <Fragment>
      <Row className='pt-1'>
        <Card>
          <CardHeader>
            <__Tabs />
          </CardHeader>
          <CardBody>
            <__DataTable />
          </CardBody>
        </Card>
      </Row>
      <__Add />
    </Fragment>
  )
}

export default __SMTP;
