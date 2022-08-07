import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

import '../Login/styles.scss';

export default function LoginPage() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  // @ts-ignore
  const { singIn, createUser } = UserAuth();
  const navigate = useNavigate()

  const register = async () => {
    try {
      await createUser(userEmail, userPassword)
      navigate('/home')
    } catch (error) {
      alert(error)
    }
  }

  const login = async () => {
    try {
      await singIn(userEmail, userPassword)
      navigate('/home')
    } catch (error) {
      alert(error)
    }
  };

  return (
    <div className="container">
      <div className="form">
        <h1>Login bem-vindo</h1>
        <div className="form-group">
          <label htmlFor="">Usuario</label>
          <input type="text" placeholder="Usuario" className="form-control" onChange={(event) => {
            setUserEmail(event.target.value);
          }} />
        </div>
        <div className="form-group">
          <label htmlFor="">Senha</label>
          <input type="password" placeholder="Senha" className="form-control" onChange={(event) => {
            setUserPassword(event.target.value);
          }} />
        </div>
        <div className="form-footer">
          <button onClick={login}>Entrar</button>
          <button onClick={register}>Registrar</button>
        </div>
      </div>
    </div>
  );
}