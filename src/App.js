import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Footer from "./components/Footer";
import { Outlet, createBrowserRouter } from "react-router-dom";
import ComingSoon from "./components/ComingSoon";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact/>
      }
    ],
    errorElement: <ComingSoon />,
  },
]);
export default appRouter;
