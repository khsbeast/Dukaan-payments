const Buttons = ({ activePage, totalPages, setActivePage }) => {
  const buttonRange = 9;
  let startButton = activePage;
  let endButton = activePage + buttonRange;

  if (startButton < 1) {
    startButton = 1;
    endButton = Math.min(buttonRange, totalPages);
  } else if (endButton > totalPages) {
    endButton = totalPages;
    startButton = Math.max(1, totalPages - buttonRange + 1);
  }

  const buttons = [];

  if (startButton > 1) {
    buttons.push(
      <button key={1} onClick={() => setActivePage(1)}>
        1
      </button>
    );
    if (startButton > 2) {
      buttons.push(<span key="truncate-start">...</span>);
    }
  }

  for (let i = startButton; i <= endButton; i++) {
    buttons.push(
      <button
        key={i}
        onClick={() => setActivePage(i)}
        className={activePage === i ? "active" : ""}
      >
        {i}
      </button>
    );
  }

  if (endButton < totalPages) {
    if (endButton < totalPages - 1) {
      buttons.push(<span key="truncate-end" style={{textAlign:"end"}}>...</span>);
    }
    buttons.push(
      <button key={totalPages} onClick={() => setActivePage(totalPages)}>
        {totalPages}
      </button>
    );
  }

  return buttons;
};

export default Buttons;
