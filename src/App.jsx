import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Error404 from './Pages/Error404';
import Blogs, { blogsLoader } from './Pages/Blogs';
import Conatct from './Pages/Conatct';
import Layout from './Pages/Layout';
import DetailPage, { fetchingData } from './Pages/DetailPage';
import Loader from './Components/Loader';


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route loader={({ params }) => fetchingData(params)} path='/blogs/:id' element={<DetailPage />} />
      {/* <Route loader={({ params }) => fetchSingleQuote(params)} path='/quotes/:id' element={<DetailPage />} /> */}
      <Route loader={blogsLoader}
        errorElement={<div className='w-full h-screen flex justify-center items-center'><Loader /></div>}
        path="/blogs"
        element={<Blogs />}
      />
      <Route path="/contact" element={<Conatct />} />
      <Route path="*" element={<Error404 />} />
    </Route>
  )
);