"use client"

import React from 'react'
import '../globals.css';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Layout } from '../Components/layout/layout';
import ChartAreaPage from "../Components/charts/page"
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';



const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {},
  },
});

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {},
  },
});
const Dashboard = () => {
  return (
    <div>
      <SignedIn>
        <div>
          <NextThemesProvider
            defaultTheme="system"
            attribute="class"
            value={{
              light: lightTheme.className,
              dark: darkTheme.className,
            }}
          >
            <NextUIProvider>
              <Layout>
                <div className="flex flex-wrap">
                  <div className="w-full sm:w-1/2">
                    <ChartAreaPage />
                  </div>
                </div>
              </Layout>
            </NextUIProvider>
          </NextThemesProvider>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  )
}

export default Dashboard