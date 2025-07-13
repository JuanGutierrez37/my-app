export const dataset = [
  {
    month: "January",
    data: 65
  },
  {
    month: "February",
    data: 59
  },
  {
    month: "March",
    data: 80
  },
  {
    month: "April",
    data: 81
  },
  {
    month: "May",
    data: 56
  },
  {
    month: "June",
    data: 55
  },
  {
    month: "July",
    data: 40
  }
];

export const tableData = new Array(500).fill(null).map((_, index) => {
  return {
    name: `name${index}`,
    age: Math.floor(Math.random() * 100),
    friend: {
      name: `friend.Name${index}`,
      age: Math.floor(Math.random() * 100)
    }
  };
});

export const tableColumns = [
  {
    Header: "Name",
    accessor: "name" 
  },
  {
    Header: "Age",
    accessor: "age"
  },
  {
    Header: "Friend Name",
    accessor: "friend.name"
  },
  {
    Header: "Friend Age",
    accessor: "friend.age"
  }
];
