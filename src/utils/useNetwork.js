import React from "react";
import { useState, useEffect } from "react";
 const useNetwork = () => {
  const [online, setonline] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setonline(navigator.onLine);
    });

    window.addEventListener("online", () => {
      setonline(navigator.onLine);
    });
    console.log("network : ",online?"online":"offline")
  },[online]);

  return online;
};

export default useNetwork;


