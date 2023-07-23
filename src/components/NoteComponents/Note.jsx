import { DeleteForeverOutlined } from "@mui/icons-material";

export default function Note({ note, deleteNote }) {
  return (
    <div className="note">
      <div className="note_body">{note.text}</div>
      <div className="note_footer">
        <DeleteForeverOutlined
          className="note_delete"
          // aria-hidden="true"
          onClick={() => deleteNote(note.id)}
        ></DeleteForeverOutlined>
      </div>
    </div>
  );
}
