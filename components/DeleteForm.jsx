import React from "react";
import { deleteTask } from "@/utils/actions";

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="deleteTask" value={id} />
      <button className="btn btn-xs btn-error">Delete</button>
    </form>
  );
};

export default DeleteForm;
