import { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import UserCard from "./components/UserCard";
import FormUser from "./components/FormUser";
import Loader from "./utils/Loader";

function App() {
  const [updateInfo, setUpdateInfo] = useState();
  const [closeForm, setCloseForm] = useState(true);

  const baseURL = "https://users-crud.academlo.tech";
  const [
    users,
    getAllUsers,
    createNewUser,
    deleteUserById,
    updateUserById,
    isLoading,
  ] = useFetch(baseURL, setCloseForm);

  useEffect(() => {
    getAllUsers("/users");
  }, []);

  const handleOpenForm = () => {
    setCloseForm(false);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
          <div className="principal-container show-animate">
            <header className="principal__header">
              <div className="text-animate">
                <h1 className="principal__title">User Crud</h1>
              </div>
              <button className="principal__btn" onClick={handleOpenForm}>
              <i className='bx bx-plus-medical'></i> Create New User
              </button>
            </header>
            <FormUser
              createNewUser={createNewUser}
              updateInfo={updateInfo}
              updateUserById={updateUserById}
              setUpdateInfo={setUpdateInfo}
              closeForm={closeForm}
              setCloseForm={setCloseForm}
            />
            <section className="user__container">
              {users?.map((user) => (
                <UserCard
                  key={user.id}
                  user={user}
                  deleteUserById={deleteUserById}
                  setUpdateInfo={setUpdateInfo}
                  handleOpenForm={handleOpenForm}
                />
              ))}
            </section>
          </div>

      )}
    </>
  );
}

export default App;
