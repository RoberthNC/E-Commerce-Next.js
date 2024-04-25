import { titleFont } from "@/config/fonts";

export default function () {
  return (
    <div className="">
      <h1>Hola Mundo</h1>
      <h1 className={`${titleFont.className} font-bold`}>Hola Mundo</h1>
    </div>
  );
}
