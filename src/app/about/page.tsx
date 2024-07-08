import Image from "next/image";
import about from "../resources/About.webp";

export default function About() {
  return (
    <>
      <title>About | Dips Agency</title>
      <div className="flex-col sm:flex sm:flex-row items-center justify-around sm:px-40 pt-20">
        <div className="text-center tracking-wide leading-loose px-10">
          <p className="flex justify-center leading-10 text-2xl sm:text-6xl font-extrabold">
            ABOUT DIPS AGENCY
          </p>
          <br />
          <p className="text-justify">
            Our mission at Dips Agency is simple: to provide high-quality
            services for our valued clients. Our team goes above and beyond to
            cater to each project’s specific needs. Through open communication
            and exceptional service, we hope you’ll find what you’re looking for
            with our Shipping Service. For more information or general
            inquiries, get in touch today.
          </p>
          <br />
        </div>
        <div>
          <Image
            src={about}
            alt="SS"
            height={900}
            width={3400}
            className="sm:pl-5 pb-30"
          />
        </div>
      </div>
    </>
  );
}
