import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar, Paper } from "@mui/material";
import ModalDialogContent from "../ModalDialogContent/ModalDialogContent";
import CModal from "../../components/CModal/CModal";

interface DataTableProps {
  data: TableRow[];
}

type TableRow = {
  id: number;
  image: string;
  description: string;
  date: string;
  numbers: number;
};

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const [selectedRow, setSelectedRow] = useState<TableRow | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const columns = [
    {
      field: "image",
      headerName: "Картинка",
      sortable: false,
      width: 120,
      renderCell: (params: any) => (
        <Avatar
          src={params.value as string}
          alt="Image"
          style={{ width: 100, height: 100, cursor: "pointer" }}
          onClick={() => {
            setSelectedRow(params.row as TableRow);
            setModalOpen(true);
          }}
        />
      ),
    },
    {
      field: "description",
      headerName: "Описание",
      width: 200,
      sortable: true,
      renderCell: (pararms: any) => (
        <div className="description">{pararms.row.description}</div>
      ),
    },
    {
      field: "date",
      headerName: "Дата",
      width: 150,
      sortable: true,
      renderCell: (pararms: any) => (
        <div className="date">{pararms.row.date}</div>
      ),
    },
    {
      field: "numbers",
      headerName: "Числа",
      width: 120,
      sortable: true,
      renderCell: (pararms: any) => (
        <div className="numbers">{pararms.row.numbers}</div>
      ),
    },
  ];

  return (
    <Paper style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        onRowClick={(params) => {
          setSelectedRow(params.row as TableRow);
        }}
      />
      <CModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <ModalDialogContent
          row={selectedRow}
          onClose={() => setModalOpen(false)}
        />
      </CModal>
    </Paper>
  );
};

export default DataTable;
