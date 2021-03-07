import { CREATE_ORDER, CLEAR_CART, CLEAR_ORDER, FETCH_ORDERS } from "../types";
import response from "../data.json"
let orderFetch=undefined;
export const createOrder = (order) => (dispatch) => {
  // Sending Data to an Api
 /* fetch("/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: CREATE_ORDER, payload: data });
      dispatch({ type: CLEAR_CART });
    });*/
  // Sending Data using the browser local storage
  localStorage.setItem("orderItems", JSON.stringify(order));
  orderFetch=order;

  const data=JSON.parse(localStorage.getItem("orderItems"));
  dispatch({ type: CREATE_ORDER, payload: data });
  localStorage.clear("cartItems");
  dispatch({ type: CLEAR_CART });


};
export const clearOrder = () => (dispatch) => {
  dispatch({ type: CLEAR_ORDER });
};
export const fetchOrders = () => (dispatch) => {
  // Getting Data from an Api


  /*fetch("/api/orders")
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("FetchorderItems", JSON.stringify(orderFetch));
      dispatch({ type: FETCH_ORDERS, payload: data });

    });*/
 // Getting Data from browser LocalStorage


 /* console.log("beginning",orderFetch)
  localStorage.setItem("FetchorderItems", JSON.stringify(orderFetch));
 // console.log("setItem",JSON.stringify(orderFetch))
  const array=[];
  //let orderdata=localStorage.getItem("FetchorderItems") ? array.push(JSON.parse(localStorage.getItem("FetchorderItems"))):[];
  let orderdata= array.push(JSON.parse(localStorage.getItem("FetchorderItems") || "[]"));
  
  console.log(array)*/
  dispatch({ type: FETCH_ORDERS, payload:[]});
};
