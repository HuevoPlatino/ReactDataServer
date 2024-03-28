import { usePersons } from "../hooks";
export const DeleteButton = ({ id }) => {
  const { handleDeletePerson } = usePersons();
  const handleDelete = () => {
    handleDeletePerson(id);
  };

  return <button onClick={handleDelete}>delete number</button>;
};
