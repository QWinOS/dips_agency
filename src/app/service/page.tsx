import Image from "next/image";
import Img_1 from "../resources/service_1.webp";
import Img_2 from "../resources/service_2.webp";
import Img_3 from "../resources/service_3.webp";
export default function Service() {
  return (
    <>
      <title>Service | Dips Agency</title>
      <div className="text-center tracking-wide leading-loose sm:px-10">
        <p className="flex leading-10 text-6xl justify-center font-extrabold">
          SERVICES
        </p>
        <br />
        <p className="px-10 sm:px-0">
          You can count on Dips Agency to not only meet, but exceed all your
          needs and requests. Learn more about the services we provide below,
          <br />
          and let us know if you’d like more information about a specific
          offering.
        </p>
        <br />
        <div className="hidden sm:flex sm:flex-col">
          <div className="flex">
            <Image src={Img_1} alt="1" height={800} width={800} />
            <Image src={Img_2} alt="2" height={800} width={800} />
            <Image src={Img_3} alt="3" height={800} width={800} />
          </div>
          <div className="flex justify-evenly pt-20">
            <div>
              <p className="font-extrabold text-2xl">AGENCY SERVICE</p>
              <br />
              <li>Charters Agency</li>
              <li>Owners Agency</li>
            </div>
            <div className="flex  flex-col">
              <p className="font-extrabold text-2xl">
                SHORE BASED LOGISTICS SUPPORT{" "}
              </p>
              <p className="text-left">
                <br />
                Expert Shore Based Logistics Support / <br />
                Service towards Stevedoring, Handling, <br />
                Clearing Agency etc.
              </p>
            </div>
            <div className="flex  flex-col">
              <p className="font-extrabold text-2xl">SUPPORT SERVICE</p>
              <br />
              <p className="text-left">
                Experienced Support Service towards <br /> trading and
                Chartering
              </p>
            </div>
          </div>
        </div>
        <div className="sm:hidden">
          <Image src={Img_1} alt="1" className="pt-5" />
          <div>
            <p className="font-extrabold text-2xl pt-10">AGENCY SERVICE</p>
            <li className="pt-5">Charters Agency</li>
            <li>Owners Agency</li>
          </div>
          <Image
            src={Img_2}
            alt="2"
            height={800}
            width={800}
            className="pt-5"
          />
          <div className="flex  flex-col">
            <p className="font-extrabold text-2xl pt-10">
              SHORE BASED LOGISTICS SUPPORT{" "}
            </p>
            <p className="pt-5 text-center">
              Expert Shore Based Logistics Support / <br />
              Service towards Stevedoring, Handling, <br />
              Clearing Agency etc.
            </p>
          </div>
          <Image
            src={Img_3}
            alt="3"
            height={800}
            width={800}
            className="pt-5"
          />
          <div className="flex  flex-col">
            <p className="font-extrabold text-2xl pt-10">SUPPORT SERVICE</p>
            <br />
            <p className="text-center">
              Experienced Support Service towards <br /> trading and Chartering
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
