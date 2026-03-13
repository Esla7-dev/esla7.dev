import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const HEADER_OFFSET = 80;
const MAX_ATTEMPTS = 8;
const RETRY_DELAY = 50;

const scrollToHash = (hash: string | null) => {
  if (!hash) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const element = document.querySelector(hash);
  if (!element) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({
    top: elementPosition - HEADER_OFFSET,
    behavior: "smooth",
  });
};

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    let attempts = 0;
    let timer = 0;

    const attemptScroll = () => {
      attempts += 1;
      if (!hash) {
        scrollToHash(null);
        return;
      }

      const element = document.querySelector(hash);
      if (element) {
        scrollToHash(hash);
        return;
      }

      if (attempts < MAX_ATTEMPTS) {
        timer = window.setTimeout(attemptScroll, RETRY_DELAY);
      } else {
        scrollToHash(null);
      }
    };

    timer = window.setTimeout(attemptScroll, 0);
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
