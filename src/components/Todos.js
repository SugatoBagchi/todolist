import React, { useState } from "react";
import DisplayTodos from "./DisplayTodos";

const Todos = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editID, setEditID] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") alert("Title cannot be empty!");
    else if (desc === "") alert("Description cannot be empty!");
    else if (!edit) {
      const newList = {
        id: new Date().getTime().toString(),
        title: title,
        desc: desc,
      };
      setList([...list, newList]);
      setTitle("");
      setDesc("");
    } else {
      setList(
        list.map((item) => {
          if (item.id === editID) return { ...item, title: title, desc: desc };
          return item;
        })
      );
      setTitle("");
      setDesc("");
      setEditID(null);
      setEdit(false);
    }
  };

  const clearList = () => {
    setList([]);
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setEditID(id);
    setTitle(specificItem.title);
    setDesc(specificItem.desc);
    setEdit(true);
  };

  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h3>Your Todo List!</h3>
        <input
          type="text"
          placeholder="Eg: Finish chapter 3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Eg: Chapter 3 from History"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {list.length > 0 && (
        <div>
          <DisplayTodos
            list={list}
            editItem={editItem}
            deleteItem={deleteItem}
          />
          <button onClick={clearList}>Clear</button>
        </div>
      )}
    </section>
  );
};

export default Todos;
