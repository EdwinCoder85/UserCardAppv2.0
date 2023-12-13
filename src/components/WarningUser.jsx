import "./styles/WarningUser.css";

const WarningUser = ({
  user,
  handleCreateUpdate,
  handleDelete,
  closeWarning,
  handleCloseWarning,
  flag
}) => {

  return (
    <div onClick={handleCloseWarning} className={`warninguser-container ${closeWarning && 'close-warning'}`}>
          <form onClick={e => e.stopPropagation()} className="warninguser">
          <i className="fa-solid fa-circle-question warninguser__icon"></i>
            <h2 className="warninguser__question">{flag === 'N' ? "Are you sure to create a user?" : flag === 'U' ? "Are you sure to update the user?" : "Are you sure to delete the user" }</h2>
            <div onClick={handleCloseWarning} className="warninguser__close">x</div>
            {/* <span className="warninguser__message">
              El usuario <strong>{`${user?.first_name} ${user?.last_name}`}</strong> se ha {flag === 'N' ? "creado" : flag === 'U' ? "actualizado" : "eliminado" } satisfactoriamente
            </span> */}
            <div class="warninguser__btn-group">
              <button onClick={flag === 'N' ? handleCreateUpdate : flag === 'U' ? handleCreateUpdate : handleDelete } className="warninguser__btn">
                Yes
              </button>
              <button className="warninguser__btn">No</button>
            </div>
          </form>
    </div>
  )
}

export default WarningUser;