import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import "../orar/orar.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import axios from "axios";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'div'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#4c4c4c",
    '& > *': {
      margin: theme.spacing(1)
    },
    marginTop:"-100px"
  },
  input: {
    display: 'none',
  },
}));

const Orar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [photo, setPhoto] = React.useState(0);

  const auth = useSelector((state) => state.login);
  const { isAdmin, isSecretar } = auth;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("type", value);
    formData.append("photo", photo);

    axios.post("/user/update_orar", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="orar__wrapper">
      <AppBar
      className="appbar"
        position="static"
        style={{
          background: "#4C4C4C",
          height: 5,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Orar clase 1-4" {...a11yProps(0)} />
          <Tab label="Orar clase 5-9" {...a11yProps(1)} />
          <Tab label="Orar clase 10-12" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className="img">
          <img src="/uploads/0.png"></img>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="img">
          <img src="/uploads/1.png"></img>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="img">
           <img src="/uploads/2.png"></img>
        </div>
      </TabPanel>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        { (isAdmin || isSecretar) &&
      <div className={classes.root}>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={handlePhoto}/>
      <label htmlFor="icon-button-file">
        <IconButton color="secondary" aria-label="upload picture" component="span" >
          <PhotoCamera />
        </IconButton>
      </label>
      <Button type="submit" color="secondary" variant="contained" size="medium" disabled={photo === 0}> {photo === 0 ? "Selectati poza": "Modifica"}
        </Button>
    </div>
    }
      </form>
    </div>
  );
};

export default Orar;
