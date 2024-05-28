import React from "react";
import TextInput from "./components/TextInput";
import TextList from "./components/TextList";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";

function App() {
  // TODO: texts 를 context api 로 리팩터링 하세요.
  return (
    <div>
      <h1>Text Input and Listing</h1>
      <Provider store={store}>
        <TextInput />
        <TextList />
      </Provider>
    </div>
  );
}

export default App;
