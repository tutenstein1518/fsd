export interface Todo {
  id: number;
  value: number;
}

export interface ButtonProps {
  data: { id: number; value: number }[];
  setData: React.Dispatch<
    React.SetStateAction<{ id: number; value: number }[]>
  >;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
