import React, { useState } from "react";
import "./styles.css";
import { defaultData } from "../../shared/data/todosApi";
import { CreateButton } from "../../features/createTodo";

export const Numbers = () => {
  const [data, setData] = useState(() => defaultData);
  const [value, setValue] = useState("");

  return (
    <>
      <h2>Numbers</h2>
      <div className="list">
        {data.map(({ value, id }) => (
          <div key={id}>• number: {value}</div>
        ))}
      </div>
      <CreateButton
        data={data}
        setData={setData}
        value={value}
        setValue={setValue}
      />
    </>
  );
};
