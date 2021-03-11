import React, {useEffect} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}



export default function Messenger(props) {
  const [open, setOpen] = React.useState(false);

  useEffect(()=>{
    setOpen(props.open);
  },[props])


  const handleClose = () => {
    setOpen(false);
    props.setSnackBack()
  };

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        TransitionComponent={TransitionUp}
        message={props.msg}
        action={
            <React.Fragment>
              <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
  
      />
    </div>
  );
}
