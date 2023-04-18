export const tableColumns = [
    {
        name: 'ID',
        selector: row => row.id,
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: 'Country',
        selector: row => row['country'],
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: 'DetectHosting',
        selector: row => row.detect_hosting,
        sortable: false,
        center: false,
        width: '25%'
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
        width: '10%'
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
        center: false,
        width: '15%'
    }
];