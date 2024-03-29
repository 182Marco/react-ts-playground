import { useContext } from "react";
import AuthContext from "../../context/auth";
import "./style.scss";

export const LogInComp = (): JSX.Element => {
  const { isLog, setIsLog } = useContext(AuthContext);

  return (
    <div className="LogInComp">
      <span>{isLog ? "LOGGED" : "GUEST"}</span>
      <button onClick={() => setIsLog(!isLog)}>
        {isLog ? "exit" : "login"}
      </button>
    </div>
  );
};
export default LogInComp;
