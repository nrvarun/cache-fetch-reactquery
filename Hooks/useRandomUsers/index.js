import { useQuery } from "react-query";

const getUsers = async () => {
  const users = await fetch("https://randomuser.me/api/?results=50")
    .then((res) => res.json())
    .then((data) => data.results);

  return users;
};

export default function useRandomUsers() {
  return useQuery("users", getUsers);
}
