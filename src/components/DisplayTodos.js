import React from "react";

const DisplayTodos = ({ list, editItem, deleteItem }) => {
  console.log(list);
  return (
    <div>
      {list.map((item) => {
        const { id, title, desc } = item;
        return (
          <article key={id}>
            <p>
              {title} {desc}
            </p>
            <button onClick={() => editItem(id)}>edit</button>
            <button onClick={() => deleteItem(id)}>delete</button>
          </article>
        );
      })}
    </div>
  );
};

export default DisplayTodos;
