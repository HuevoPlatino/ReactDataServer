import { useEffect, useState } from "react";
import personsService from "../services/personsServices";

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
        personsService.personDelete(id)
          .then(() => {
            const updatedPersons = persons.filter((person) => person.id !== id);
            setPersons(updatedPersons);
          })
          .catch((error) => {
            console.error('Error:', error);
            alert('There was an error deleting the person. Please try again.');
          });
      }
    };

  const handleUpdatePerson = (id, newPhoneNumber, name) => {
    const confirmed = window.confirm(
      `User ${name} is already in the phone book. Do you want to replace your existing number?`
    );
    if (confirmed) {
      personsService.numberEdit(id, newPhoneNumber, name)
        .then(updatedPerson => {
          const updatedPersons = persons.map(person =>
            person.id !== id ? person : updatedPerson
          );
          setPersons(updatedPersons);
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('There was an error updating the person. Please try again.');
        });
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
