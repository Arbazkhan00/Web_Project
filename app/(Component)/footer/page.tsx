import Image from "next/image";
import ftim from "@/public/h.png";

export default function Footer() {
  return (
    <footer className="px-4 sm:px-8 md:px-16 lg:px-28 bg-sky-500 py-12 sm:py-16 lg:py-20 text-white">
      <div className="text-center mb-8 sm:mb-12">
        <div className="text-4xl sm:text-5xl font-semibold">We're Trusted by Our Clients</div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch gap-8 sm:gap-16">
        <div className="text-center sm:w-1/3">
          <div className="w-20 h-20 sm:w-32 sm:h-32 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 mx-auto mb-4">
            <Image src={ftim} alt="Naveed Sir" width={80} height={80} />
          </div>
          <div className="mt-2">
            <p className="font-semibold">Naveed Sir</p>
            <p className="text-sm ">Full Stack Developer</p>
          </div>
          <p className="mt-4 text-sm ">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            If you are going to use a passage of Lorem Ipsum,
          </p>
        </div>

        <div className="text-center sm:w-1/3">
          <div className="w-20 h-20 sm:w-32 sm:h-32 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 mx-auto mb-4">
            <Image src={ftim} alt="Arbaz Khan" width={80} height={80} />
          </div>
          <div className="mt-2">
            <p className="font-semibold">Arbaz Khan</p>
            <p className="text-sm ">FrontEnd Developer</p>
          </div>
          <p className="mt-4 text-sm ">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            If you are going to use a passage of Lorem Ipsum,
          </p>
        </div>
      </div>
    </footer>
  );
}
