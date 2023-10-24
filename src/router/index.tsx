import React, { lazy } from "react"
import Home from "../views/Home"
// import About from "../views/About"
// import User from "../views/User"
import { Navigate } from "react-router-dom"

const About = lazy(() => import("../views/About"))
const User = lazy(() => import("../views/User"))
const Page1 = lazy(() => import("../views/Page1"))
const Page2 = lazy(() => import("../views/Page2"))

//  懒加载的模式需要我们给他添加一个suspense组件 外层需要包一个loading


// 定义一个高阶函数组件来简写懒加载
const withLoadingComponent = (comp:JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>
)


const routes = [
    {
        path: '/',
        element: <Navigate to = "/page1" />,
    },
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/page1',
                element: withLoadingComponent(<Page1 />),
            },
            {
                path: '/page2',
                element: withLoadingComponent(<Page2 />),
            },
        ]
    },
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/about',
        element: withLoadingComponent(<About />),
    },
    {
        path: '/user',
        element: withLoadingComponent(<User />),
    },
]

export default routes
















// import App from "../App"
// import Home from "../views/Home"
// import About from "../views/About"
// import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
// // 两种路由模式的组件: BrowserRouter ( History模式 ) ， HashRouter( Hash模式 )

// // const baseRouter = () => {
// //     return (
// //         <BrowserRouter>
// //             <Routes>
// //                 <Route path="/" element={<App/>}>
// //                     <Route path="/home" element={<Home/>}></Route>
// //                     <Route path="/about" element={<About/>}></Route>
// //                 </Route>
// //             </Routes>
// //         </BrowserRouter>
// //     )
// // }
// // 以上写法可以简写为:

// const baseRouter = () => (
//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<App />}>
//                 <Route path = "/" element = {<Navigate to = "/home"></Navigate>}></Route>
//                 <Route path="/home" element={<Home/>}></Route>
//                 <Route path="/about" element={<About/>}></Route>
//             </Route>
//         </Routes>
//     </BrowserRouter>
// )
// export default baseRouter