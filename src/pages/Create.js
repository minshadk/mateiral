import { Typography, Button, Container } from "@mui/material";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import FourKIcon from "@mui/icons-material/FourK";
import Announcement from "@mui/icons-material/Announcement";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: "black",
    color:'fff',
    // padding:"10px"
  },
  title:{
    textDecoration:"underline",
    marginBottom:20
  }
});

const Create = () => {
  const classes = useStyles()

  return (
    <Container>
      <Typography
      className={classes.title}
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <Button
      className={classes.btn}
        onClick={() => console.log("Button Clicked")}
        type="submit"
        color="secondary"
        variant="contained"
        // startIcon={<FourKIcon />}
        endIcon={<Announcement />}
      >
        Submit
      </Button>
      {/* <AccessibilityNewIcon color="secondary" fontSize="large" /> */}
      {/* <AnnouncementIcon />
      <FourKIcon /> */}
    </Container>
  );
};

export default Create;
