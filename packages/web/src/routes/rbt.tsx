import App from "../App";
import Home from "../pages/home";
import Sessions from "../pages/sessions";

export const rbtrouter = [
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
    children: [
      {
        path: "",
        element: <Home />,
        // loader: homeLoader,
      },
      {
        path: "sessions/:sessionId",
        element: <Sessions />,
        // loader: teamLoader,
      },
    ],
  },
];
