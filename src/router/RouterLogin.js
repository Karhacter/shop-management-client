import Login from "../pages/frontend/account/LoginForm";
import RegisterForm from "../pages/frontend/account/RegisterForm";

const RouterLogin=[

    { 
        path: "login",
        element:<Login/>,
    },
    {
        path: "register",
        element:<RegisterForm/>
    }
]

export default RouterLogin;