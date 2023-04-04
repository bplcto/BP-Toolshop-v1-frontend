import React from 'react';
import { Btn } from '../../../AbstractElements';

export const dummytabledata = 
{
    // id: 1,
    country: <span><i className="flag-icon flag-icon-us"></i>United States</span>,
    ip: '54.234.225.94',
    windows: '2022',
    ram: '16 GB ✅✅🔥🔥Fresh/ ✅✅🔥🔥 Speed/ ✅✅🔥🔥 Clean ✅✅🔥🔥 / ✅✅🔥🔥 Chrome Instaled✅✅🔥🔥',
    access: 'user',
    user: ' temp user',
    detect_hosting: 'Amazon',
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
        name: 'IP',
        selector: row => `${row.ip}`,
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: 'Windows',
        selector: row => `${row.windows}`,
        sortable: false,
        center: false,
        width: '7%'
    },
    {
        name: 'RAM',
        selector: row => `${row.ram}`,
        sortable: false,
        center: false,
        width: '20%'
    },
    {
        name: 'Access',
        selector: row => row.access,
        sortable: false,
        center: false,
        width: '5%'
    },
    {
        name: 'User',
        selector: row => `${row.user}`,
        sortable: false,
        center: false,
        width: '5%'
    },
    {
        name: 'Detect Hosting',
        selector: row => row.detect_hosting,
        sortable: false,
        center: false,
        width: '8%'
    },
    {
        name: 'Seller',
        selector: row => row.seller,
        sortable: false,
        center: false,
        width: '5%'
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
        width: '13%'
    },
    {
        name: 'Buy',
        selector: row => row['buy'],
        sortable: false,
        center: true,
        width: '7%'
    },
];