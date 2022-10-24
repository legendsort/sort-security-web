import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "remix";

import * as Fathom from "fathom-client";

import { useEffect, useState } from "react";

import type { MetaFunction, LinksFunction } from "remix";

import { Toaster } from "react-hot-toast";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Startup.security | Founding Security",
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
    href: "https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;700&display=swap",
  },
];

export default function App() {
  let location = useLocation();

  useEffect(() => {
    // Initialize Fathom when the app loads
    // Example: yourdomain.com
    //  - Do not include https://
    //  - This must be an exact match of your domain.
    //  - If you're using www. for your domain, make sure you include that here.
    Fathom.load("TAFNJQKE", {
      includedDomains: [
        "startup.security",
        "www.startup.security"
      ],
    });
    Fathom.trackPageview();
  }, []);

  useEffect(() => {
    Fathom.trackPageview();
  }, [location]);

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
