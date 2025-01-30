import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useHref,
  useNavigate,
} from "react-router";

import { RouterProvider } from "react-aria-components";

// import Navbar from "./components/Navbar";
import Queuebar from "./components/Queuebar";
import { useState } from "react";
import Index from "./routes/Index";
import arithmatic from "./scripts/arithmatic";

export const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
  },
  {
    rel: "stylesheet",
    href: "https://rsms.me/inter/inter.css",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Dongle&display=swap",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png",
  },
  {
    rel: "manifest",
    href: "/site.webmanifest",
  },
];

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Grind-It</title>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  let navigate = useNavigate();

  const [queue, setQueue] = useState([]);

  const addItem = (newItem) => {
    if (!queue.some((item) => item.id === newItem.id)) {
      setQueue((prevQueue) => [...prevQueue, newItem]);
    }
  };

  const removeItem = (index) => {
    setQueue((prevQueue) => prevQueue.filter((_, i) => i !== index));
  };
  return (
    <RouterProvider navigate={navigate} useHref={useHref}>
      <div className="flex flex-row">
        {/* <Navbar /> */}
        <div className="mx-auto mt-4">
          <Index addItem={addItem} />
        </div>
        <Queuebar queue={queue} removeItem={removeItem} />
      </div>
    </RouterProvider>
  );
}

export function ErrorBoundary({ error }) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="container mx-auto p-4 pt-16">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
