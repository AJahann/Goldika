import { Fragment } from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

import './Modal.css';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({ open, children }) {
  return (
    <Fragment>
      <BootstrapDialog aria-labelledby='customized-dialog-title' open={open}>
        {children}
      </BootstrapDialog>
    </Fragment>
  );
}
