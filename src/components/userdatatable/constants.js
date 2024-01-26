export const columns = [
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "Age", selector: (row) => row.age, sortable: true },
    { name: "Sex", selector: (row) => row.sex, sortable: true },
    {
      name: "Mobile Number",
      selector: (row) => row.mobileNumber,
      sortable: true,
    },
    {
      name: "Govt Issued Id Type",
      selector: (row) => row.govtIssuedIdType,
      sortable: true,
    },
    {
      name: "Govt Issued Id",
      selector: (row) => row.govtIssuedId,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => `${row.addressline1} ${row.addressline2}`,
      sortable: true,
    },
    { name: "City", selector: (row) => row.city, sortable: true },
    { name: "State", selector: (row) => row.state, sortable: true },
    { name: "Pin Code", selector: (row) => row.pincode, sortable: true },
    { name: "Country", selector: (row) => row.country, sortable: true },
  ];