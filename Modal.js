function Modal(props) {
  function doneHandler() {
    props.onDone();
  }

  function undoneHandler() {
    props.onUndone();
  }

  const title = sessionStorage.getItem("title");
  let explanation;
  switch (title) {
    case "Work":
      explanation = "Going to the company and handling the case";
      break;
    case "Learning":
      explanation = "Learning react and doing its project";
      break;
    case "Watching movie":
      explanation = "Watch the movie Mission Impossible and Spider-Man 3";
      break;
    case "Sport":
      explanation = "Run 5 kilometers swim thirty times";
      break;
    case "Reading":
      explanation =
        "Complete the Instant Millionaire story and submit the summary";
      break;
    case "Game":
      explanation = "Play Forza 5 and GTA for an hour";
      break;
    default:
      explanation = "undefined";
  }

  return (
    <div className="modal">
      <h2>{title}</h2>
      <p>{explanation}</p>
      <button className="btn btn--alt" onClick={undoneHandler}>
        Undone
      </button>
      <button className="btn" onClick={doneHandler}>
        Done
      </button>
    </div>
  );
}

export default Modal;
