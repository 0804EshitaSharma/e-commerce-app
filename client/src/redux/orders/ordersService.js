import { APIPaths } from "../../utils/APIPaths";
import axios from "axios";

const getOrders = async (userID) => {
  const response = await axios.get(`${APIPaths.Orders}/${userID}`);
  const fulfilledResponse = await response.data;
  return fulfilledResponse;
};
const returnOrder = async (orderID) => {
  const response = await axios.delete(`${APIPaths.Orders}/${orderID}`);
  return await response.data;
};

// eslint-disable-next-line
export default { getOrders, returnOrder };
