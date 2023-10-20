import {
  Avatar,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
} from "@mui/material";

export interface TableRow {
  id: number;
  image: string;
  description: string;
  date: string;
  numbers: number;
}

interface ModalDialogContentProps {
  row: TableRow | null;
  onClose: any
}

const ModalDialogContent: React.FC<ModalDialogContentProps> = ({
  row,
  onClose,
}) => {
  if (!row) return null;

  return (
    <>
      <DialogTitle>Детали строки</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar
            src={row.image}
            alt="Image"
            style={{ width: 200, height: 200 }}
          />
          <p>Описание: {row.description}</p>
          <p>Дата: {row.date}</p>
          <p>Числа: {row.numbers}</p>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => row && window.open(row.image, "_blank")}>
          Открыть картинку
        </Button>
        <Button onClick={() => onClose()}>Закрыть</Button>
      </DialogActions>
    </>
  );
};

export default ModalDialogContent;
