import Image from "next/image";
import Img_1 from "../resources/Contact_1.webp";
import Link from "next/link";
export default function Contact() {
  return (
    <>
      <title>Contact | Dips Agency</title>
      <div className="flex items-center justify-around sm:px-40">
        <div className="text-center tracking-wide leading-loose sm:px-10 px-8">
          <div className="text-center tracking-wide leading-loose">
            <div className="text-left">
              <p className="flex justify-center leading-10 text-4xl pb-8 font-extrabold">
                GET IN TOUCH
              </p>
              <p className="text-2xl font-semibold">Address</p>
              <p className="pb-5">
                <Link
                  href="https://goo.gl/maps/non3h2QDocGPX1Rn6"
                  className="underline-offset-3 "
                  target="_blank"
                >
                  <u>Block D, Plot No. 27, Durgachak Colony, Haldia</u>
                </Link>
              </p>
            </div>
            <div className="text-left">
              <p className="text-2xl font-semibold">Email</p>
              <Link
                href="mailto:dipsagency@gmail.com"
                className="underline-offset-3 "
                target="_blank"
              >
                <u>dipsagency@gmail.com</u>
              </Link>
              <p className="pb-5">
                <Link
                  href="mailto:ops.dipsagency@gmail.com"
                  className="underline-offset-3 "
                  target="_blank"
                >
                  <u>ops.dipsagency@gmail.com</u>
                </Link>
              </p>
            </div>
            <div className="text-left">
              <p className="text-2xl font-semibold">Mobile</p>
              <p>
                <Link
                  href="tel:+919732542518"
                  className="decoration-1"
                  target="_blank"
                >
                  <u>+919732542518</u>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={Img_1}
            alt="SS"
            height={900}
            width={700}
            className="pl-5 pb-30 hidden sm:flex"
          />
        </div>
      </div>
      <div className="justify-around hidden sm:flex">
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
    </>
  );
}
