import { useContext } from "react";
import AuthContext from "../../context/auth";
import './style.scss'

export const LogInComp = (): JSX.Element => {
  const {islog, setIslog}= useContext(AuthContext);

  return (
    <div className="LogInComp">
      <button onClick={() => setIslog(!islog)}>{islog? 'exit': 'login'}</button>
      <span>{islog ? "LOGGED IN" : "GUEST"}</span>
    </div>
  );
};
export default LogInComp;
