import {useRoutes, Link} from 'react-router-dom';
import router from './router';

function App() {
  const outlet = useRoutes(router);


  return (
    <div className="app">
      {/* <Link to = "/home">Home</Link> | <Link to="/about">About</Link> | <Link to="/user">User</Link>  */}
      
      {/* 这里的Outlet是一个占位符，用来显示子路由  */}
      {/* <Outlet></Outlet> */}
      {outlet}
    </div>
  )
}

export default App
