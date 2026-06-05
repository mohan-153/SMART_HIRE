"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function ContentLoader({ children }) {
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    // reset when route changes
    setLoaded(false);

    const el = containerRef.current;
    if (!el) return;

    // helper to check images and attach listeners
    let remaining = 0;
    const listeners = new Set();

    const checkImages = () => {
      const imgs = Array.from(el.querySelectorAll("img"));
      remaining = 0;
      imgs.forEach((img) => {
        if (img.complete && img.naturalWidth !== 0) return;
        remaining += 1;
        if (!listeners.has(img)) {
          const onLoad = () => {
            remaining = Math.max(0, remaining - 1);
            listeners.delete(img);
            img.removeEventListener("load", onLoad);
            img.removeEventListener("error", onLoad);
          };
          img.addEventListener("load", onLoad);
          img.addEventListener("error", onLoad);
          listeners.add(img);
        }
      });
      return remaining;
    };

    // idle timer: wait for DOM to stabilize (no mutations) then consider loaded
    let idleTimer = null;
    const IDLE_MS = 250;
    const MAX_WAIT_MS = 8000;
    let maxTimer = null;

    const tryFinish = () => {
      // if no pending images, declare loaded
      if (remaining === 0) {
        clearTimeout(idleTimer);
        clearTimeout(maxTimer);
        setLoaded(true);
      }
    };

    const scheduleIdle = () => {
      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        checkImages();
        tryFinish();
      }, IDLE_MS);
    };

    // initial check
    checkImages();
    scheduleIdle();

    // observe mutations: when DOM changes, re-check images and reschedule idle
    const mo = new MutationObserver(() => {
      checkImages();
      scheduleIdle();
    });
    mo.observe(el, { childList: true, subtree: true, attributes: true });

    // safety max timeout to avoid stuck loader
    maxTimer = setTimeout(() => {
      clearTimeout(idleTimer);
      setLoaded(true);
    }, MAX_WAIT_MS);

    return () => {
      if (idleTimer) clearTimeout(idleTimer);
      if (maxTimer) clearTimeout(maxTimer);
      mo.disconnect();
      listeners.forEach((img) => {
        try {
          img.removeEventListener("load", () => {});
          img.removeEventListener("error", () => {});
        } catch (e) {}
      });
    };
  }, [pathname]);

  return (
    <div ref={containerRef} className="relative">
      {!loaded && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white/90">
          <div className="w-20 h-20 relative">
            <div className="absolute w-20 h-20 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      )}

      <div style={{ visibility: loaded ? "visible" : "hidden" }}>{children}</div>
    </div>
  );
}
