import { LinearProgress } from "@mui/material";

export default function CreateNote({ textHandler, saveHandler, inputText }) {
  // calculate character limit
  const charLimit = 100;
  const charLeft = charLimit - inputText.length;

  return (
    <div className="note">
      <textarea
        cols="10"
        rows="5"
        value={inputText}
        onChange={textHandler}
        placeholder="Type..."
        maxLength={100}
      ></textarea>
      <div className="note_footer">
        <span className="label">{charLeft} left</span>
        <button className="note_save" onClick={saveHandler}>
          Save
        </button>
      </div>
      <LinearProgress
        className="char_progress"
        variant="determinate"
        value={inputText.length}
      />
    </div>
  );
  sd;
}
