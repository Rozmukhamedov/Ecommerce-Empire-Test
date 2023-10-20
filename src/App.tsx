import { useState } from "react";
import "./App.css";
import DataTable from "./containers/Table/DataTable";

export interface TableRow {
  id: number;
  image: string;
  description: string;
  date: string;
  numbers: number;
}

export const rows: TableRow[] = [
  {
    id: 1,
    image: "image1.jpg",
    description: "Описание 1",
    date: "2023-01-01",
    numbers: 42,
  },
  {
    id: 2,
    image: "image2.jpg",
    description: "Описание 2213",
    date: "2023-02-01",
    numbers: 37,
  },
  {
    id: 3,
    image: "image2.jpg",
    description: "Описание 3222",
    date: "2023-03-01",
    numbers: 37,
  },
  {
    id: 4,
    image: "image2.jpg",
    description: "Описание 4",
    date: "2023-04-01",
    numbers: 37,
  },
  {
    id: 5,
    image: "image2.jpg",
    description: "Описание 5",
    date: "2023-05-01",
    numbers: 37,
  },
  // Добавьте другие элементы
];

function App() {
  return <DataTable data={rows} />;
}

export default App;
