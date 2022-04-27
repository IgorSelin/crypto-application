import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ConfigRouter from "routes";
import { store } from "store/store";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ConfigRouter />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
