import React from "react";
import Navber from "./Navber";
import Footer from "./Footer";
import Todo from "./Todo";

function App() {
    const todos = [
        { id: 1, title: "First Todo", description: "Complete the React Applications" },
        { id: 2, title: "Second Todo", description: "Implement new feature" },
        { id: 3, title: "Third Todo", description: "Implement the Express backand" },
        // Add more todos as needed
      ];

  return (
    <div>
      <Navber />

      {todos.map((todo) => (
        <Todo key={todo.id} Title={todo.title} Description={todo.description} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
