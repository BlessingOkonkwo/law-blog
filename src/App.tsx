// import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/error";
import CreateArticle from "./pages/create-article";
import Layout from "./components/shared/layout";
import Results from "./pages/results";
// import { store } from "@/redux/store";
import { Providers } from "./redux/provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Results /> },
      {
        path: "/create-article",
        element: <CreateArticle />,
      },
    ],
  },
]);

function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
}
export default App;
