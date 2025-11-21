import { useState, useEffect } from "react";

function useMediaQuery(query) {
  const getMatches = () =>
    typeof window !== "undefined"
      ? window.matchMedia(query).matches
      : false;

  const [matches, setMatches] = useState(getMatches);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(query);
    const handler = () => setMatches(mediaQuery.matches);

    mediaQuery.addEventListener("change", handler);
    handler(); // set initial value

    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

export default useMediaQuery;
