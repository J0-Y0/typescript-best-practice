import { useState } from "react";

const App = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  return (
    <>
      {console.log(bugs[0].title, bugs[0].fixed)}
      <button
        onClick={() =>
          setBugs(
            bugs.map((bug) =>
              bug.id === 1 ? { ...bug, fixed: !bug.fixed } : bug
            )
          )
        }
      >
        fix bug
      </button>
    </>
  );
};

export default App;
