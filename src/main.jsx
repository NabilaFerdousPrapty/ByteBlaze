import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Pages/Home.jsx'
import Blogs from './Pages/Blogs.jsx'
import Bookmarks from './Pages/Bookmarks.jsx'
import Mainlayout from './layouts/Mainlayout.jsx'


const router=createBrowserRouter([
  {
    path:'/',
    element:<Mainlayout></Mainlayout>,
    children:[
      {
       index:true,//path:'/'
       element:<Home></Home>
      },
      {
      path:'/blogs',
       element:<Blogs/>,
       loader:()=>fetch('https://dev.to/api/articles?per_page=20?&top=7')

      },
      {
       path:'/bookmarks',
       element:<Bookmarks/>
      }
    ],
   
  },
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
 
    <RouterProvider router={router} ></RouterProvider>
  
)
