import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";

import tailwindStyles from "./tailwind.css";

import * as Fathom from "fathom-client";

import { useEffect } from "react";

import { Toaster } from "react-hot-toast";

const title =
  "startup.security | Security for startups who've built something awesome.";
const description = "You built something awesome. Let's make sure it's secure.";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: title,
  viewport: "width=device-width,initial-scale=1",
  description: description,
  "og:title": "Security for startups who've built something awesome.",
  "og:description": description,
  "og:image": "https://startup.security/images/ssec_meta.png",
  "og:url": "https://startup.security",
});

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
      includedDomains: ["startup.security", "www.startup.security"],
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
