import React from 'react';
import {Route,Switch,hashHistory}  from 'react-router-dom';
// import {NavLink,Route,BrowserRouter as Router,HashRouter,Switch,Redirect}  from 'react-router-dom';

import MainComponent from '../component/Main.jsx';//引进组件
import Topic from '../component/Topic.jsx';//引进组件

var data = {id:3,name:'sam',age:36};
const routes =[
    {
        path:'/',
        exact:true,
        // component: MainComponent
        render:()=>(<MainComponent data={data}/>)
    },
    {
        path:'/topic',
        exact:true,
        // component:Topic
        render:()=>(<Topic data={data}/>)
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
                />
            ))
        }

    </Switch>
);

export default RouteConfig;

