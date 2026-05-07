export const reportConversion = (url) => {
  if (typeof window === "undefined") return;

  const callback = () => {
    if (url) {
      window.location.href = url;
    }
  };

  window.gtag?.("event", "conversion", {
    send_to: "AW-18127833743/p-WVCOGv86UcEI-Vg8RD",
    event_callback: callback,
  });
};
