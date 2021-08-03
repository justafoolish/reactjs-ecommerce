import { useState } from "react";
export default function useToggleModal() {
  const [toggleModal, setToggleModal] = useState(false);
  const showModal = () => setToggleModal(true);
  const hideModal = () => setToggleModal(false);

  return { toggleModal, showModal, hideModal };
}
