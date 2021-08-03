import { useState } from "react";
export default function useToggleModal() {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  return { quantity, increaseQuantity, decreaseQuantity };
}
