import React from "react";
import { Dialog } from "@mui/material";

interface ModalDialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const CModal: React.FC<ModalDialogProps> = ({ isOpen, onClose, children }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md">
      {children}
    </Dialog>
  );
};

export default CModal;
