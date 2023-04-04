import React from 'react';
import { Btn } from '../../../AbstractElements';
import { 
    Addedon, 
    Buy, 
    Check, 
    Checker, 
    Country, 
    DetectHosting, 
    Domain, 
    Price, 
    SSL, 
    Seller, 
    TLD 
} from '../../../Constant';

export const dummytabledata = 
{
    // id: 1,
    country: <span><i className="flag-icon flag-icon-us"></i>United States</span>,
    tld: '.org',
    ssl: <span className='text-success'><i className='fa fa-lock'>https</i></span>,
    detect_hosting: 'GoDaddy.com, LLC',
    seller: 'seller20',
    price: '$ 10',
    added_on: "2023/04/03 02:14:52 PM",
    checker: <Btn attrBtn={{size: 'xs', color: 'info'}}><i className='fa fa-eye'></i>{Check}</Btn>,
    buy: <Btn attrBtn={{size: 'xs'}}><i className='fa fa-shopping-cart'></i>{Buy}</Btn>
};

export const tableColumns = [
    {
        name: `${Country}`,
        selector: row => row['country'],
        sortable: false,
        center: false,
        width: '15%'
    },
    {
        name: `${TLD}`,
        selector: row => `${row.tld}`,
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: `${SSL}`,
        selector: row => row['ssl'],
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: `${DetectHosting}`,
        selector: row => row.detect_hosting,
        sortable: false,
        center: false,
        width: '15%'
    },
    {
        name: `${Seller}`,
        selector: row => row.seller,
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: `${Addedon}`,
        selector: row => row.added_on,
        sortable: false,
        center: false,
        width: '15%'
    },
    {
        name: `${Price}`,
        selector: row => row.price,
        sortable: false,
        center: false,
        width: '5%'
    },
    {
        name: `${Checker}`,
        selector: row => row['checker'],
        sortable: false,
        center: true,
        width: '7%'
    },
    {
        name: `${Buy}`,
        selector: row => row['buy'],
        sortable: false,
        center: true,
        width: '8%'
    },
];