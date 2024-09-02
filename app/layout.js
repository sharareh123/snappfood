'use client'
import { Provider } from "react-redux";
import Header from "./component/Header";
import { store } from "@/data/redux/store";
import './globals.css'; 
import Head from "next/head";
import Footer from "./component/Footer";


export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100..900&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Provider store={store}>
          <Header/>
          {children}
          <Footer/>
        </Provider>
      </body>
    </html>
  );
}


