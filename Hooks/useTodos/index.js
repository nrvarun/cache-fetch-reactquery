import { useQuery } from "react-query";

const getTodos = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => data);

  console.log(data);

  return data;
};

export default function useTodos() {
  return useQuery("todos", getTodos);
}
