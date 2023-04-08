import React from 'react';
import { Btn } from '../../../AbstractElements';
import { 
    Addedon, 
    Action,
    Country, 
    DetectHosting, 
    Price, 
    Seller, 
    ID,
} from '../../../Constant';
import { ButtonGroup } from 'reactstrap';

export const dummytabledata = 
{
    index: 1,
    country: <span><i className="flag-icon flag-icon-us"></i>United States</span>,
    detect_hosting: 'GoDaddy.com, LLC',
    seller: 'seller20',
    price: '$ 10',
    added_on: "2023/04/03 02:14:52 PM",
    action: <div className="btn-group-showcase">
                <ButtonGroup className='btn-group-pill' style={{ display: 'contents' }}>
                    <Btn attrBtn={{  size: 'sm', className: 'p-2', color: 'success', outline: true }} ><i className="fa fa-paper-plane-o"></i></Btn>
                    <Btn attrBtn={{  size: 'sm', className: 'p-2', color: 'info', outline: true }} ><i className="fa fa-shopping-cart"></i></Btn>
                </ButtonGroup>
            </div>,
};

export const tableColumns = [
    {
        name: `${ID}`,
        selector: row => `${row.index}`,
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: `${Country}`,
        selector: row => row['country'],
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: `${DetectHosting}`,
        selector: row => row.detect_hosting,
        sortable: false,
        center: false,
        width: '25%'
    },
    {
        name: `${Seller}`,
        selector: row => row.seller,
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: `${Price}`,
        selector: row => row.price,
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: `${Addedon}`,
        selector: row => row.added_on,
        sortable: false,
        center: false,
        width: '20%'
    },
    {
        name: `${Action}`,
        selector: row => row['action'],
        sortable: false,
        center: false,
        width: '15%'
    }
];