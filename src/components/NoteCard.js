import { Card, CardHeader, IconButton } from "@mui/material";

import { DeleteOutline } from "@mui/icons-material";

const NoteCard = ({ note }) => {
  return (
    <div>
      <Card>
        <CardHeader
          action={
            <IconButton>
              <DeleteOutline />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
      </Card>
    </div>
  );
};

export default NoteCard;
