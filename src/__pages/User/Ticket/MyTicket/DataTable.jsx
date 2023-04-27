import React, { Fragment, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { tableColumns } from './const';
import { useDispatch, useSelector } from 'react-redux';
import { fetch_tickets_by_user } from '../../../../redux/actions/ticket';
const moment = require("moment");

const Table = () => {

    const dispatch = useDispatch();
    const { tickets } = useSelector(state => state.ticket);
    const [ data, setData ]  = useState([]);

    let tempData = [];

    useEffect(() => {
        dispatch(fetch_tickets_by_user());
    }, []);

    useEffect(() => {
        tickets.map((ticket, index) => {
            return tempData.push({
                id: index+1,
                ticketID: ticket.ticketID,
                date_created: moment(ticket.created_date).format("yyyy.MM.DD hh:mm:ss A"),
                title: ticket.title,
                status: (<span className={`badge badge-light-${ticket.status === "Pending" ? "success" : "danger"}`}>{ticket.status}</span>),
                last_reply: ticket.replyed_date ? moment(ticket.replyed_date).format("yyyy.MM.DD hh:mm:ss A") : "",
            })
        })
        setData(tempData);
    }, [tickets])

    return (
        <Fragment>
            <DataTable
              data={data}
              columns={tableColumns}
              striped={true}
              center={false}
              pagination
              responsive={true}
            />
        </Fragment>
    )
}
export default Table
