
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Razorpay() {
  const [loading, setLoading] = useState(false);
  const [orderAmount, setOrderAmount] = useState(0);
  const [orders, setOrders] = useState([]);
  const [order_id, setorder_id] = useState();
  const [key,setkey] = useState();
  const [amount,setamount] = useState();
  const [currency,setcurrency] = useState();

  async function fetchOrders() {
    const res = await axios.get('/api/billing/bill/');
    setOrders([res.data.razorpay]);
  }
  useEffect(() => {
    fetchOrders();
  }, []);

  function loadRazorpay() {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onerror = () => {
      alert('Razorpay SDK failed to load. Are you online?');
    };
    script.onload = async () => {
      try {
        const res = await axios.get(`/api/billing/bill/`,
        {mode:'cors'},{ withCredentials: true });
        setorder_id(res.data.razorpay.order_id)
        setkey(res.data.razorpay.key)
        setcurrency(res.data.razorpay.currency)
        setamount(res.data.razorpay.amount)
        const data = JSON.stringify(res.data);
        console.log(data);
        setLoading(true);

        const options = {
          key: key,
          amount: amount.toString(),
          currency: currency,
          name: 'example name',
          description: 'example transaction',
          order_id: order_id,
          handler: async function (response) {
            const result = await axios.post('api/ billing/ payment_callback/', {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              order_id : order_id //order id of notes
            });
            alert(result.data.msg);
            fetchOrders();
          },
        };

        setLoading(false);
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (err) {
        alert(err);
        setLoading(false);
      }
    };
    document.body.RazorpayendChild(script);
  }
  return (
    <div className="Razorpay">
      <h1> Razorpay Example: Node & React</h1>
      <hr />
      <div>
        <h2> Pay Order</h2>
        <label>
          Amount:{' '}
          <input
            placeholder="INR"
            type="number"
            value={orderAmount}
            onChange={(e) => setOrderAmount(e.target.value)}
          ></input>
        </label>

        <button disabled={loading} onClick={loadRazorpay}>
          Razorpay
        </button>
        {loading && <div>Loading...</div>}
      </div>
      <div className="list-orders">
        <h2>List Orders</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>AMOUNT</th>
              <th>ISPAID</th>
              <th>RAZORPAY</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((x) => (
              <tr key={x._id}>
                <td>{x._id}</td>
                <td>{x.amount / 100}</td>
                <td>{x.isPaid ? 'YES' : 'NO'}</td>
                <td>{x. razorpay_payment_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Razorpay;
