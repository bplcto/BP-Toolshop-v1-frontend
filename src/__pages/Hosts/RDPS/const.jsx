export const tableColumns = [
  {
    name: "Country",
    selector: (row) => row["country"],
    sortable: true,
    center: false,
    width: "7%",
  },
  {
    name: "IP",
    selector: (row) => `${row.ip}`,
    sortable: true,
    center: false,
    width: "10%",
  },
  {
    name: "Windows",
    selector: (row) => `${row.windows}`,
    sortable: true,
    center: false,
    width: "10%",
  },
  {
    name: "RAM",
    selector: (row) => `${row.ram}`,
    sortable: true,
    center: false,
    width: "10%",
  },
  {
    name: "Access",
    selector: (row) => row.access,
    sortable: true,
    center: false,
    width: "7%",
  },
  {
    name: "User",
    selector: (row) => `${row.user}`,
    sortable: true,
    center: false,
    width: "10%",
  },
  {
    name: "Detect Hosting",
    selector: (row) => row.detect_hosting,
    sortable: true,
    center: false,
    width: "10%",
  },
  {
    name: "Seller",
    selector: (row) => row.seller,
    sortable: true,
    center: false,
    width: "10%",
  },
  {
    name: "Price",
    selector: (row) => row.price,
    sortable: true,
    center: false,
    width: "6%",
  },
  {
    name: "Added on",
    selector: (row) => row.added_on,
    sortable: true,
    center: false,
    width: "12%",
  },
  {
    name: "Action",
    selector: (row) => row["action"],
    sortable: true,
    center: true,
    width: "8%",
  },
];