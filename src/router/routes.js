import Home from '@/views/Home';
import Login from '@/views/Login';
import News from '@/views/News';
import User from '@/views/User';
import Loading from '@/views/Loading';
const routes = [{
    path: "/",
    redirect: {
      name: "Home"
    }
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/news",
    name: "News",
    //在路由上附加自定义数据
    meta: {
      auth: true
    },
    component: News
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/user",
    name: "User",
    meta: {
      auth: true
    },
    component: User
  },
  {
    path: "/loading",
    name: "Loading",
    component: Loading
  }
]
export default routes