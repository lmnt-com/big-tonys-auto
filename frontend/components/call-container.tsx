"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import { motion } from "motion/react";
import { App } from "@/components/app";
import type { AppConfig } from "@/lib/types";

interface CallContainerProps {
  appConfig: AppConfig;
  phoneNumber: string;
}

export function CallContainer({ appConfig, phoneNumber }: CallContainerProps) {
  const [sessionStarted, setSessionStarted] = useState(false);

  return (
    <div className="flex gap-2 items-center">
      {/* Web Call Section */}
      <motion.div 
        className="text-center"
        initial={{ flex: "1 1 0%" }}
        animate={{ 
          flex: sessionStarted ? "1 1 100%" : "1 1 0%"
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut"
        }}
      >
        <div className="rounded-xl text-black text-left">
          <App 
            appConfig={appConfig} 
            onSessionStarted={setSessionStarted}
          />
        </div>
      </motion.div>
      
      {/* Phone Call Section */}
      <motion.div 
        className="text-center border-l-2"
        initial={{ 
          flex: "1 1 0%",
          opacity: 1,
          width: "auto"
        }}
        animate={{ 
          flex: sessionStarted ? "0 0 0%" : "1 1 0%",
          opacity: sessionStarted ? 0 : 1,
          width: sessionStarted ? "0px" : "auto"
        }}
        transition={{
          opacity: {
            duration: 0.3,
            ease: "easeInOut",
            delay: sessionStarted ? 0 : 0.5
          },
          flex: {
            duration: 0.8,
            ease: "easeInOut",
            delay: sessionStarted ? 0.3 : 0
          },
          width: {
            duration: 0.5,
            ease: "easeInOut",
            delay: sessionStarted ? 0.3 : 0
          }
        }}
        style={{
          overflow: "hidden"
        }}
      >
        <h3 className="text-base font-bold text-gray-800 mb-4">...or call Tony&apos;s phone</h3>
        <a
          href={`tel:${phoneNumber}`}
          className="bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-3 px-5 rounded-xl inline-flex items-center gap-3 transition-transform shadow-lg"
        >
          <Phone className="h-5 w-5" />
          {phoneNumber}
        </a>
      </motion.div>
    </div>
  );
}