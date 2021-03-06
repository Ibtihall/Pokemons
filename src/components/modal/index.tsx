import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles(() => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
export interface ModalExternalGarageProps {
  handleClose: () => void;
  open: boolean;
  templat: any
}

export const Modaltemplate: React.FC<ModalExternalGarageProps> = (
  props,
): JSX.Element => {
  const classes = useStyles();
  const {handleClose,open,templat}= props;

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>{templat}</Fade>
    </Modal>
  );
};

export default Modaltemplate;