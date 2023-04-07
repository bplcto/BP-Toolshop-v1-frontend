import React, { useState } from "react";
import { Card, CardBody, CardHeader } from "reactstrap"
import { Ticket } from "../../../Constant"
import Tabs from "./Tab";
import { H4 } from "../../../AbstractElements";

const Ticket = () => {
  return (
    <Card>
      <CardHeader><H4><i className="fa fa-ticket"></i>{Ticket}</H4></CardHeader>
      <CardBody>
        <Tabs />
      </CardBody>
    </Card>
  )
}

export default Ticket
