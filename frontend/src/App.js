import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom"

/** import all components*/
import Profile from "./components/Profile"
import UserName from "./components/UserName"
import Register from "./components/Register"
import Password from "./components/Password"
import Recovery from "./components/Recovery"
import Reset from "./components/Reset";
import PageNotFound from "./components/PageNotFound";



/** root routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: <UserName />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/password",
    element: <Password />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/recovery",
    element: <Recovery />
  },
  {
    path: "/reset",
    element: <Reset />
  },
  {
    path: "*",
    element: <PageNotFound />
  },
])

function App() {
  return (
    <main>
      <RouterProvider router={router}>

      </RouterProvider>
    </main>
  );
}

export default App;
