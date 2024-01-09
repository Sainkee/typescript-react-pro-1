import Alert from "./component/alert";
import Button from "./component/button";
import { useState } from "react";

function App() {
  const [alertVisi, setAlertVisi] = useState(false);

  return (
    <div>
      {alertVisi && (
        <Alert onClose={() => setAlertVisi(false)}>
          {" "}
          <h1>missing</h1>
        </Alert>
      )}
      <Button onClick={() => setAlertVisi(true)}>My first btn</Button>
    </div>
  );
}

export default App;
