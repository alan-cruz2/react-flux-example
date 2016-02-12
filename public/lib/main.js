import App from "./components/App";
import API from "./flux/API"

API.getAllItems();

ReactDOM.render(
  <App />,
  document.getElementById("react")
);
