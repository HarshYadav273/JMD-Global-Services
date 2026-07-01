"use client";

import { useState } from "react";

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false);

  // Demo number — replace with a real number later
  const phoneNumber = "911234567890";
  const message = "Hello! I'd like to know more about your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: hovered ? "10px" : "0px",
        background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
        color: "#fff",
        borderRadius: "60px",
        padding: hovered ? "14px 24px 14px 18px" : "14px",
        boxShadow: hovered
          ? "0 8px 32px rgba(37, 211, 102, 0.45), 0 0 0 4px rgba(37, 211, 102, 0.15)"
          : "0 6px 20px rgba(37, 211, 102, 0.35)",
        cursor: "pointer",
        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        textDecoration: "none",
        transform: hovered ? "scale(1.08)" : "scale(1)",
      }}
    >
      {/* WhatsApp SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="#fff"
        style={{
          flexShrink: 0,
          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))",
        }}
      >
        <path d="M16.004 2.003C8.27 2.003 2 8.27 2 15.997c0 2.469.644 4.882 1.869 7.007L2 30l7.2-1.887a13.93 13.93 0 0 0 6.8 1.76h.004C23.732 29.873 30 23.607 30 15.997 30 8.27 23.732 2.003 16.004 2.003zm0 25.53a11.6 11.6 0 0 1-5.908-1.62l-.424-.252-4.392 1.152 1.172-4.283-.277-.44A11.55 11.55 0 0 1 4.39 15.997c0-6.407 5.213-11.617 11.614-11.617 6.4 0 11.617 5.21 11.617 11.617 0 6.4-5.217 11.536-11.617 11.536zm6.37-8.7c-.35-.175-2.07-1.02-2.39-1.137-.32-.117-.553-.175-.787.175-.233.35-.903 1.137-1.107 1.37-.204.234-.408.264-.758.088-.35-.175-1.477-.544-2.814-1.736-1.04-.927-1.742-2.072-1.946-2.422-.204-.35-.022-.54.153-.714.157-.157.35-.408.525-.613.175-.204.233-.35.35-.583.117-.234.058-.438-.03-.613-.088-.175-.787-1.898-1.078-2.598-.284-.682-.573-.59-.787-.6-.204-.01-.438-.012-.672-.012s-.613.088-.934.438c-.32.35-1.225 1.197-1.225 2.92 0 1.722 1.254 3.386 1.43 3.62.175.233 2.468 3.768 5.982 5.283.835.36 1.487.576 1.996.737.839.267 1.603.23 2.206.14.673-.1 2.07-.847 2.362-1.664.292-.818.292-1.52.204-1.664-.088-.146-.32-.233-.672-.408z" />
      </svg>

      {/* Tooltip text on hover */}
      <span
        style={{
          whiteSpace: "nowrap",
          fontSize: "15px",
          fontWeight: 600,
          letterSpacing: "0.02em",
          maxWidth: hovered ? "200px" : "0px",
          overflow: "hidden",
          opacity: hovered ? 1 : 0,
          transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        Chat with us
      </span>

      {/* Pulse ring animation */}
      <style>{`
        @keyframes wa-pulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
          70% { box-shadow: 0 0 0 18px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
      `}</style>
      <span
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "60px",
          animation: "wa-pulse 2s infinite",
          pointerEvents: "none",
        }}
      />
    </a>
  );
}
