import React from "react";
import { ButtonProps } from "../../shared/types";

const randomId = (data: { id: number; value: number }[]) => {
  return data.length > 0 ? Math.max(...data.map((item) => item.id)) + 1 : 1;
};

export const CreateButton: React.FC<ButtonProps> = ({
  data,
  setData,
  value,
  setValue,
}) => {
  const handleAdd = () => {
    const numericValue = Number(value);

    // Проверим, является ли значение числом и не является ли пустым
    if (!isNaN(numericValue) && value.trim() !== "") {
      const newId = randomId(data);
      setData([...data, { id: newId, value: numericValue }]);
      setValue(""); //
    } else {
      alert("Введите корректное число!");
    }
  };

  return (
    <div className="create">
      <label>
        Введите число:
        <input
          type="text"
          value={value} // Установим значение из состояния
          onChange={(e) => setValue(e.target.value)} // Обновление состояния при вводе
        />
      </label>
      <div className="button" onClick={handleAdd}>
        Создать
      </div>
    </div>
  );
};
