"use client";
import { useEffect } from "react";

const ServiceWorkerRegistration = () => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const registerServiceWorker = async () => {
        try {
          const registration = await navigator.serviceWorker.register(
            "/sw.js",
            {
              scope: "/",
              updateViaCache: "none",
            },
          );
          console.log("Service worker registration result:", registration);
        } catch (error) {
          console.error("Service worker registration failed:", error);
        }
      };
      registerServiceWorker();
    }
  }, []);

  return null;
};

export default ServiceWorkerRegistration;
