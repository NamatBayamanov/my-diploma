import classes from "./Header.module.scss";

// import smartphonesImage from "../../assets/smartphones.jpg";
// import casessImage from "../../assets/cases.jpg";

// import chargingImage from "../../assets/charging.jpg";

// import headphonesImage from "../../assets/headphones.jpg";

// import stickersImage from "../../assets/stickers.jpg";
// import casesImage from "../../assets/cases.jpg";



function Header({image, children, title, text, image2, image3}) {


  return ( 
    <>  
      <div className={classes.Header}>
        <div className={classes.background}>
          <div className="container">
            <article className={classes.content}>
              <div className={classes.img__container}>
                <img src={image} alt="#"/>
              </div>
              <p>
                <p>
                {children}
                </p>
                <span>
                  &nbsp;
                </span>
                <aside>
                  
                </aside>
              </p>
            </article>

          </div>
        </div>
      </div>



    </>
  );
}

export default Header;




// function Header() {
//   let cards = [
//     {
//       title: "Mountain View",
//       copy: "Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains",
//       button: "View Trips",
//     },
//     {
//       title: "To The Beach",
//       copy: "Plan your next beach trip with these fabulous destinations",
//       button: "View Trips",
//     },
//     {
//       title: "Desert Destinations",
//       copy: "It's the desert you've always dreamed of",
//       button: "Book Now",
//     },
//     {
//       title: "Explore The Galaxy",
//       copy: "Seriously, straight up, just blast off into outer space today",
//       button: "Book Now",
//     },
//   ];

//   const cards2 = cards.slice(0, 1).map((card) => {
//     return (
//       <div className={classes.Header}>
//         <div className={classes.page_content}>
//           <div className={classes.card}>
//             <div className={classes.content}>
//               <h2 className={classes.title}></h2>
//               <p className={classes.copy}></p>
//               {/* <div>
//                 <button className={classes.btn}>{card.button}</button>
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   });

//   const cards3 = cards2;

//   return <div>{cards3}</div>;
// }

// export default Header;
