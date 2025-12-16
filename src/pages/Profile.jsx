const Profile = () => {
  const userEmail = "usuario@example.com";

  return (
    <div className="profile-container">
      <div className="profile-content">
        <h2>Perfil de Usuario</h2>
        
        <div className="profile-info">
          <p className="profile-email">
            <strong>Email:</strong> {userEmail}
          </p>
        </div>

        <button className="btn-logout">
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Profile;