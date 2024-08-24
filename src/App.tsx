import React from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './routers';
import GlobalStyles from './styles/global';


const App: React.FC = () => {


  return (

    <>
      <RouterProvider router={router} />
      <GlobalStyles />

    </>


    

  );

};

export default App;
