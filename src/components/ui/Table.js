import React from "react";
import Button from "./Button";

const Table = (props) => {
  return (
    <table className="table border-dark">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.list.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.status}</td>
            <td>
              <div className="d-inline-block">
                <Button
                  className={"btn btn-danger"}
                  text="Delete"
                  onClick={() => props.onDelete(item.id)}
                />
              </div>
              <div className="d-inline-block ml-2">
                <Button
                  className={"ml-2 btn btn-primary"}
                  text="Edit"
                  onClick={() => props.onEdit(item)}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
