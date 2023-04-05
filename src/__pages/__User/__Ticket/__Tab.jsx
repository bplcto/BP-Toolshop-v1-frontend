import React, { useState, Fragment } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap"
import { MyTicket, NewTicket } from "../../../Constant"
import __MyTicket from './__MyTicket'
import __NewTicket from "./__NewTicket";

const __Tabs = () => {
  const [PrimarycolorLineTab, setPrimarycolorLineTab] = useState('my_ticket');

  return (
    <Fragment>
      <Nav className='border-tab nav-primary' tabs>
        <NavItem>
          <NavLink style={{cursor:"pointer"}} className={PrimarycolorLineTab === 'my_ticket' ? 'active' : ''} onClick={() => setPrimarycolorLineTab('my_ticket')}>
            <i className='fa fa-filter'></i>
            {MyTicket}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{cursor:"pointer"}} className={PrimarycolorLineTab === 'new_ticket' ? 'active' : ''} onClick={() => setPrimarycolorLineTab('new_ticket')}>
            <i className='fa fa-edit'></i>
            {NewTicket}
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={PrimarycolorLineTab}>
        <TabPane className='fade show' tabId='my_ticket'>
          <__MyTicket />
        </TabPane>
        <TabPane tabId='new_ticket'>
          <__NewTicket />
        </TabPane>
      </TabContent>
    </Fragment>
  )
}

export default __Tabs
