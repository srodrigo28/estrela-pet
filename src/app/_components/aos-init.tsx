"use client"

import Aos from "aos";
import { useEffect } from "react";

export default function AosInit() {
  
      useEffect(() => {
            Aos.init({
                  duration: 800,
                  once: true
            })
      }, [])

      return null;
}