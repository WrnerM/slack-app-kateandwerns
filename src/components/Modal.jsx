import React from "react";
// const [modal, setModal] = useState(false);

const Modal = ({ modal, setModal }) => {
  if (!modal) {
    return null;
  }
  return (
    <div>
      <button onClick={() => setModal(false)} style={{ color: "red" }}>
        Click this!
      </button>
    </div>
  );
};

{
  /* <div>
<Modal modal={modal} setModal={setModal} />
<button onClick={() => setModal(true)}>Modal</button>
</div> */
}

export default Modal;
