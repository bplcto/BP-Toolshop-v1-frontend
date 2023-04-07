import React, { Fragment } from 'react'
import DataTable from 'react-data-table-component';
import { dummytabledata, tableColumns } from './const';
import { Card } from 'reactstrap';

const DataTable = () => {
    let temp = [];

    for (let i = 0; i < 20; i++) {
        temp.push(dummytabledata);
    }

    return (
        <Fragment>
            <DataTable
                data={temp}
                columns={tableColumns}
                striped={true}
                center={false}
                pagination
                responsive={true}
                highlightOnHover
                customStyles={{
                    headCells: {
                        style: {
                            whiteSpace: 'pre',
                            justifyContent: 'center',
                            // padding: '0px'
                        }
                    },
                    cells: {
                        style: {
                            whiteSpace: 'pre!important',
                        }
                    }
                }}
                />
        </Fragment>
    )
}
export default DataTable
