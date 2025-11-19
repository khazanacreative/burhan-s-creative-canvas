import { useState, useEffect } from 'react';

export const useEditableArray = <T>(key: string, defaultValue: T[]) => {
  const [items, setItems] = useState<T[]>(defaultValue);

  useEffect(() => {
    const stored = localStorage.getItem(`array_${key}`);
    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch (e) {
        setItems(defaultValue);
      }
    }
  }, [key]);

  const updateItems = (newItems: T[]) => {
    setItems(newItems);
    localStorage.setItem(`array_${key}`, JSON.stringify(newItems));
  };

  const addItem = (item: T) => {
    const newItems = [...items, item];
    updateItems(newItems);
  };

  const updateItem = (index: number, item: T) => {
    const newItems = [...items];
    newItems[index] = item;
    updateItems(newItems);
  };

  const deleteItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    updateItems(newItems);
  };

  return { items, addItem, updateItem, deleteItem, updateItems };
};
