import { updateTask } from "@/utils/actions";
import React from "react";

const EditForm = ({ task }) => {
  const { id, content, completed } = task;
  return (
    <form
      action={updateTask}
      className="max-w-sm p-12 border-base-300 rounded-md"
    >
      <input type="hidden" name="id" value={id} />
      <input
        type="text"
        name="content"
        defaultValue={content}
        required
        className="input input-border w-full"
      />
      <div className="form-control my-4">
        <label className="label cursor-pointer" htmlFor="completed">
          <span className="label-text">Completed</span>
          <input
            type="checkbox"
            defaultChecked={completed}
            id="completed"
            name="completed"
            className="checkbox-primary checkbox checkbox-sm"
          />
        </label>
      </div>
      <button className="btn btn-primary btn-sm btn-block">Edit</button>
    </form>
  );
};

export default EditForm;
