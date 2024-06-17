import { useState } from "react";

export default function usePurchaseDialog() {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return { openDialog, handleOpenDialog, handleCloseDialog };
}