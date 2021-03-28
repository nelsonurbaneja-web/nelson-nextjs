import PageHeader from "../components/PageHeader/PageHeader"
import Nprogress from 'nprogress'
import Router from 'next/router'
import '../styles/styles.scss'

Router.onRouteChangeStart = url => {
  console.log(url)
  Nprogress.start();
}

Router.onRouteChangeComplete = () => Nprogress.done()
Router.onRouteChangeError = () => Nprogress.done()

const App = ({ Component, pageProps }) => {
 
  return (
    <>
    <PageHeader/>
    <Component {...pageProps} />
    </>
  )
}

export default App
