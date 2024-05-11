import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Card from './Components/Card';
import ContactForm from './Components/ContactForm';
import reportWebVitals from
'./reportWebVitals'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store/Store';
import UpdateForm from './Components/UpdateForm';
import Map from './Components/Map';
// import { UpdateContact } from './Store/Slice';



const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
     {
       path:"/",
       element:<Card />
     },{
       path:"/add",
       element:<ContactForm />
     },{
       path:"/update/:id",
       element:<UpdateForm />
     },
     {
       path:'map',
       element:<Map />
     }
    ]
    
    
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Provider store={store}>
    <RouterProvider router={appRouter}/>
    </Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
