import React from 'react'
import './styles.sass'

export const Navbar = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  function handleLogout() {
    localStorage.removeItem("userInfo");
    window.location.reload();
  }
  return (
    // code a navbar with an user image and a logout button
    <div className="navbar">
      <div className="navbar__user">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="user"
          className="navbar__user--image"
        />
        <span className="navbar__user--name">{userInfo.first_name} {userInfo.last_name}</span>
      </div>
      <button className="navbar__logout" onClick={handleLogout}>Cerrar Sesion</button>
    </div>

  )
}
