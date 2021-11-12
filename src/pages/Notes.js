import React, { useEffect, useState } from "react";

import { Typography, Button, Container, Paper, Grid } from "@mui/material";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";

import NoteCard from "../components/NoteCard";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);
  console.log(notes);

  return (
    <Container>
      <Grid container>
        {notes.map((note) => (
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <NoteCard note={note} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Notes;
