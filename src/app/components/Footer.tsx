export default function Footer() {
  const today: Date = new Date();
  return (
    <>
      <br />
      <br />
      <br />
      <p className="flex justify-around tracking-tighter text-xs">
        Created by Aniket Das © {today.getFullYear()}™. All Rights Reserved.
      </p>
    </>
  );
}
