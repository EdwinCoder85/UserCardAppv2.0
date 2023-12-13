import { useState } from "react";
import "./styles/UserCard.css";
import WarningUser from "./WarningUser";

const UserCard = ({ user, deleteUserById, setUpdateInfo, handleOpenForm }) => {
  const [closeWarning, setCloseWarning] = useState(true);
  const [flag, setFlag] = useState();

  const handleOpenWarning = () => {
    setCloseWarning(false);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteUserById("/users", user.id);
    setFlag("D");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setUpdateInfo(user);
    handleOpenForm();
  };

  const handleCloseWarning = () => {
    setCloseWarning(true);
  };

  return (
    <>
      <article className="user">
        <div className="card">
          <div className="card-content">
            <figure className="card__figure">
              {/* <img className="card__image" src="./src/assets/img1.jpg" alt="" /> */}
              <img className="card__image" src={user.image_url} alt="" />
            </figure>

            <div className="card__data">
              <span className="card__firstname">{user.first_name}</span>
              <span className="card__lastname">{user.last_name}</span>
              <span className="card__email">
                <i className="bx bxs-envelope card__icon"></i>
                {user.email}
              </span>
              <span className="card__birthday">
                <i className="bx bx-gift card__icon"></i>
                {user.birthday}
              </span>
            </div>

            <footer className="card__btn-group">
              <button className="card__btn" onClick={handleOpenWarning}>
                <i className="bx bx-trash card__icon"></i>Delete
              </button>
              <button className="card__btn" onClick={handleUpdate}>
                <i className="bx bx-pencil card__icon"></i>Update
              </button>
            </footer>
          </div>
        </div>
      </article>
      <WarningUser
        user={user}
        handleDelete={handleDelete}
        closeWarning={closeWarning}
        handleCloseWarning={handleCloseWarning}
        flag={flag}
      />
    </>
  );
};

export default UserCard;
