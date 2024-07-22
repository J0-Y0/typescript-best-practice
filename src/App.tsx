import Button from "./components/Button";
import Alert from "./components/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Like from "./components/Like";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [liked, setLiked] = useState(false);
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "mosh",
      age: 36,
    },
  });
  return (
    <>
      {console.log(game)}
      <Like onclick={() => setLiked(!liked)} liked={liked}></Like>
      {showAlert && <Alert onclose={() => setShowAlert(false)}></Alert>}
      <Button color="success" onclick={() => setShowAlert(true)}>
        click me
      </Button>
      <Button
        color="primary"
        onclick={() => {
          setGame({
            ...game,
            player: { ...game.player, name: "yosef the emyayu" },
          });
        }}
      >
        change name
      </Button>
    </>
  );
}

export default App;
