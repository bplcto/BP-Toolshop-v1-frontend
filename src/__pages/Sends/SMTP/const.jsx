import React from 'react';
import { Btn } from '../../../AbstractElements';
import { 
    Addedon, 
    Buy,  
    Country, 
    DetectHosting, 
    Domain, 
    Price, 
    Seller, 
    Send,
    ID,
    WebMail,
    Action
} from '../../../Constant';
import { ButtonGroup } from 'reactstrap';

export const dummytabledata = 
{
    index: 1,
    country: <span><i className="flag-icon flag-icon-us"></i>United States</span>,
    domain: 'humaninospireorganisation.org',
    webmail: 'Yes',
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
        sortable: true,
        
        width: '5%'
    },
    {
        name: `${Country}`,
        selector: row => row['country'],
        sortable: true,
        
        width: '10%'
    },
    {
        name: `${Domain}`,
        selector: row => `${row.domain}`,
        sortable: true,
        
        width: '20%'
    },
    {
        name: `${WebMail}`,
        selector: row => `${row.webmail}`,
        sortable: true,
        
        width: '10%'
    },
    {
        name: `${DetectHosting}`,
        selector: row => row.detect_hosting,
        sortable: true,
        
        width: '15%'
    },
    {
        name: `${Seller}`,
        selector: row => row.seller,
        sortable: true,
        
        width: '6%'
    },
    {
        name: `${Price}`,
        selector: row => row.price,
        sortable: true,
        
        width: '6%'
    },
    {
        name: `${Addedon}`,
        selector: row => row.added_on,
        sortable: true,
        
        width: '15%'
    },
    {
        name: `${Action}`,
        selector: row => row['action'],
        sortable: true,
        
        width: '8%'
    },
];