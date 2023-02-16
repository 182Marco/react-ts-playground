import { useContext } from "react";
import AuthContext from "../../context/auth";
import "./style.scss";

export const LogInComp = (): JSX.Element => {
  const { isLog, setIsLog } = useContext(AuthContext);

  return (
    <div className="LogInComp">
      <button onClick={() => setIsLog(!isLog)}>
        {isLog ? "exit" : "login"}
      </button>
      <span>{isLog ? JSON.stringify(isLog) : "GUEST"}</span>
    </div>
  );
};
export default LogInComp;
