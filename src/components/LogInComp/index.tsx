import { useContext } from "react";
import AuthContext from "../../context/auth";
import { loginCall } from "../../utils/mockData";
import './style.scss'

export const LogInComp = (): JSX.Element => {
  const {islog, setIslog}= useContext(AuthContext);

  const handleLogin = async () => {
     if(islog) {
      setIslog(false)
      return
     }
     const user = await loginCall()
     setIslog(user)
  }

  return (
    <div className="LogInComp">
      <button onClick={handleLogin}>{islog? 'exit': 'login'}</button>
      <span>{islog ? JSON.stringify(islog) : "GUEST"}</span>
    </div>
  );
};
export default LogInComp;
