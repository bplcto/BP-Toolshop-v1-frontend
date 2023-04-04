import React from 'react';
import { Btn } from '../../../AbstractElements';

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
    buy: <Btn attrBtn={{size: 'xs'}}><i className='fa fa-shopping-cart'></i>Buy</Btn>
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
        name: 'Buy',
        selector: row => row['buy'],
        sortable: false,
        center: true,
        width: '10%'
    },
];