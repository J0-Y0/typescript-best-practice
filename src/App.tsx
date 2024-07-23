import { useState } from "react";
import EText from "./components/EText";

const App = () => {
  const [carts, setCart] = useState(["product 1", "product 2", "product 3"]);

  return (
    <>
      <EText maxChar={100}>
        equi Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Praesentium, quo architecto rem quaerat illo facere ipsum magnam,
        dolorem labore dolore eius consectetur aspernatur tempore fugit. Ducimus
        repellat dolores architecto blanditiis. Libero nesciunt ullam enim
        praesentium repudiandae quaerat sint cupiditate nihil iste ipsa fugit
        tenetur exercitationem veniam deleniti nam velit earum, totam obcaecati
        aut nostrum aliquam consequuntur perspiciatis necessitatibus
        dignissimos! Nulla. At recusandae perspiciatis minus asperiores deserunt
        nisi odit. Facilis et aspernatur, nobis laboriosam nihil veritatis
        voluptates quae sit numquam pariatur dolorem, delectus neque sapiente?
        Fugiat tempore neque quidem voluptatibus facilis? quae a. At nihil sit
        molestiae.
      </EText>
    </>
  );
};

export default App;
