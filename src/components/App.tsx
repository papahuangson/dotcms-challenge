import { ApiContextProvider } from "utils/ApiContext";
import { RouterProvider } from "react-router-dom";
import { router } from "utils/routes";

const App: React.FC = () => {
  return (
    <ApiContextProvider>
      <RouterProvider router={router} />
    </ApiContextProvider>
  );
};

export default App;
