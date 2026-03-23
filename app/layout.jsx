'use client';

import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import GlobalStyles from "./theme/GlobalStyles";

const geistSans = Geist({variable: "--font-geist-sans", subsets: ["latin"]});

const geistMono = Geist_Mono({variable: "--font-geist-mono", subsets: ["latin"]});

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body className={
                `${
                    geistSans.variable
                } ${
                    geistMono.variable
                } antialiased`
            }>
                <GlobalStyles/>
                <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
                    <Navbar/>
                    <main style={{flex: 1}}>
                        {children}
                    </main>
                    <Footer/>
                </div>
                <WhatsAppFloat />
            </body>
        </html>
    );
}
