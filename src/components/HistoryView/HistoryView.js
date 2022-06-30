import axios from "axios";
import { useEffect, useState } from "react";
import { getProducts } from "../../data/Products";
import { useSelector } from "react-redux";
import classes from "./HistoryView.module.scss";
export default function HistoryView() {
  const [orders, setOrders] = useState(null);
  const products = getProducts();
  const localId = useSelector(store => store.auth.localId);

  useEffect(() => {
    axios.get('https://my-diploma-f8e4b-default-rtdb.firebaseio.com/orders.json?orderBy="localId"&equalTo="' + localId + '"')
      .then(response => setOrders(response.data));
  }, [localId]);

  let output = "No items in the history";
  if (orders !== null) {
    output = Object.keys(orders).map(orderId => (
      <div key={orderId}>
        <ul>
          {Object.keys(orders[orderId].items).map(itemId => (
            <li key={itemId}>{products[itemId]}: {orders[orderId].items[itemId]}</li>
          ))}
        </ul>
        <hr />
      </div>
    ));
  }

  return (
    <div className={classes.HistoryView}>
      <div className={classes.background}>
        <div className="container">
          <div className={classes.content}>
          {output}
          </div>
        </div>
      </div>
    </div>
  );
}
