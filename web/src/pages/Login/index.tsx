import { Button } from "../../components/LoginButton";

import '../Login/styles.scss';

export default function LoginPage () {
  return (
    <body>
      <div className="container">
        <form action="">
          <h1>Login</h1>
          <div className="form-group">
          <label htmlFor="">Usuario</label>
          <input type="text" placeholder="Usuario" className="form-control" />
          </div>
          <div className="form-group">
          <label htmlFor="">Senha</label>
          <input type="password" placeholder="Senha" className="form-control" />
          </div>
          <Button type="submit">Login</Button>
        </form>
      </div>
    </body>
  );
}