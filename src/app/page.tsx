import Image from "next/image";
import Img_2 from "../app/resources/2.webp";
import Img_3 from "../app/resources/3.webp";
import { Test, Img_3_parallex } from "./test";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <title>Shipping | Dips Agency</title>
      {/* <link rel="icon" href="/dips.ico" type="image/x-icon" /> */}
      <div className="flex items-center justify-between">
        <Test />
      </div>
      <div className="flex items-center justify-around sm:px-40 pt-20">
        <div className="sm:w-1/2 h-full text-center tracking-wide leading-loose px-10 text-lg">
          <p className="flex justify-center leading-10 text-4xl font-extrabold">
            ABOUT
          </p>
          <br />
          <p>
            Over the years, we’ve learned that great service begins and ends
            with experienced and friendly professionals, which explains our
            reliable services. We believe that our team is the best in the
            business, and have complete and total confidence in every person
            providing our services.
          </p>
          <br />
          <p>
            Dips Agency finishes each project on schedule and with the highest
            level of quality. With a focus on personalized service, competitive
            rates and customer satisfaction, we’re always striving to meet and
            exceed expectations.
          </p>
        </div>
        <div className="hidden sm:flex">
          <Image
            src={Img_2}
            alt="SS"
            // height={900}
            // width={3400}
            className="object-left object-cover "
          />
        </div>
      </div>
      <Image
        src={Img_3}
        alt="Dips Agency"
        className="flex sm:hidden object-cover pt-20"
      />
      <div className="flex items-center justify-around sm:px-40 pt-20">
        <div className="sm:w-1/2 h-full text-center tracking-wide leading-loose px-10 text-lg">
          <p className="flex justify-center leading-10 text-4xl font-extrabold">
            GET IN TOUCH
          </p>
          <p className="pt-5 sm:pt-10">
            <Link
              href="https://goo.gl/maps/non3h2QDocGPX1Rn6"
              className="underline-offset-3 "
              target="_blank"
            >
              Block D, Plot No. 27, Durgachak Colony, Haldia
            </Link>
          </p>
          <p className="sm:pt-10">
            <Link href="mailto:dipsagency@gmail.com">dipsagency@gmail.com</Link>
          </p>
          <p className="sm:pt-10">
            <Link
              href="tel:+919732542518"
              className="decoration-1"
              target="_blank"
            >
              +919732542518
            </Link>
          </p>
        </div>
        <div className="">
          <Img_3_parallex />
        </div>
      </div>
      {/* <div className="justify-around px-40 hidden sm:flex">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d946524.873369225!2d88.137655!3d22.073958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02f778fb4973b7%3A0xa077ebe22e5773e5!2sDips%20Agency!5e0!3m2!1sen!2sin!4v1720363057629!5m2!1sen!2sin"
          width="2000"
          height="600"
          style={{ border: 10 }}
          loading="lazy"
        />
      </div> */}
      <div className="justify-around px-40 hidden sm:flex">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472385.69373818656!2d87.78915446562795!3d22.33424184633197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02f778fb4973b7%3A0xa077ebe22e5773e5!2sDips%20Agency!5e0!3m2!1sen!2sin!4v1720348814416!5m2!1sen!2sin"
          width="1500"
          height="500"
          style={{ border: 0 }}
          loading="lazy"
        />
      </div>
      <div className="justify-around flex sm:hidden pt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472385.69373818656!2d87.78915446562795!3d22.33424184633197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02f778fb4973b7%3A0xa077ebe22e5773e5!2sDips%20Agency!5e0!3m2!1sen!2sin!4v1720348814416!5m2!1sen!2sin"
          width="1500"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
        />
      </div>
      <br />
    </>
  );
}
