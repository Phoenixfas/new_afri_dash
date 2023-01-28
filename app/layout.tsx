'use client'
import "../styles/globals.css"
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { store } from './redux/store'
import { Provider } from 'react-redux'

import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const client = new ApolloClient({
    uri: "https://api.afriopia.com/graphql",
    // uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            articles: {
              merge(existing, incoming) {
                return incoming;
              },
            },
            subscribers: {
              merge(existing, incoming) {
                return incoming;
              },
            },
          },
        },
      },
    }),
  });

  return (
    <>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <html>
            <head />
            <body className="flex">
              <Sidebar />
              <div className="h-screen flex-1 overflow-y-scroll">
                <Header />
                {children}
                <Footer />
              </div>
            </body>
          </html>
        </ApolloProvider>
      </Provider>
    </>
  )
}
