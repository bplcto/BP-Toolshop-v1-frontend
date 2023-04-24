import React, { Fragment } from 'react'
import DataTable from 'react-data-table-component';
import { tableColumns } from './const';

const Table = () => {
    let temp = [
        {
            index: 1,
            type: "Test Type",
            item: "test item",
            open_view: 'test view',
            price: '$ 10',
            seller: 'seller1',
            report: 'Peding',
            date: "2023/04/03 02:14:52 PM",
        }
    ];

    return (
        <Fragment>
            <DataTable
              data={temp}
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
