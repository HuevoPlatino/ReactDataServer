import { usePersons } from "../hooks";
export const PersonForm = ({
  newName,
  setNewName,
  newNumber,
  handleNewNumber,
  persons,
  setPersons,
}) => {
  const { handleUpdatePerson } = usePersons();
  const { createUser } = usePersons();
  const addNewPerson = (event) => {
    
    event.preventDefault();

    if (!persons.some((person) => person.name === newName)) {
      const newPerson = {id: Date.now(),name: newName,number: newNumber,};
      createUser(newPerson);
      setPersons([...persons, newPerson]);
    } 
    else {
      const existingUser = persons.find((person) => person.name === newName);
      handleUpdatePerson(existingUser.id, newNumber, existingUser.name);
    }
  };

  return (
    <div>
      <h2>Add a New Person:</h2>
      <form onSubmit={addNewPerson}>
        <div>
          <label htmlFor="new-Name">Name of person: </label>
          <input id="new-Name" value={newName} onChange={setNewName} />
          <br />
          <br />
          <label htmlFor="new-Number">Number of person: </label>
          <input id="new-Number" value={newNumber} onChange={handleNewNumber} />
        </div>
        <br />
        <br />
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};
