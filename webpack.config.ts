import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import dotenv from "dotenv";
import webpack from "webpack";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

export default (env: any, argv: any) => {
  const isDev = argv.mode === "development";

  return {
    mode: isDev ? "development" : "production",

    entry: "./src/index.tsx",

    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      publicPath: "/",
      clean: true,
    },

    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      plugins: [new TsconfigPathsPlugin()],
    },

    module: {
      rules: [
        { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
        { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
      new webpack.DefinePlugin({
        "process.env.API_BASE_URL": JSON.stringify(process.env.API_BASE_URL),
      }),
    ],

    devServer: {
      historyApiFallback: true,
      port: 3000,
      open: true,
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
      },
    },
  };
};
