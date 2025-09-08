import Message from "./component/Message.tsx";
import ListGroup from "./component/ListGroup/ListGroup.tsx";
import Alert from "./component/Alert.tsx";
import Button from "./component/Button/Button.tsx";
import { useState } from "react";
import Like from "./component/ListGroup/Like.tsx";
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const items = ["apple", "banana", "car", "dog"];
  const handSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Message></Message>
      <ListGroup
        items={items}
        heading="items"
        onSelectItem={handSelectItem}
      ></ListGroup>
      <ListGroup
        items={items}
        heading="items"
        onSelectItem={handSelectItem}
      ></ListGroup>
      {/* <div>
        <Alert>
          Children<span>props</span>
        </Alert>
      </div> */}
      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>The alert</Alert>
        )}
        <Button onClick={() => setAlertVisibility(true)}>The bottom</Button>
      </div>
      <div>
        <Like onClick={() => console.log("clicked")}></Like>
      </div>
    </div>
  );
}
export default App;
