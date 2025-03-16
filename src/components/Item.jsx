import { useState } from "react";
import Modal from "./Modal";

function Item({ t, deleteTitle }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <Modal deleteTitle={deleteTitle} setShowModal={setShowModal} t={t} />
      )}
      <li>
        <p>{t.title}</p>
        <button onClick={() => setShowModal(true)}>Delete</button>
      </li>
    </>
  );
}
export default Item;
