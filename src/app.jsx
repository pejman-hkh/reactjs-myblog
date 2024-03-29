import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Layout, { LayoutLeftSide } from "./Layout.jsx";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Loading } from "./Features.jsx";
window.baseUrl = '/';

import Home from "./page/Home.jsx";
import NoPage from "./page/NoPage.jsx";
import Login from "./page/Login.jsx";
window.siteUrl = 'https://www.peji.ir';

const root = createRoot(document.getElementById('root'));

/*root.render(
  <Layout1><Loading /></Layout1>
);*/

let iData = 0;
window.getData = getData;
window.cacheData = {};

async function getData( to ) {
  let data = window.cacheData[encodeURIComponent(to)];

  if( data ) {
     function promiseCache(data) {
        return new Promise( function( resolve, reject ) {
            resolve( data );
        })
    }

    return promiseCache(data);
  }
  let res = {};
  try {
    data = await fetch(siteUrl+to+'?api=1&i='+iData );
    res = await data.json();
  } catch( e ) {

  }
  iData++;
  window.scrollTo(0,0);
  return res;
}

window.menus = [];
window.lastPosts = [];
window.settings = {};
window.authUser = {};
window.cats = [];

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutLeftSide />}>
          <Route index element={<Home />} />
          <Route path="user/login" element={<Login />} />
          <Route path="index/page/:id" element={<Home />} />
          <Route path="index/cat/:id" element={<Home />} />
          <Route path="index" element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

window.datas = function() {
  return window.cacheData[encodeURIComponent(window.location.pathname)]?window.cacheData[encodeURIComponent(window.location.pathname)]:window;
}

getData(window.location.pathname).then(function( data ) {
  window.cacheData[encodeURIComponent(window.location.pathname)] = data;
  for( let x in data ) {
    window[x] = data[x];
  }
  root.render(
    <App />
  );
});


