import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import Main from "./pages/main"
import Stocks from "./pages/stocks"
import Price from "./pages/price"
import Data from "./data"
// import { priceLoader } from "./loaders"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Main/>}/>
            <Route path="stocks" element={<Stocks/>}/>
            <Route path="price/:symbol" element={<Price/>} loader={Data.data}/>
            
        </Route>
    )
)


export default router; 