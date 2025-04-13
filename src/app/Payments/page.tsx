import { QrCode } from "@/ui";
import LarIdosos from "public/laridosos.svg";

const Payments = () => {
  return (
    <section className="flex justify-center items-center pt-20 min-h-screen">
      <QrCode />
      <QrCode image={LarIdosos} qrUrl="https://www.facebook.com/lardosidosossaojose/?locale=pt_BR"
        className="ml-44" />
    </section>
  );
};

export default Payments;