import React from 'react';
import { Btn } from '../../AbstractElements';
import { Country, Description, EmailN, Buy, Seller, Addedon, Price } from '../../Constant';

export const dummytabledata = 
{
    country: <span><i className="flag-icon flag-icon-us"></i>United States</span>,
    description: '✔️ DATABASE Singapour - 2K23✔️ - 20K✔️ - FULL DATA ✔️ https://prnt.sc/MhUol36zyd-k',
    emailn: '20K',
    seller: 'seller20',
    price: '$ 10',
    added_on: "2023/04/03 02:14:52 PM",
    buy: <Btn attrBtn={{size: 'xs'}}><i className='fa fa-shopping-cart'></i>{Buy}</Btn>
};

export const tableColumns = [
    {
        name: `${Country}`,
        selector: row => row['country'],
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: `${Description}`,
        selector: row => `${row.description}`,
        sortable: false,
        center: false,
        width: '40%'
    },
    {
        name: `${EmailN}`,
        selector: row => `${row.emailn}`,
        sortable: false,
        center: false,
        width: '10%'
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
        width: '5%'
    },
    {
        name: `${Addedon}`,
        selector: row => row.added_on,
        sortable: false,
        center: false,
        width: '20%'
    },
    {
        name: `${Buy}`,
        selector: row => row['buy'],
        sortable: false,
        center: true,
        width: '5%'
    },
];