import React, { useState } from 'react'
import { Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { EditEmail, Filter } from '../../../Constant';
import __Filter from './__Filter';
import __EditEmail from './__EditEmail';

const __Tabs = () => {
  const [PrimarycolorLineTab, setPrimarycolorLineTab] = useState('filter');

  return (
    <Col sm='12' xl='12' className='xl-100'>
      <Nav className='border-tab nav-primary' tabs>
        <NavItem>
          <NavLink style={{cursor:"pointer"}} className={PrimarycolorLineTab === 'filter' ? 'active' : ''} onClick={() => setPrimarycolorLineTab('filter')}>
            <i className='fa fa-filter'></i>
            {Filter}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{cursor:"pointer"}} className={PrimarycolorLineTab === 'editEmail' ? 'active' : ''} onClick={() => setPrimarycolorLineTab('editEmail')}>
            <i className='fa fa-edit'></i>
            {EditEmail}
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={PrimarycolorLineTab}>
        <TabPane className='fade show' tabId='filter'>
          <__Filter />
        </TabPane>
        <TabPane tabId='editEmail'>
          <__EditEmail />
        </TabPane>
      </TabContent>
    </Col>
  )
}

export default __Tabs;
