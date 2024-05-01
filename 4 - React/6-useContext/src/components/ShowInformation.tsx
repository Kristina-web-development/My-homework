import { FC, useContext } from "react";
import NameContext from "../useContext/NameContext";

interface IShowInfo {
  setNewName: Function;
}
const ShowInformation: FC<IShowInfo> = ({ setNewName }) => {
  const name = useContext(NameContext);
  const handleNewName = () => {
    const nameUser = prompt("enter name");
    setNewName(nameUser!);
  };

  return (
    <div>
      <h1>Personal Info</h1>
      <p>Name of user:</p>
      <h4>{name}</h4>
      <button onClick={handleNewName}>Add new name</button>
    </div>
  );
};

export default ShowInformation;
