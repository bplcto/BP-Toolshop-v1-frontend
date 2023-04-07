import React from 'react';
import { Btn } from '../../../AbstractElements';
import { 
    Addedon, 
    Buy, 
    Check, 
    Checker, 
    Country, 
    DetectHosting, 
    Price, 
    SSL, 
    Seller, 
    TLD 
} from '../../../Constant';
import { ButtonGroup } from 'reactstrap';

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
    action: <div className="btn-group-showcase">
                <ButtonGroup className='btn-group-pill' style={{ display: 'contents' }}>
                    <Btn attrBtn={{  size: 'sm', className: 'p-1', color: 'success', outline: false }} >{Check}</Btn>
                    <Btn attrBtn={{  size: 'sm', className: 'p-1', color: 'info', outline: false }} >{Buy}</Btn>
                </ButtonGroup>
            </div>,
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
        width: '20%'
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
        name: `${Buy}`,
        selector: row => row['buy'],
        sortable: false,
        center: true,
        width: '10%'
    },
];