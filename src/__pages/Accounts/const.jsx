import React from 'react';
import { Btn } from '../../AbstractElements';
import { Country, Buy, Seller, Addedon, Price, SiteName, AvailableInformation } from '../../Constant';

export const dummytabledata = 
{
    country: <span><i className="flag-icon flag-icon-us"></i>United States</span>,
    site_name: 'https://nordvpn.com',
    available_information: '✅✅🔥🔥✅nord vpn✅✅ Plan = Premium 🔥✅🔥✅',
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
        name: `${SiteName}`,
        selector: row => `${row.site_name}`,
        sortable: false,
        center: false,
        width: '20%'
    },
    {
        name: `${AvailableInformation}`,
        selector: row => `${row.available_information}`,
        sortable: false,
        center: false,
        width: '30%'
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