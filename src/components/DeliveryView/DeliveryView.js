import classes from "./DeliveryView.module.scss";

import visaImage from "../../assets/delivery/visa.webp";
import webmoneyImage from "../../assets/delivery/webmoney.webp";
import yandexmoneyImage from "../../assets/delivery/yandexmoney.webp";
import qiwiImage from "../../assets/delivery/qiwi.webp";
import serbankImage from "../../assets/delivery/sberbank.webp";
import alphaImage from "../../assets/delivery/alpha.webp";
import btb24Image from "../../assets/delivery/btb24.webp";
import russianImage from "../../assets/delivery/russionbank.webp";
import contactImage from "../../assets/delivery/contact.webp";
import emailImage from "../../assets/delivery/email.webp";
import belineImage from "../../assets/delivery/beline.webp";


function DeliveryView() {
  return (
    <>
      <div className={classes.DeliveryView}>
        <div className={classes.background}>
          <div className="container">
            <div className={classes.content}>
              <h2>Shipping and payment</h2>
              <h3>Delivery methods</h3>

              <p>
                You can pick up your order at one of the hundreds of pickup
                points across the country. Or order delivery to any region of
                Russia, Belarus, Kazakhstan, Armenia or Kyrgyzstan. Delivery is
                carried out by courier service to your home or office.
                <strong>Delivery cost - 390 rubles .</strong>
              </p>
              <p>
                We deliver purchases only to real addresses. Couriers do not
                meet with buyers in the subway, train stations and other public
                places. We kindly ask you not to delay the courier, check and
                pay for the purchase within 20 minutes after receiving it.
                Thanks a lot in advance! The courier will hand over the
                consignment note and warranty card to you along with the
                purchase.
              </p>

              <p>
                When placing an order with an advance payment in the amount of
                50,000 rubles. receipt of goods is possible only upon
                presentation of an identity document to the courier.
              </p>
              <p>
                Please note that orders paid before receipt, we send for
                delivery no earlier than the next business day after receipt of
                payment to our account.
              </p>

              <h2>Payment Methods</h2>
              <p>
                We will be grateful to you if, in case of cash payment, you will
                prepare the money without change.
              </p>
              <article>
                <h3>Bank cards</h3>
                <div className={classes.img__flex}>
                  <div className={classes.img__container}>
                    <img alt="#" src={visaImage} />
                  </div>
                </div>
              </article>

              <article>
                <h3>Online payment systems</h3>
                <div className={classes.img__flex}>
                  <div className={classes.img__container}>
                    <img alt="#" src={webmoneyImage} />
                  </div>
                  <div className={classes.img__container}>
                    <img alt="#" src={yandexmoneyImage} />
                  </div>
                  <div className={classes.img__container}>
                    <img alt="#" src={qiwiImage} />
                  </div>
                </div>
              </article>

              <article>
                <h3>Communication salons</h3>
                <div className={classes.img__flex}>
                  <p>Евросеть</p>
                  <p>Связной</p>
                </div>
              </article>

              <section>
                <h3>Internet banking</h3>
                <div className={classes.img__flex}>
                  <div className={classes.img__container}>
                    <img alt="#" src={serbankImage} />
                  </div>

                  <div className={classes.img__container}>
                    <img alt="#" src={alphaImage} />
                  </div>
                  <div className={classes.img__container}>
                    <img alt="#" src={btb24Image} />
                  </div>
                  <div className={classes.img__container}>
                    <img alt="#" src={russianImage} />
                  </div>
                </div>
              </section>

              <section>
                <h3>Money transfers</h3>
                <div className={classes.img__flex}>
                  <div className={classes.img__container}>
                    <img alt="#" src={contactImage} />
                  </div>

                  <div className={classes.img__container}>
                    <img alt="#" src={emailImage} />
                  </div>
                </div>
              </section>

              <section>
                <h3>Cellular operators</h3>
                <div className={classes.img__container}>
                  <img alt="#" src={belineImage} />
                </div>
              </section>

              <article>
                <p>
                  Payment by bank cards and electronic money is carried out by
                  the settlement center "PayMaster" .
                </p>
                <p>
                  All payments are absolutely safe and take place on a secure
                  page of the system. The company does not have access to your
                  card details. If it is possible to conduct transactions using
                  3-D Secure technology using your card, you will be
                  automatically redirected to your bank's website to confirm the
                  transaction.
                </p>
                <p>
                  When paying by credit card, upon receipt of the goods, it may
                  be necessary to present an identity document and the card from
                  which the payment was made. Check with the store managers when
                  calling for details of delivery and payment.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeliveryView;
