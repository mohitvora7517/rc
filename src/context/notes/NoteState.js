import { upload } from "@testing-library/user-event/dist/upload";
import React from "react";
import { useState } from "react";

import noteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "1",
      user: "612a",
      title: "my title",
      description: "Please wake up early",
      tag: "personal",
      date: "2021-09-03T14:20:09.509Z",
      __v: 0,
    },
    {
      _id: "2",
      user: "712a",
      title: "my title 2",
      description: "2 Please wake up early",
      tag: "personal 2",
      date: "2021-09-05T14:10:09.509Z",
      __v: 0,
    },
    {
      _id: "3",
      user: "712a",
      title: "my title 2",
      description: "2 Please wake up early",
      tag: "personal 2",
      date: "2021-09-05T14:10:09.509Z",
      __v: 0,
    },
    {
      _id: "4",
      user: "712a",
      title: "my title 2",
      description: "2 Please wake up early",
      tag: "personal 2",
      date: "2021-09-05T14:10:09.509Z",
      __v: 0,
    },
    {
      _id: "5",
      user: "712a",
      title: "my title 2",
      description: "2 Please wake up early",
      tag: "personal 2",
      date: "2021-09-05T14:10:09.509Z",
      __v: 0,
    },
    {
      _id: "6",
      user: "712a",
      title: "my title 2",
      description: "2 Please wake up early",
      tag: "personal 2",
      date: "2021-09-05T14:10:09.509Z",
      __v: 0,
    },
    {
      _id: "7",
      user: "712a",
      title: "my title 2",
      description: "2 Please wake up early",
      tag: "personal 2",
      date: "2021-09-05T14:10:09.509Z",
      __v: 0,
    },
    {
      _id: "8",
      user: "712a",
      title: "my title 2",
      description: "2 Please wake up early",
      tag: "personal 2",
      date: "2021-09-05T14:10:09.509Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  //Add a note
  const addNote = (title,description,tag)=>{
    console.log('added');
    //TODO API CALL
    const note = {
      _id: "12",
      user: "712a",
      title: title,
      description: description,
      tag: tag,
      date: "2021-09-05T14:10:09.509Z",
    }
    setNotes(notes.concat(note))
  }


  //Delete a note
  const deleteNote = (id)=>{
    console.log('deleted'+ id);
  }

  //Edit a note
  const editNote = ()=>{

  }

  return (
    <noteContext.Provider value={{ notes, setNotes, addNote, editNote, deleteNote }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
