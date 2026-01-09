import React from "react"
import { Routes,Route } from "react-router-dom"
const AppRoute =()=>{

return(
<Routes>

    <Route path='/' element ={'Home'}></Route>
    <Route path='/about' element ={'About'}></Route>
</Routes>

)

}
export default AppRoute