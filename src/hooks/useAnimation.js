import { useState, useEffect } from "react";

export default function useAnimation(invisible) {
  const [shouldRender, setShouldRender] = useState(invisible);

  useEffect(() => {
    invisible && setShouldRender(true);
  }, [invisible]);

  const onAnimationEnd = () => !invisible && setShouldRender(false);

  return { shouldRender, onAnimationEnd };
}
