import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

let statusClassName = "color-sts";

function TodoCard(props) {
  const [firstStatus, secondStatus] = useState("Unknown");

  const [isModalOpen, setIsModalOpen] = useState(false);

  function moreHandler() {
    setIsModalOpen(true);
  }

  function closeModalHandler() {
    setIsModalOpen(false);
  }

  function doneHandler() {
    setIsModalOpen(false);
    statusClassName = "done";
    secondStatus("Done 😎");
  }

  function undoneHandler() {
    setIsModalOpen(false);
    statusClassName = "undone";
    secondStatus("Undone 🥸");
  }

  const title = [props.title];
  sessionStorage.setItem("title", title);
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p className={statusClassName}>Status : {firstStatus}</p>
      <div className="actions">
        <button className="btn" onClick={moreHandler}>
          More
        </button>
      </div>
      {isModalOpen && <Modal onUndone={undoneHandler} onDone={doneHandler} />}
      {isModalOpen && <Backdrop onClose={closeModalHandler} />}
    </div>
  );
}

export default TodoCard;
