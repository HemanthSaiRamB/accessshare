import SignIn from "../Screens/Login";
import SignUp from "../Screens/Register";
import Draw from "../Screens/Draw";


export var routes=[
    {
        path:'/',
        component:SignIn
    },
    {
        path:'/signUp',
        component:SignUp
    },
    {
        path:'/draw',
        component: Draw
    }
]