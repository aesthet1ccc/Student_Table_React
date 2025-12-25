import React from "react";
import axios from "axios";

import "./App.css";
import Table_body from "./components/Table_body.tsx";
import Header from "./components/Header.tsx";
import Sort from "./components/Sort.tsx";
import Search from "./components/Search.tsx";
import Table_head from "./components/Table_head.tsx";
import { CalcStudentAge } from "./utils/CalcStudentAge.ts";

type StudentAddress = {
  address: string;
  street: string;
};

export type StudentsInfo = {
  firstname: string;
  lastname: string;
  email: string;
  age: number;
  website: string;
  phone: string;
  address: StudentAddress;
  birthday: string;
};

export type SortObj = {
  name: string;
  sortProperty: string;
};

const App: React.FC = () => {
  const [items, setItems] = React.useState<StudentsInfo[]>([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [sort, setSort] = React.useState<SortObj>({
    name: "Имя А-Я",
    sortProperty: "firstname",
  });

  React.useEffect(() => {
    axios
      .get(`https://fakerapi.it/api/v2/persons`)
      .then((res) => setItems(res.data.data));
  }, []);

  const sortedItems: StudentsInfo[] = [...items].sort((a, b) => {
    const isDesc = sort.sortProperty.startsWith("-");
    const property = (
      isDesc ? sort.sortProperty.slice(1) : sort.sortProperty
    ) as keyof StudentsInfo;

    const valueA =
      property === "age" ? CalcStudentAge(a.birthday) : a[property];
    const valueB =
      property === "age" ? CalcStudentAge(b.birthday) : b[property];

    if (isDesc) {
      return valueA > valueB ? -1 : 1;
    } else {
      return valueA > valueB ? 1 : -1;
    }
  });

  return (
    <div>
      <Header />
      <div className="content">
        <h1> Студенты</h1>
        <div className="filter_block">
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          <Sort sortType={sort} onChangeSort={(obj) => setSort(obj)} />
        </div>
        <table className="users">
          <Table_head />
          {sortedItems
            .filter(({ firstname, lastname }) => {
              const fullName = `${firstname} ${lastname}`;
              const studName = `${lastname} ${firstname}`;

              return (
                fullName.toLowerCase().includes(searchValue.toLowerCase()) ||
                studName.toLowerCase().includes(searchValue.toLowerCase())
              );
            })
            .map((obj, index) => (
              <Table_body
                key={index}
                firstname={obj.firstname}
                lastname={obj.lastname}
                email={obj.email}
                age={CalcStudentAge(obj.birthday)}
                website={obj.website}
                address={obj.address.street}
                phone={obj.phone}
              />
            ))}
        </table>
      </div>
    </div>
  );
};

export default App;
