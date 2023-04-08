import React from 'react';
import { Btn } from '../../../AbstractElements';
import { Country, Description, Buy, Seller, Addedon, Price, Action, } from '../../../Constant';
import { ButtonGroup } from 'reactstrap';

export const dummytabledata = 
{
    country: <span><i className="flag-icon flag-icon-us"></i>United States</span>,
    description: 'FRESHLY CHECKS PICTURE ✅✅ MAR/2023 UNITED BANK (BUSINESS LOG)',
    seller: 'seller20',
    price: '$ 10',
    added_on: "2023/04/03 02:14:52 PM",
    action: <div className="btn-group-showcase">
                <ButtonGroup className='btn-group-pill' style={{ display: 'contents' }}>
                    <Btn attrBtn={{  size: 'sm', className: 'p-2', color: 'success', outline: true }} ><i className="fa fa-edit"></i></Btn>
                    <Btn attrBtn={{  size: 'sm', className: 'p-2', color: 'info', outline: true }} ><i className="fa fa-shopping-cart"></i></Btn>
                </ButtonGroup>
            </div>,
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
        width: '50%'
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
        width: '15%'
    },
    {
        name: `${Action}`,
        selector: row => row['action'],
        sortable: false,
        center: true,
        width: '15%'
    },
];