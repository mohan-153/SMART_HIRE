export function pushWithLoading(router, setLoading, href) {
  if (typeof setLoading === "function") setLoading(true);
  // router is expected to be the object from `next/navigation` (useRouter())
  router.push(href);
}

export default pushWithLoading;
