import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { email, logout, getProfile } = useContext(UserContext);

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-content">
        <h2>Perfil de Usuario</h2>

        <div className="profile-info">
          <p className="profile-email">
            <strong>Email:</strong> {email}
          </p>
        </div>

        <button className="btn-logout" onClick={logout}>
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Profile;
