const getOrders = async (userID) => {
  const response = await fetch(`/orders/${userID}`, {
    method: "GET",
  });
  return await response.json();
};

// eslint-disable-next-line
export default { getOrders };
