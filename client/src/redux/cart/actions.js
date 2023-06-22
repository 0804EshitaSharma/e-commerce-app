export const addItem = (itemInfo) => {
  return {
    type: "ADD",
    payload: itemInfo,
  };
};

export const removeAll = () => {
  return {
    type: "REMOVE_ALL",
  };
};

export const removeOne = (itemToRemove) => {
  return {
    type: "REMOVE_ONE",
    payload: itemToRemove,
  };
};
