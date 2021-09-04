import React from "react";

function Main() {
  return (
    <section className="main-container">
      <h1>Todo App</h1>
      <div className="add">
        <input type="text" className="input" />
        <img
          src={require("../images/plus-svgrepo-com.svg").default}
          alt="add button"
          height={40}
          width={40}
          className="add-todo"
        />
      </div>
   <div className="btn-status">
   <button className="Active-btn">Active</button>
      <button className="Completed-btn">Completed</button>
      <button className="All-btn">All</button>
   </div>
    </section>
  );
}
export default Main;
