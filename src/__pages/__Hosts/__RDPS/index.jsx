import React, { Fragment } from 'react';
import __DataTable from './__DataTable';
import __Filter from './__Filter';
import { Card, CardBody, CardHeader, Row } from 'reactstrap';
import __Add from './__Add';

const __RDPS = () => {
  return(
    <Fragment>
      <Row className='pt-1'>
        <Card>
          <CardHeader>
            <__Filter />
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

export default __RDPS
