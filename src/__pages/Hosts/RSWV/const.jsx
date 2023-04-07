import React from 'react';
import { Btn } from '../../../AbstractElements';
import { ButtonGroup } from 'reactstrap';
import { Buy, Send } from '../../../Constant';

export const dummytabledata = 
{
    // id: 1,
    country: <span><i className="flag-icon flag-icon-us"></i>United States</span>,
    login: 'adminadmin',
    information: 'Fresh fast ssh',
    ram: '64gb',
    detect_hosting: 'Microsoft Azure Cloud',
    seller: 'seller20',
    price: '$ 10',
    added_on: "2023/04/03 02:14:52 PM",
    action: <div className="btn-group-showcase">
                <ButtonGroup className='btn-group-pill' style={{ display: 'contents' }}>
                    <Btn attrBtn={{  size: 'sm', className: 'p-1', color: 'success', outline: false }} >{Send}</Btn>
                    <Btn attrBtn={{  size: 'sm', className: 'p-1', color: 'info', outline: false }} >{Buy}</Btn>
                </ButtonGroup>
            </div>,
};

export const tableColumns = [
    {
        name: 'Country',
        selector: row => row['country'],
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: 'Login',
        selector: row => `${row.login}`,
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: 'Information',
        selector: row => `${row.information}`,
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: 'RAM',
        selector: row => `${row.ram}`,
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: 'Detect Hosting',
        selector: row => row.detect_hosting,
        sortable: false,
        center: false,
        width: '15%'
    },
    {
        name: 'Seller',
        selector: row => row.seller,
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: 'Price',
        selector: row => row.price,
        sortable: false,
        center: false,
        width: '5%'
    },
    {
        name: 'Added on',
        selector: row => row.added_on,
        sortable: false,
        center: false,
        width: '20%'
    },
    {
        name: 'Action',
        selector: row => row['action'],
        sortable: false,
        center: true,
        width: '10%'
    },
];