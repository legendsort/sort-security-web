import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";

import type { MetaFunction, LinksFunction } from "remix";

import { Toaster } from "react-hot-toast";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "0xMidnight | Founding Security",
  viewport: "width=device-width,initial-scale=1",
});

import tailwindStyles from "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStyles },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap",
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Toaster />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
