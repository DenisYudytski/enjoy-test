import React from "react";
import { QueryProvider } from "./query";
import { AntdProvider } from "./antd";
import { App as AntdApp } from "antd";

export const Providers = ({ children }: any) => {
  return (
    <AntdApp>
      <AntdProvider>
        <QueryProvider>{children}</QueryProvider>
      </AntdProvider>
    </AntdApp>
  );
};
