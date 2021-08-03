import { useState } from "react";
import { Heart, HeartFill } from "react-bootstrap-icons";

export default function useToggleHeart(heart) {
  const [activeWhistList, setActiveWhistList] = useState(() => {
    if (heart) return <HeartFill size={25} />;
    else return <Heart size={25} />;
  });
  const changeHeart = () => {
    if (heart) setActiveWhistList(<Heart size={25} />);
    else setActiveWhistList(<HeartFill size={25} />);
  };

  const reChangeHeart = () => {
    if (heart) setActiveWhistList(<HeartFill size={25} />);
    else setActiveWhistList(<Heart size={25} />);
  };

  return { activeWhistList, changeHeart, reChangeHeart };
}
