import React, { useState } from "react";
import { Card, CardBody, CardHeader } from "reactstrap"
import { Ticket } from "../../../Constant"
import __Tabs from "./__Tab";
import { H4 } from "../../../AbstractElements";

const __Ticket = () => {
  return (
    <Card>
      <CardHeader><H4><i className="fa fa-ticket"></i>{Ticket}</H4></CardHeader>
      <CardBody>
        <__Tabs />
      </CardBody>
    </Card>
  )
}

export default __Ticket
