import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  Typography,
  Button,
  Container,
  TextField,
  RadioGroup,
  Radio,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";

import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import FourKIcon from "@mui/icons-material/FourK";
import Announcement from "@mui/icons-material/Announcement";

// import { makeStyles } from "@mui/styles";
import makeStyles from "@mui/styles/makeStyles";
import { Grid } from '@mui/material';

import { styled } from '@mui/styles';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});



const useStyles = makeStyles({
  // btn: {
  //   fontSize: 60,
  //   backgroundColor: "black",
  //   color: "fff",
  //   // padding:"10px"
  // },
  // title: {
  //   textDecoration: "underline",
  //   marginBottom: 20,
  // },

  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

const Create = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  // Radio Button States
  const [category, setCategory] = useState("todos");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (title == "") {
      setTitleError(true);
    }

    if (details == "") {
      setDetailsError(true);
    }

    if (title && details) {
      console.log(title, details, category);
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => navigate("/"));
    }
  };

  return (
    <Container>
      <Typography
        className={classes.field}
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          className={classes.field}
          error={titleError}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Details"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          multiline
          rows={4}
          className={classes.field}
          error={detailsError}
          onChange={(e) => setDetails(e.target.value)}
        />

        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          {/* seting  Default Value */}
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="reminders"
              control={<Radio />}
              label="Reminders"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>

        <MyButton><Button
          className={classes.btn}
          // onClick={() => console.log("Button Clicked")}
          type="submit"
          color="secondary"
          variant="contained"
          // startIcon={<FourKIcon />}
          endIcon={<Announcement />}
        >
          Submit
        </Button>
        </MyButton>
      </form>

      {/* <AccessibilityNewIcon color="secondary" fontSize="large" /> */}
      {/* <AnnouncementIcon />
      <FourKIcon /> */}
    </Container>
  );
};

export default Create;
