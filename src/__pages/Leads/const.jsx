export const tableColumns = [
    {
        name: "Country",
        selector: row => row['country'],
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: "Description",
        selector: row => row.description,
        sortable: false,
        center: false,
        width: '40%'
    },
    {
        name: "EmailN",
        selector: row => row.emailn,
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: "Seller",
        selector: row => row.seller,
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: "Price",
        selector: row => row.price,
        sortable: false,
        center: false,
        width: '5%'
    },
    {
        name: "Added on",
        selector: row => row.added_on,
        sortable: false,
        center: false,
        width: '15%'
    },
    {
        name: "Action",
        selector: row => row['action'],
        sortable: false,
        center: true,
        width: '10%'
    },
];