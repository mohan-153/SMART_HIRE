"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
// Loading overlay removed — keep context API but do not render global loader

const LoadingContext = createContext({ loading: false, setLoading: () => {} });

export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // turn off the loader after navigation completes (pathname change)
    setLoading(false);
  }, [pathname]);

  useEffect(() => {
    // show loader when user clicks an internal link (<a href="/...">)
    const onClick = (e) => {
      // only left-click without modifier
      if (e.defaultPrevented) return;
      if (e.button !== 0) return;
      if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;

      const anchor = e.target.closest && e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      const target = anchor.getAttribute("target");
      const download = anchor.getAttribute("download");

      if (!href) return;
      if (target === "_blank" || download !== null) return;

      // treat as internal when href starts with / or same origin
      try {
        const url = new URL(href, window.location.href);
        if (url.origin === window.location.origin) {
          // schedule asynchronously to avoid React "useInsertionEffect must not schedule updates" errors
          if (typeof requestAnimationFrame === "function") {
            requestAnimationFrame(() => setLoading(true));
          } else {
            setTimeout(() => setLoading(true), 0);
          }
        }
      } catch (err) {
        // if invalid URL, ignore
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    // intercept history API so programmatic navigations also show loader
    const origPush = window.history.pushState;
    const origReplace = window.history.replaceState;

    function trySetLoading(args) {
      try {
        const url = args[2];
        if (!url) return;
        const parsed = new URL(url, window.location.href);
        if (parsed.origin === window.location.origin) {
          if (typeof requestAnimationFrame === "function") {
            requestAnimationFrame(() => setLoading(true));
          } else {
            setTimeout(() => setLoading(true), 0);
          }
        }
      } catch (e) {
        // ignore
      }
    }

    window.history.pushState = function (...args) {
      trySetLoading(args);
      return origPush.apply(this, args);
    };

    window.history.replaceState = function (...args) {
      trySetLoading(args);
      return origReplace.apply(this, args);
    };

    return () => {
      window.history.pushState = origPush;
      window.history.replaceState = origReplace;
    };
  }, []);

  // reference-counted loading helpers so pages can signal readiness
  const loadingCountRef = React.useRef(0);

  const startLoading = () => {
    loadingCountRef.current += 1;
    if (typeof requestAnimationFrame === "function") {
      requestAnimationFrame(() => setLoading(true));
    } else {
      setTimeout(() => setLoading(true), 0);
    }
  };

  const finishLoading = () => {
    loadingCountRef.current = Math.max(0, loadingCountRef.current - 1);
    if (loadingCountRef.current === 0) {
      // hide after navigation or immediately
      setLoading(false);
    }
  };

  return (
    <LoadingContext.Provider value={{ loading, setLoading, startLoading, finishLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  return useContext(LoadingContext);
}

export default LoadingContext;
