import "@/globals.css";

import Header from "@/components/organism/Header";
import { ThemeProvider } from "@/context/ThemeContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>App Gallery</title>
      </head>
      <body className="dark:bg-gray-900 dark:text-white">
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
