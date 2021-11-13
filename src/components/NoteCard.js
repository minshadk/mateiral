import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";

import { DeleteOutline } from "@mui/icons-material";

import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  test: {
    border: (note) => {
      if (note.category == "work") {
        return "1px solid red";
      }
    },
  },
});

const NoteCard = ({ note, handleDelete }) => {
  const classes = useStyles(note);
  return (
    <div>
      <Card elevation={1} classes={classes.test}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutline />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
