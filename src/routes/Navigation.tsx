import { Suspense } from "react"
import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"
import { routes } from "./routes"



export const Navigation = () => {
   return (
      <Suspense fallback={<span>Loading.....</span>}>

         <BrowserRouter>

            <div className="main-layout">

               <nav>
                  <img src="https://cdn-icons-png.flaticon.com/256/7405/7405950.png" alt="expresso logo" />

                  <ul>

                     {

                        routes.map(route => (
                           <li key={route.to}>
                              <NavLink to={route.to} className={({ isActive }) => isActive ? "nav-active" : ""} >{route.name}</NavLink>
                           </li>
                        )
                        )

                     }
                  </ul>
               </nav>

               <Routes>

                  {

                     routes.map(route =>
                        <Route key={route.to} path={route.path} element={<route.Component />} />
                     )
                  }
                  <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
               </Routes>

            </div>

         </BrowserRouter>

      </Suspense>
   )
}
