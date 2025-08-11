import { BrowserRouter , Routes, Route  } from "react-router-dom";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import AuthLayout from "./layouts/AuthLayout";
import AppLayout from "./layouts/AppLayout";
import DevTreeView from "./views/DevTreeView";
import ProfileView from "./views/ProfileView";
import HandleView from "./views/HandleView";
import NotFoundView from "./views/NotFoundView";
import HomeView from "./views/HomeView";
import HandleLayout from "./layouts/HandleLayout";

export default function Router() {

    return(
        <BrowserRouter>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path='/auth/login' element={<LoginView />} />
                    <Route path='/auth/register' element={<RegisterView />} />
                </Route>

                <Route path='/admin' element={<AppLayout />}>
                    <Route index= {true} element= {<DevTreeView />} />
                    <Route path='profile' element={<ProfileView />} />
                </Route>

                <Route path='/:handle' element={<HandleLayout />} >
                    <Route element={<HandleView />} index={true}/>
                </Route>

                <Route path='/' element={<HomeView />} >
                </Route>                

                <Route path='/404' element={<AuthLayout />} > 
                    <Route element={<NotFoundView />} index={true} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}