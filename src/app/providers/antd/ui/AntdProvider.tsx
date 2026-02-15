import React from "react";
import { ConfigProvider } from "antd";
import { antdTheme } from "../config/theme";

export const AntdProvider: React.FC = ({ children }) => {
  return <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>;
};
