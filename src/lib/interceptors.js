import React, {useEffect} from "react";
import axios from "axios";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {makeStyles} from '@material-ui/core/styles';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const checkRequests = Wrapped => {
    function CheckRequests(props) {

        const classes = useStyles();
        const [state, setState] = React.useState({
            open: false,
            vertical: 'top',
            horizontal: 'right',
            status: 'success',
            message: ''
        });


        useEffect(() => {
            axios.interceptors.response.use(function (response) {
                return response;
            }, function (error) {
                setState({...state, message: error.response.data.message, status: 'error', open: true});

                return Promise.reject(error);
            });
        })

        const {vertical, horizontal, open, message, status} = state;


        const handleClose = () => {
            setState({...state, open: false});
        };

        return (
            <div className={classes.root}>

                <Snackbar open={open} autoHideDuration={6000} anchorOrigin={{vertical, horizontal}}
                          key={`${vertical},${horizontal}`} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={status}>
                        {message}
                    </Alert>
                </Snackbar>

                <Wrapped {...props} />

            </div>)
    }

    return CheckRequests
}


export default checkRequests
