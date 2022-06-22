import classes from "./Warranty.module.scss";

function Warranty() {
  return (
    <>
      <div className={classes.Warranty}>
        <div className={classes.background}>
          <div className="container">
            <div className={classes.content}>
              <h1>Warranty and returns</h1>
              <p>
                Mobila.shop sells goods in accordance with the Consumer Rights
                Protection Act and these rules for the sale and exchange /
                return of goods. In some cases, other arrangements may apply.
              </p>
              <p>
                Mobila.shop provides a guarantee for all products sold; Warranty
                maintenance of equipment is carried out in authorized service
                centers.
              </p>
              <p>
                <strong>
                  In the case of a warranty claim, goods are received and issued
                  during the service department's working hours, on weekdays
                  from 10:00 to 19:00 (Moscow time).
                </strong>
                Return, exchange and acceptance for warranty repair of goods is
                carried out in the presence of Warranty coupons, as well as
                documents confirming the purchase of goods - a cash receipt or
                sales receipt.
              </p>
              <p>
                <strong>
                  All the information you are interested in, as well as the
                  status of the repair, you can quickly check by phone:
                </strong>
              </p>
              <ul>
                <li>+996 709 266 729 - all of Russia. The call is free.</li>
              </ul>

              <article>
                <h2>
                  <strong>
                    Please read the following return information carefully:
                  </strong>
                </h2>
                <ol>
                  <li>
                    If the buyer purchased a product of inadequate quality from
                    Mobila.shop, Mobila.shop is liable in accordance with the
                    Law on the Protection of Consumer Rights.
                  </li>
                  <li>
                    If the purchased product is of good quality, but is not
                    considered a technically complex product and does not fit in
                    any way, you can return or exchange it within 14 (fourteen)
                    days, excluding the day of purchase! ATTENTION! At the same
                    time, the goods must be in proper condition - not used, the
                    packaging is preserved with all seals and labels.
                  </li>
                  <li>
                    If the product was damaged after purchase due to the fault
                    of the buyer, as well as due to the actions of other people
                    or extraordinary circumstances, no exchange or return of
                    such goods is possible.
                  </li>
                  <li>
                    If the product belongs to technically complex products, the
                    full list of which is established by Decree of the
                    Government of the Russian Federation of November 10, 2011 N
                    924, if any malfunctions are found, you can return or
                    exchange it within 15 days from the date of purchase. After
                    the expiration of the established period of 15 days, it is
                    possible to return or exchange the goods in three cases:
                  </li>

                  <ul className={classes.list}>
                    <li>if a serious defect has been found;</li>
                    <li>
                      if the defect was not eliminated within the terms
                      established by the Law;
                    </li>
                    <li>
                      if, due to repeated elimination of defects, the product
                      was not usable for a total of more than 30 days during
                      each year of the warranty period. 5. After the buyer has
                      received the goods at his disp
                    </li>
                  </ul>

                  <li>
                    After the buyer has received the goods at his disposal, it
                    is considered that Mobila.shop has fulfilled the obligation
                    to transfer the goods to the buyer.
                  </li>
                  <li>
                    Delivery of goods is paid by the buyer, in the absence of
                    other agreements or promotions.
                  </li>

                  <li>
                    If the buyer refuses to accept the purchased goods on time,
                    this is considered a violation of the sales contract. In
                    such a case, mobila.shop may require the buyer to accept the
                    goods or withdraw from the contract of sale.
                  </li>
                  <li>
                    You can exchange or return goods purchased in mobila.shop
                    directly at the network store in the territory of the
                    Russian Federation where the goods were purchased. Exchange
                    and return conditions are the same for all stores.
                  </li>

                  <li>
                    When returning the goods, the money will be returned in the
                    same way that the goods were paid for. Depending on the
                    payment method, it may take up to 10 days for the buyer to
                    receive the funds.
                  </li>
                </ol>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Warranty;
