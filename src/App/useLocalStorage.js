import React from "react";

function useLocalStorage(itemName, initialValue) {
  const localStorageItems = localStorage.getItem(itemName);

  let parsedItems;
  if (!localStorageItems) {
    localStorage.setItem(newItem, JSON.stringify(initialValue));
    parsedItems = initialValue;
  } else {
    parsedItems = JSON.parse(localStorageItems);
  }

  const [item, setItem] = React.useState(parsedItems);

  //Funcion para actualizar estado con persistencia
  const saveItems = (newItem) => {
    localStorage.setItem("TODOS_V1", JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItems];
}

export { useLocalStorage };
