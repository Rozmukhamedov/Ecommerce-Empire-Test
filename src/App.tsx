import { useState, useEffect } from "react";
import "./App.css";
import DataTable from "./containers/Table/DataTable";
import {
  createTheme,
  ThemeProvider,
  Container,
  Button,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import CreateData from "./containers/CreateData/CreateData";
import { getStorage } from "./utils/local-storage";
import useCustomFetcher from "./hook/useCustomFetcher";

export interface TableRow {
  id: number;
  image: string;
  description: string;
  date: string;
  numbers: number;
}

function App() {
  const [mockData, useMockData] = useState<any>([]);
  const [data, useData] = useState<TableRow[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [error, isLoading, fetcher]: any = useCustomFetcher();

  const myTheme = createTheme({
    palette: {
      mode: isDarkMode ? "light" : "dark",
    },
  });

  console.log(mockData);

  useEffect(() => {
    let findData = !!getStorage("dataList")
      ? JSON.parse(getStorage("dataList"))
      : [
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
        ];
    useData(findData);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetcher(
      (response: any) => {
        console.log(response);
        useMockData(response);
      },
      `https://jsonplaceholder.typicode.com/posts?_limit=10`,
      requestOptions
    );
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error != 200) return <div>Error</div>;

  return (
    <ThemeProvider theme={myTheme}>
      <Box
        sx={{
          bgcolor: "background.default",
          height: "100vh",
        }}
      >
        <Container maxWidth="md">
          <Button variant="contained" color="primary" onClick={toggleTheme}>
            {isDarkMode ? "light" : "dark"}
          </Button>
          <CreateData data={data} useData={useData} />
          <DataTable data={data} />
          <h1 style={{ marginTop: 10 }}>Fake Data API</h1>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">User Id</TableCell>
                <TableCell align="center">Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockData.map((row: any) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="center">{row.title}</TableCell>
                  <TableCell align="center">{row.userId}</TableCell>
                  <TableCell align="center">{row.body}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
