import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, NotFoundPage, UsersPage } from "@/pages";
import { AppLayout } from "@/app/layouts/AppLayout";

export const AppRouter = () => {
  const isAuth = true;

  const handleLogout = () => {
    console.log("logout");
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout isAuth={isAuth} onLogout={handleLogout} />}>
          <Route path='/' element={<LoginPage />} />
          <Route path='/users' element={<UsersPage />} />
        </Route>

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
