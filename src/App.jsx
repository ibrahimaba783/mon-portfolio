import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Accueil from './pages/Accueil'
import Contacts from './pages/Contacts'
import Projets from './pages/Projets'
import NotFound from './pages/NotFound'
import About from './composents/About'
import Formulaire from './pages/Formulaire'



function App() {
  
   const Router = createBrowserRouter([

    //  nos routes
    { element : <Layout/> ,
      children: [
            { path:"/" , element: <Accueil/> },
            { path:"/contact" , element: <Contacts/> },
            { path:"/projets" , element: <Projets/> },
            { path:"/about" , element: <About/> },
            { path: "/formulaire", element: <Formulaire/> },
      ]
    },
    { path:"*" , element: <NotFound/> },
   

   ])

   
  return (
     <RouterProvider  router={Router} />
  )
}

export default App
