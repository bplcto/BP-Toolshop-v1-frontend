import React, { useState } from "react";
import { Card, CardBody, CardHeader } from "reactstrap"
import { Ticket } from "../../../Constant"
import __Tabs from "./__Tab";
import { H1 } from "../../../AbstractElements";

const __Ticket = () => {
  return (
    <Card>
      <CardHeader><H1><i className="fa fa-ticket"></i>{Ticket}</H1></CardHeader>
      <CardBody>
        <__Tabs />
      </CardBody>
    </Card>
  )
}

export default __Ticket
