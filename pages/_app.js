import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer: {

  }
})

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
    </>
  )
}

export default MyApp
