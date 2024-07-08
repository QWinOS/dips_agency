import Link from "next/link";

export default function Footer() {
  const today: Date = new Date();
  return (
    <>
      <br />
      <br />
      <br />
      <p className="flex justify-around tracking-tighter text-xs">
        <Link href="https://www.linkedin.com/in/aniketdas188/" target="_blank">
          Created by Aniket Das © {today.getFullYear()}™. All Rights Reserved.
        </Link>
      </p>
    </>
  );
}
