import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginPage, NotFoundPage, UsersPage } from "@/pages";
import { AuthorizedContainer } from "@/app/containers/AuthorizedContainer";
import { UnauthorizedContainer } from "@/app/containers/UnauthorizedContainer";

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<AuthorizedContainer />}>
        <Route index element={<Navigate to='users' replace />} />
        <Route path='users' element={<UsersPage />} />
      </Route>

      <Route path='auth' element={<UnauthorizedContainer />}>
        <Route index element={<Navigate to='login' replace />} />
        <Route path='login' element={<LoginPage />} />
      </Route>

      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
