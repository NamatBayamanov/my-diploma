import Nav from "../Nav/Nav";
// import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import classes from "./Layout.module.scss";
import Brands from "../Brands/Brands";
import Tooltip from "../Tooltip/Tooltip";
import Drawer from "../Drawer/Drawer";


function Layout({children}) {
  return ( 
    <>
      <main className={classes.Layout}>
        
        <Tooltip/>

        <Drawer/>
        
        {/* <Nav/> */}
        {/* <Brands /> */}

        <div className={classes.content} id="Layout">
          {children}
        </div>

        
        
        <Footer/>
      </main>
    </>
  );
}

export default Layout;