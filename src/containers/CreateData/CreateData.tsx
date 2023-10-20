import React, { useState } from "react";
import { Button, TextField, Stack } from "@mui/material";
import { TableRow } from "../ModalDialogContent/ModalDialogContent";
import styles from "./style.module.css";
import { setStorage } from "../../utils/local-storage";

type CreateDataType = {
  data: TableRow[];
  useData: any;
};

const CreateData: React.FC<CreateDataType> = ({ data, useData }) => {
  const [newData, setNewData] = useState<TableRow>({
    id: data.length + 1,
    description: "",
    date: "",
    numbers: 0,
    image: "image1.jpg",
  });

  const addTodo = () => {
    if (newData.description && newData.date && newData.numbers) {
      useData([...data, newData]);
      setNewData({
        id: data.length + 1,
        description: "",
        date: "",
        numbers: 0,
        image: "image1.jpg",
      });
      setStorage("dataList", JSON.stringify([...data, newData]));
    }
  };
  return (
    <div className={styles.create_data}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <TextField
          label="Description"
          value={newData.description}
          onChange={(e) =>
            setNewData({ ...newData, description: e.target.value })
          }
        />
        <TextField
          label="Date"
          value={newData.date}
          onChange={(e) => setNewData({ ...newData, date: e.target.value })}
        />
        <TextField
          label="Numbers"
          type="number"
          value={newData.numbers}
          onChange={(e) =>
            setNewData({
              ...newData,
              numbers: parseInt(e.target.value, 10),
            })
          }
        />
        <Button variant="contained" color="primary" onClick={addTodo}>
          Add Todo
        </Button>
      </Stack>
    </div>
  );
};

export default CreateData;
