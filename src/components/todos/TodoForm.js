import React, { useState ,useEffect} from "react";
import Headers from "../ui/Headers";
import Button from "../ui/Button";

const TodoForm = ({ onAdd, editData }) => {
  const initialData = {
    title: "",
    status: "pending",
  };

  const [todoFields, setTodoFields] = useState(
    editData ? editData : initialData
  );

  useEffect(() => {
    if (editData) {
      setTodoFields(editData);
    }
  }, [editData]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editData) {
      onAdd(todoFields);
    } else {
      onAdd({ ...todoFields, id: Math.floor(Math.random() * 1000) }); 
    }
    setTodoFields(initialData);
  };

  const handleFieldChange = (e) => {
    const { id, value } = e.target;
    setTodoFields({ ...todoFields, [id]: value });
  };


  return (
    <div className="container">
      <div className="mt-4">
        <Headers text={editData ? "Edit Todo" : "Add Todo"} />
      </div>
      <div className="mt-4">
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title:
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter title.."
              value={todoFields.title}
              onChange={handleFieldChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="status" className="form-label">
              Status:
            </label>
            <select
              id="status"
              value={todoFields.status}
              onChange={handleFieldChange}
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <Button
            text={editData ? "Update" : "Add"}
            className={"btn btn-dark"}
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
