import { lazy, Suspense } from "react"
import { useRoutes } from "react-router-dom"
import MainLayout from "../Layout/MainLayout";

const Contact = lazy(()=>import("../components/pages/Contact"))
const Projects = lazy(()=>import("../components/pages/Projects"))
const AboutMe = lazy(()=>import("../components/pages/AboutMe"))
const LandingPage = lazy(()=>import("../components/pages/LandingPage"))


const LoadingFallback = () => <div>Loading...</div>; 

const Route = () => {

const routeElements = useRoutes([
      {
      path:'/',
      element:(
      <Suspense fallback = {<LoadingFallback />}>
         <MainLayout>
            <LandingPage />
         </MainLayout>
      </Suspense>
      )
      },{
         path:'/contact',
         element:(
            <Suspense fallback = {<LoadingFallback />}>
               <MainLayout>
                  <Contact />
               </MainLayout>
            </Suspense>
         )
      },{
         path:'/projects',
         element:(
            <Suspense fallback = {<LoadingFallback />}>
               <MainLayout>
                  <Projects />
               </MainLayout>
            </Suspense>
         )
      },{
         path:'/about',
         element:(
            <Suspense fallback = {<LoadingFallback />}>
               <MainLayout>
                  <AboutMe />
               </MainLayout>
            </Suspense>
         )

      }
   ])
   return routeElements;
}

export default Route;
