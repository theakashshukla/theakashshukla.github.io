import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/Navigation";
import { ThemeProvider } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akash Shukla - Software Engineer",
  description: "Akash Shukla is a software engineer based in India. He loves to build things for the web. Currently, he is working at a startup called Indian Robotics Solution as a Full Stack Developer.",
  keywords: [ "Akkash Shukla", "IRS",  "India"],
  

  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="m-6">
            <SiteHeader />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
