import { Route, Routes } from "react-router-dom";
import { routes } from "./config";

const ConfigRouter = () => {
  return (
    <Routes>
      {routes.map(({ path, component: Component, ...props }) => (
        <Route path={path} {...props} key={path} element={<Component />} />
      ))}
    </Routes>
  );
};

export default ConfigRouter;
