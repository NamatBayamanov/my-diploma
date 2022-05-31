import Nav from "../Nav/Nav";
// import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import classes from "./Layout.module.scss";
import Brands from "../Brands/Brands";


function Layout({children}) {
  return ( 
    <>
      <main className={classes.Layout}>
        
        <Nav/>
        <Brands />

        <div className={classes.content} id="Layout">
          {children}
        </div>

        
        
        <Footer/>
      </main>
    </>
  );
}

export default Layout;