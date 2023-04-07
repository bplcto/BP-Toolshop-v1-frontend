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
            <Card className='shadow-lg shadow-showcase'>
                <DataTable
                data={temp}
                columns={tableColumns}
                striped={true}
                center={false}
                pagination
                //   responsive={true}
                highlightOnHover
                customStyles={{
                    headCells: {
                        style: {
                            whiteSpace: 'pre',
                            // padding: '0px 4px',
                        }
                    },
                    cells: {
                        style: {
                            // padding: '0px 1px!important',
                            whiteSpace: 'break-spaces!important',
                        }
                    }
                }}
                />
            </Card> 
        </Fragment>
    )
}
export default DataTable
