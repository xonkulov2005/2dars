const Modal = ({ t, setShowModal, deleteTitle }) => {
  return (
    <div className="modal">
      <p>Do you want to delete, {t.title}</p>
      <button onClick={() => deleteTitle(t.id)}>Ha</button>
      <button onClick={() => setShowModal(false)}>Yo'q</button>
    </div>
  );
};

export default Modal;
