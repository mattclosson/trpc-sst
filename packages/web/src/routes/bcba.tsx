import App from "../App";
import Home from "../pages/bcba/home";
import Sessions from "../pages/sessions";

export const bcbarouter = [
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
