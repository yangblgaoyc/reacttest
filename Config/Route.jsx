import React from 'react';
import {Route,Switch,HashRouter}  from 'react-router-dom';
// import {NavLink,Route,BrowserRouter as Router,HashRouter,Switch,Redirect}  from 'react-router-dom';

import HomeComponent from '../component/Home.jsx';//引进组件
import News from '../component/News.jsx';//引进组件
import Detail from '../component/Details.jsx';//引进组件

// var data = {id:3,name:'sam',age:36};
const routes =[
    {
        path:'/home',
        exact:true,
        // component: MainComponent
        // render:()=>(<HomeComponent data={data}/>)
        render:()=>(<HomeComponent/>)
    },
    {
        path:'/news',
        exact:true,
        render:()=>(<News/>)
    },
    {
        path:'/details/:categoryId/:id',
        exact:true,
        component:Detail
    },
];
const RouteConfig = (
    <Switch>
        {
            routes.map((route,index)=>(
                <Route
                    key ={index}
                    path={route.path}
                    exact={route.exact}
                    render={route.render}
                    component={route.component}
                />
            ))
        }

    </Switch>
);

export default RouteConfig;

