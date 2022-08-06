import { Navigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext"

const ProtectedRoute = ({ children }: any) => {
  // @ts-ignore
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to='/' />
  }
  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute