import "./styles/WarningUser.css";

const WarningUser = ({
  user,
  handleCreateUpdate,
  handleDelete,
  closeWarning,
  handleCloseWarning,
  flag,
}) => {
  return (
    <div
      onClick={handleCloseWarning}
      className={`warninguser-container ${closeWarning && "close-warning"}`}
    >
      <form onClick={(e) => e.stopPropagation()} className="warninguser">
        <i
          className={
            flag === "N"
              ? "fa-solid fa-circle-check warninguser__icon"
              : flag === "U"
              ? "fa-solid fa-circle-check warninguser__icon"
              : "fa-solid fa-circle-question warninguser__icon"
          }
        ></i>
        <h2 className="warninguser__question">
          {flag === "N"
            ? "User created successfully"
            : flag === "U"
            ? "User updated successfully"
            : "Are you sure to delete the user?"}
        </h2>
        <div onClick={handleCloseWarning} className="warninguser__close">
          x
        </div>
        <div className="warninguser__btn-group">
          <button
            onClick={
              flag === "N"
                ? handleCreateUpdate
                : flag === "U"
                ? handleCreateUpdate
                : handleDelete
            }
            className={`warninguser__btn ${
              flag === "N" ? "create" : flag === "U" ? "update" : "delete"
            }`}
          >
            {flag === "N" ? "" : flag === "U" ? "" : "Yes"}
          </button>
          <button
            className={`warninguser__btn ${
              flag === "N" ? "create" : flag === "U" ? "update" : "delete"
            }`}
          >
            {flag === "N" ? "" : flag === "U" ? "" : "No"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default WarningUser;
