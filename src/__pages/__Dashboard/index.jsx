import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';

import __Greeting from './__Greeting';
import __News from './__News';
import __Donut from './__Donut';

const __Dashboard = () => {

  return (
    <Fragment>
      <Container fluid={true} className='jkanban-container p-2'>
        <Row>
          <Col xs='12' md='12' lg='6'>
            <__Greeting />
          </Col>
          <Col xs='12' md='12' lg='6'>
            <__Donut />
          </Col>
        </Row>
        <Row>
          <Col xs='12' md='12' lg='6'>
            <__News />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default __Dashboard
