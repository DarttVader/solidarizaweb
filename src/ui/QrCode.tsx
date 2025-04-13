"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import SantoAntonio from "public/larsanto.svg";
import QRCodeStyling from "qr-code-styling";
import { useEffect, useRef } from "react";

interface QrCodeProps {
  qrUrl?: string;
  className?: string;
  image?: StaticImport;
}

const QrCode: React.FC<QrCodeProps> = ({ qrUrl = "https://www.facebook.com/asiloivaipora/?locale=pt_BR", className, image = SantoAntonio }) => {
  const QrRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const QRCode = new QRCodeStyling({
      width: 250,
      height: 250,
      type: "svg",
      data: qrUrl,
      dotsOptions: {
        color: "#fb2c36",
        type: "rounded",
      },
      image: "/pix.svg",
      imageOptions: {
        margin: 2,
        crossOrigin: "anonymous",
      },
      backgroundOptions: {
        round: 0.05,
      },
    });
    if (QrRef.current) {
      QRCode.append(QrRef.current);
    };
  },);
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="w-68 h-68 rounded-full border-3 border-red-500">
        <Image src={image} alt="Santo Antonio" className="rounded-full" />
      </div>
      <div ref={QrRef} />
    </div>
  );
};

export default QrCode;