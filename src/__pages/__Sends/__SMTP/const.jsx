import React from 'react';
import { Badges, Btn } from '../../../AbstractElements';
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
    TestTo
} from '../../../Constant';

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
    testto: <Btn attrBtn={{size: 'xs', color: 'info'}}><i className='fa fa-paper-plane'></i>{Send}</Btn>,
    buy: <Btn attrBtn={{size: 'xs'}}><i className='fa fa-shopping-cart'></i>{Buy}</Btn>
};

export const tableColumns = [
    {
        name: `${ID}`,
        selector: row => `${row.index}`,
        sortable: false,
        center: false,
        width: '5%'
    },
    {
        name: `${Country}`,
        selector: row => row['country'],
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: `${Domain}`,
        selector: row => `${row.domain}`,
        sortable: false,
        center: false,
        width: '20%'
    },
    {
        name: `${WebMail}`,
        selector: row => `${row.webmail}`,
        sortable: false,
        center: false,
        width: '5%'
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
        width: '5%'
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
        width: '15%'
    },
    {
        name: (
            <span>{`${TestTo}`}
                <Badges attrBadge={{ 
                    className: 'badge rounded-pill', 
                    color: 'dark tag-pills-sm-mb', 
                    pill: true 
                }} >james.gaylor721@gmail.com</Badges>
            </span>
        ),
        selector: row => row['testto'],
        sortable: false,
        center: true,
        width: '15%'
    },
    {
        name: `${Buy}`,
        selector: row => row['buy'],
        sortable: false,
        center: true,
        width: '5%'
    },
];