import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Paths } from "./constants";
import { MainLayout } from "./components";
import { Home, About, ContactUs, Partners, Products, Services, ThankYou, OrderCall } from "./pages";

const App: React.FC = () => {
  return (
    <div className="App">
        <MainLayout>
          <Routes>
            <Route path={Paths.Home} element={<Home />} />
            <Route path={Paths.About} element={<About />} />
            <Route path={Paths.Products} element={<Products/>} />
            <Route path={Paths.Services} element={<Services />} />
            <Route path={Paths.Partners} element={<Partners />} />
            <Route path={Paths.ContactUs} element={<ContactUs/>} />
            <Route path={Paths.ThankYou} element={<ThankYou/>} />
            <Route path={Paths.OrderCall} element={<OrderCall/>} />
          </Routes>
        </MainLayout>
    </div>
  );
}

export default App;
