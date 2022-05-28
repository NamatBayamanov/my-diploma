import Header from "../../components/Header/Header";
import classes from "./Cases.module.scss";

import casesImage from "../../assets/cases.jpg";


function Cases() {

  

  const styles = [
    {
      color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
      // color: "red",
    },
  ];

  for (let i = 0; i < styles.length; i++) {
    const color = styles[i];
    color.style = {color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`};
  };

  

  return ( 
    <>
      <div className={classes.Cases}>
        <div className={classes.background}>
          <div className="container">
            <div className={classes.content}>

              <Header image={casesImage}>
                <label style={styles[0]}>
                  Welcome to this page ↓
                </label>
              </Header>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cases;