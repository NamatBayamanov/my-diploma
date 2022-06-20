import Nav from "../Nav/Nav";
// import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import classes from "./Layout.module.scss";
import Brands from "../Brands/Brands";
import Tooltip from "../Tooltip/Tooltip";
import Drawer from "../Drawer/Drawer";
import { useState } from "react";


function Layout({children}) {
  const [drawer, setDrawer] = useState(false);

  const onDrawerToggle = () => {
    setDrawer(!drawer);
  }
  return ( 
    <>
      <main className={classes.Layout}>
        
        <Tooltip toggle={onDrawerToggle}/>

        <Drawer toggle={onDrawerToggle} state={drawer}/>
        
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