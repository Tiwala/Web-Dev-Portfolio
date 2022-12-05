import BackgroundEffect from './BackgroundEffect';

const Layout = ({children}) => {


  return (
    <>
        <BackgroundEffect/>
        {children}
    </>
  )
}

export default Layout