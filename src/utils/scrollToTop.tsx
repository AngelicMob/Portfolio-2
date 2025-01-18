import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const body = window.document.querySelector(".scrollToTop");
    if (body) {
      if (search === "?Attributes=") {
        body.scrollTo(0, body.scrollHeight);
      } else {
        body.scrollTo(0, 0);
      }
    }
  }, [pathname]);

  return null;
}
