import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../Constants";
function Footer() {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="Nike logo" width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon, idx) => (
              <div
                key={idx}
                className="flex justify-center items-center h-12 w-12 bg-white rounded-full"
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-white font-montserrat text-2xl font-medium mb-6 leading-normal">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      className="text-white-400 text-base leading-normal hover:text-slate-gray font-montserrat mt-3 transition-colors duration-300 cursor-pointer "
                      href={link.link}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-between flex-wrap text-white-400 mt-24 max-sm:items-center  w-full">
          <div className="w-full mb-6  sm:w-fit flex justify-start items-center gap-2 font-montserrat cursor-pointer">
            <img
              src={copyrightSign}
              alt="Copyright sign"
              width={24}
              height={24}
              className="rounded-full m-0"
            />
            <p>
              Copyright. All rights reserved. Developed by
              <a
                className="text-coral-red font-palanquin ml-2 underline underline-offset-4 text-lg hover:no-underline"
                href="https://github.com/weryamajidi"
              >
                Werya Majidi
              </a>{" "}
            </p>
          </div>
          <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
