import { useContext } from "react";
import { MyContext } from "./ContextProvider";

const ComponentNew = () => {
  const { shareData, setShareData } = useContext(MyContext);

  return (
    <>
      <p>{shareData}</p>
      <button onClick={() => setShareData("updated data")}>
        Update
      </button>
    </>
  );
};

export default ComponentNew;
