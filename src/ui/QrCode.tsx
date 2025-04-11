"use client";
import QRCodeStyling from "qr-code-styling";
import { useEffect, useRef } from "react";

const QrCode = () => {
  const QrRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const QRCode = new QRCodeStyling({
      type: "svg",
      dotsOptions: {
        color: "#fb2c36",
        type: "rounded",
      },
      image: "/logounivale.svg",
      imageOptions: {
        margin: 2,
        crossOrigin: "anonymous",
      },
      data: "https://www.google.com.br",
      backgroundOptions: {
        round: 0.05,
      },
    })
    if (QrRef.current) {
      QRCode.append(QrRef.current);
    }
  }, []);
  return (
    <div ref={QrRef} />
  );
};

export default QrCode;