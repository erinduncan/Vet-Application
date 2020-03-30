import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Link } from "react-router-dom";


function getModalStyle() {
  const top = 37;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: "17%",
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid var(--acc1)",
    borderRadius: "20px",
    // boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const LoginFunction = (props: any) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen} className="btn">
        Login
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
      >
        <div style={modalStyle} className={classes.paper}>
          <Link to="" className="x-btn" onClick={handleClose}>
            X
          </Link>
          <h4 id="simple-modal-title">Login</h4>
          <form>
            <label htmlFor="email">
              <span className="lbl">
                <b>Email</b>
              </span>
              <input
                style={{
                  borderStyle: "solid",
                  // borderColor: "var(--acc2)",
                  // borderRadius: "25px",
                  height: "20px",
                  padding: "5px",
                  width: "200px"
                }}
                required
                type="text"
                id="email"
                placeholder="Email"
                name="email"
                value={props.email}
                onChange={props.handleChange}
              />
            </label>
            <br /> <br />
            <label htmlFor="password">
              <span className="lbl">
                <b>Password</b>
              </span>
              <input
                style={{
                  borderStyle: "solid",
                  // borderColor: "var(--acc2)",
                  // borderRadius: "25px",
                  height: "20px",
                  padding: "5px",
                  width: "200px"
                }}
                required
                type="password"
                id="password"
                placeholder="Enter Password"
                name="password"
                value={props.password}
                onChange={props.handleChange}
              />
            </label>
            <br /> <br />
            <button type="button" onClick={props.handleLogin} className="btn">
              Sign in
            </button>
          </form>
          <br />
          <h4>{props.loginMessage}</h4>
        </div>
      </Modal>
    </div>
  );
};

export default LoginFunction;
