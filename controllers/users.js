import { v4 as uuidv4 } from "uuid";

let users = [];

/*
  {
      "firstName" : "Joni",
      "lastName" : "Doe",
      "age" : 10
  },  
  {
   firstName: "John",
   lastName: "Doe",
   age: 25,
 },
 {
   firstName: "Jane",
   lastName: "Alex",
   age: 28,
 }, */

export const createUser = (req, res) => {
  const newUser = req.body;

  users.push({ ...newUser, id: uuidv4() });

  res.send(`User with name ${newUser.firstName} added to the database`);
};

export const getUsers = (req, res) => {
  res.send(users);
};

export const getUserDetail = (req, res) => {
  const id = req.params.id;
  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);

  res.send(`User with id ${id} deleted from database`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const updateUser = users.find((user) => user.id === id);

  if (firstName) updateUser.firstName = firstName;
  if (lastName) updateUser.lastName = lastName;
  if (age) updateUser.age = age;

  res.send(`User with id ${id} updated`);
};
