import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { PropTypes } from "prop-types";

export default function PurchaseDialog({ openDialog, handleCloseDialog }) {

  return (
    <Dialog
      hideBackdrop
      open={openDialog}
      onClose={handleCloseDialog}
      aria-labelledby="alert-dialog-title"
    >
      <DialogTitle id="alert-dialog-title">
        {"Compra realizada con éxito!"}
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleCloseDialog}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  )
}

PurchaseDialog.propTypes = {
  openDialog: PropTypes.bool,
  handleCloseDialog: PropTypes.func
}