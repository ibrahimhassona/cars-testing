import { footerLinks } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col  text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap  justify-between  gap-5 sm:px-16 px-6 py-10">
        <div className="flex  flex-col max-sm:items-center justify-center items-start gap-5">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-500">
            Carhub 2023 <br /> All rights reserved &copy;{" "}
          </p>
        </div>
        <div className="flex   flex-row gap-10 flex-wrap  max-sm:justify-center justify-between  items-strat ">
          {footerLinks.map((link) => (
            <div className="flex flex-col gap-3" key={link.title}>
              <Link className="font-bold text-lg my-3 " href="/">
                {link.title}
              </Link>

              {link.links.map((item) => (
                <Link
                  className="text-gray-500"
                  key={item.title}
                  href={item.url}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex max-sm:flex-col flex-row justify-between gap-5 items-center py-6 sm:px-16 px-6 border-t border-gray-100">
        <p className="text-base text-black-100">@2023 CarHub. All rights reserved</p>
        <div className="flex gap-4 text-base text-black-100">
            <Link href='/'>Privacy & Policy</Link>
            <Link href='/'>Terms & Condition</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
