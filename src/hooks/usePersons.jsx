import { useEffect, useState } from "react";
import personsService from "../services/personsService";

export const usePersons = () => {
  const [persons, setPersons] = useState([]);

  const handleChangePersonsValue = (newValue) => {
    setPersons(newValue);
  };

  const createUser = (newUser) => {
    personsService.create(newUser);
  };

  useEffect(() => {
    personsService.getAll().then((data) => {
      setPersons(data);
    });
  }, []);

  const handleDeletePerson = (id) => {
    const personToDelete = persons.find((person) => person.id === id);
    const confirmation = window.confirm(
      `Are you sure you want to delete ${personToDelete.name}?`
    );
    if (confirmation) {
      personsService.personDelete(id);
      const updatedPersons = persons.reduce((acc, person) => {
        if (person.id !== id) {
          acc.push(person);
        }
        return acc;
      }, []);
      setPersons(updatedPersons);
    }
  };

  const handleUpdatePerson = (id, newPhoneNumber, name) => {
    const confirmed = window.confirm(
      `User ${name} is already in the phone book. Do you want to replace your existing number?`
    );
    if (confirmed) {
      personsService.numberEdit(id, newPhoneNumber, name);
    }
  };

  return {
    persons,
    handleChangePersonsValue,
    handleDeletePerson,
    handleUpdatePerson,
    createUser,
  };
};
