import { footerData } from "./footerData";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-gray-300 pt-10">
      <div className="lg:max-w-screen-2xl mx-auto px-4 sm:px-16">
        <div>
          <img src="sswt-logo.png" className="h-16 mb-10" />
        </div>
        {/* Flex container */}
        <div className="flex flex-wrap max-w-2xl lg:max-w-full m-auto justify-between sm:gap-y-8">
          {/* About Company - First on all screens, full width on mobile, half on min-[450px], 2/6 on lg+ */}
          <div className="w-full min-[450px]:w-[60%] lg:w-2/6 mb-8">
            <div className="flex flex-col items-start max-w-96">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {footerData.aboutCompany.heading}
              </h2>
              <div className="w-16 h-[2px] bg-gray-600 mb-4"></div>
              <p className="text-base leading-6 mb-2">{footerData.aboutCompany.content}</p>
              <div className="flex space-x-6 mt-2">
                {footerData.aboutCompany.icons.map((icon) => (
                  <a
                    key={icon.name}
                    href={icon.link}
                    className="text-gray-300 hover:text-white"
                  >
                    {icon.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Pages - Second on mobile, first row on min-[450px], last column on lg+ */}
          <div className="w-full min-[450px]:w-min pr-10 order-1 min-[450px]:order-2 lg:order-none mb-8">
            <div className="flex flex-col items-start">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {footerData.pages.heading}
              </h2>
              <div className="w-16 h-[2px] bg-gray-600 mb-4"></div>
              <ul className="space-y-2 text-base">
                {footerData.pages.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.link} className="hover:text-white">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Address - Third on mobile, second row on min-[450px], second column on lg+ */}
          <div className="w-full min-[450px]:w-[48%] lg:w-1/6 order-2 min-[450px]:order-3 lg:order-none mb-8">
            <div className="flex flex-col items-start">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {footerData.address.heading}
              </h2>
              <div className="w-16 h-[2px] bg-gray-600 mb-4"></div>
              <ul className="space-y-2 text-base">
                {footerData.address.content.map((item, index) => (
                  <li key={index} className="flex items-center">
                    {item.icon}
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Company - Fourth on mobile, second row on min-[450px], third column on lg+ */}
          <div className="w-full min-[450px]:w-min lg:w-1/6 order-3 min-[450px]:order-4 lg:order-none mb-8">
            <div className="flex flex-col items-start">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {footerData.company.heading}
              </h2>
              <div className="w-16 h-[2px] bg-gray-600 mb-4"></div>
              <ul className="space-y-2 text-base">
                {footerData.company.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.link} className="hover:text-white">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar remains the same */}
      </div>
        <div className="mt-8 border-t border-gray-700 py-6">
        {/* <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col min-[450px]:flex-row items-center justify-between"> */}
          <p className="text-base text-center">© 2025 Saraswate. All Rights Reserved.</p>
          {/* <div className="mt-4 min-[450px]:mt-0 space-x-4 text-base">
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              About us
            </a>
            <a href="#" className="hover:text-white">
              Service
            </a>
          </div> */}
        </div>
    </footer>
  );
}
