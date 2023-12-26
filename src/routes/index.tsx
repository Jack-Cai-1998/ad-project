import React from "react";
import LoginPage from "pages/login/index"
import IndexPage from "pages/index/index"

export const allRoutes=[
    {
        path:"/index",
        exact:false,
        component:IndexPage,
        title:''
    },
    {
        path:"/login",
        exact:false,
        component:LoginPage,
        title:''
    },
    {
        path:"/",
        exact:false,
        component:IndexPage,
        title:''
    },
]