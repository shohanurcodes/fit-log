import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "@/app/components/shared/Navbar";
import Footer from "@/app/components/shared/Footer";
import { WorkoutProvider } from "@/context/WorkoutContext";

export const metadata: Metadata = {
  title: "FitLog",
  description: "Workout Library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <WorkoutProvider>
          <Navbar />

          {children}

          <Footer />

          <ToastContainer
            position="top-right"
            autoClose={2500}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
          />
        </WorkoutProvider>
      </body>
    </html>
  );
}