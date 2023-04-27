export const tableColumns = [
    {
        name: "ID",
        selector: row => row.id,
        sortable: true,
        center: false,
        width: '10%'
    },
    {
        name: "Title",
        selector: row => row.title,
        sortable: true,
        center: false,
        width: '30%'
    },
    {
        name: "Ticket ID",
        selector: row => row.ticketID,
        sortable: true,
        center: false,
        width: '10%'
    },
    {
        name: "DateCreated",
        selector: row => row.date_created,
        sortable: true,
        center: false,
        width: '20%'
    },
    {
        name: "Status",
        selector: row => row.status,
        sortable: true,
        center: false,
        width: '10%'
    },
    {
        name: "LastReply",
        selector: row => row.last_reply,
        sortable: true,
        center: false,
        width: '20%'
    },
];