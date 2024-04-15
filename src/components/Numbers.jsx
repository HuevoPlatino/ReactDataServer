import { DeleteButton } from "./DeleteButton";
export const Numbers = ({ persons, newFilter }) => {
  return (
    <div>
      <h2>Numbers of persons</h2>
      <ul>
        {persons
          .filter((person) => person.name.includes(newFilter))
          .map((person, i) => (
            <li key={i}>
              {person.name} {person.number} <DeleteButton id={person.id} />
            </li>
          ))}
      </ul>
    </div>
  );
};
