import { createTask } from "@/utils/actions";
import React from "react";

const TodoForm = () => {
  return (
    <form action={createTask}>
      <div className="join w-full mb-8">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="Type here"
          name="newTask"
          required
        />
        <button type="submit" className="btn btn-primary join-item">
          Create Task
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
