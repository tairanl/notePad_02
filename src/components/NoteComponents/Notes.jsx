import React from "react";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "../css/Note.css";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(true);

  // get text and store in state (typing)
  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  // add new note to the notes state array
  const saveHandler = () => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        text: inputText,
      },
    ]);
    // clear the textarea after saving
    setInputText("");
    console.log(notes);
  };

  // delete note handler, id
  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  //obtain data from local sto rage and render after refresh
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (Array.isArray(data) && data.length > 0) {
      setNotes(data);
    }
    setLoading(false);
  }, []);

  // saving data to local storage
  // useEffect(() => {
  //   const data = localStorage.setItem("Notes", JSON.stringify(notes));
  // }, [notes]);
  useEffect(() => {
    if (!loading) {
      const data = localStorage.setItem("Notes", JSON.stringify(notes));
    }
  }, [notes, loading]);

  return (
    <div className="notes">
      {notes.map((note) => (
        <Note key={note.id} note={note} deleteNote={deleteNote} />
      ))}
      <CreateNote
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
      />
    </div>
  );
}
