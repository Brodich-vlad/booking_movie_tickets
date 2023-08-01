import { BrowserRouter } from "react-router-dom";
import { Routes,Route } from "react-router";

import LayoutPage from "../../pages/layout-page/layout-page";
import HomePage from "../../pages/home-page/home-page";
import DetailsPage from "../../pages/details-page/details-page";
import TiketPage from "../../pages/tiket-page/tiket-page";
import ErrorPage from '../../pages/error-page';


export default function MainRoutes() {
 


    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LayoutPage />}>

                       <Route index element={<HomePage />}></Route>
                        
                       <Route path={`details/:id`} element={<DetailsPage/>}></Route>

                        <Route path="details/:id/tiket" element={<TiketPage/>}></Route>
                        
                    </Route>

                    <Route path="*" element={<ErrorPage/>}></Route>
                    
                </Routes>
            </BrowserRouter>
        </>
    )
}