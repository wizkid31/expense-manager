import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function IncomeFormDialog({ show, setShow }) {
  return (
    <div>
      <Dialog
        open={show}
        onClose={() => setShow(false)}
        maxWidth="md"
        fullWidth={true}
      >
        <DialogTitle sx={{ fontFamily: "Poppins-SemiBold", color: "#103e5b" }}>
          Add your Income
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{ fontFamily: "Poppins-Medium", color: "#103e5b" }}
          >
            To add your Savings, enter the name, date and amount.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="amount"
            label="Amount"
            type="number"
            fullWidth
            variant="standard"
            sx={{
              fontFamily: "Poppins-Medium",
              "& .MuiInputLabel-root": {
                fontFamily: "Poppins-Medium",
                color: "#103e5b",
              },
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="date"
            label=" "
            type="date"
            fullWidth
            variant="standard"
            sx={{
              "& .MuiInputLabel-root": {
                fontFamily: "Poppins-Medium",
                color: "#103e5b",
              },
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name of the Income Source"
            type="text"
            fullWidth
            variant="standard"
            sx={{
              "& .MuiInputLabel-root": {
                fontFamily: "Poppins-Medium",
                color: "#103e5b",
              },
              "& .MuiInputLabel-root .Mui-focused": {
                color: "#103e5b !important",
              },
              "& .MuiInput-root:after": {
                borderBottom: "2px bottom #103e5b",
              },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setShow(false)}
            sx={{ fontFamily: "Poppins-Medium", color: "#103e5b" }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => setShow(false)}
            sx={{ fontFamily: "Poppins-Medium", color: "#103e5b" }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
