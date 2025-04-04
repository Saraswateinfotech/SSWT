// pages/success-stories.js

export default function SuccessStories() {
  const imageUrl =
    "https://www.gkmit.co/wp-content/uploads/2024/04/GKMIT_Homepage_Projects_Mockup_IndiGG.webp";
  const title = "ISKCON Puja";
  const description =
    "Experience seamless ISKCON Puja booking with unified login/signup. Easily book pujas, track status, and access recordings via an intuitive dashboard.";

  return (
    <section id="home-portfolio" className="bg-[#002ea8] text-white py-4 lg:py-16">
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-16">
        {/* Title Section */}
        <div className="mb-10 ml-2">
          <p className="uppercase mb-2 text-md sm:text-lg font-semibold">Success Stories</p>
          <h2 className="sm:text-[56px] text-4xl font-semibold mt-2 mb-2">Built By Saraswate</h2>
          <div className="mb-14 sm:mb-20 h-1 sm:h-1.5 w-20 bg-white rounded-full"></div>
        </div>

        {/* Layout for screens lg and above */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-7 grid-rows-2 gap-6">
            {/* Side Long Box (remains column layout) */}
            <div className="col-span-2 row-span-2 bg-white text-black rounded-xl p-10">
              <img
                src={imageUrl}
                alt={title}
                className="object-contain mb-4 h-48 w-auto"
              />
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p className="text-base">{description}</p>
            </div>
            {/* Other Boxes: use row layout */}
            <div className="col-span-5 bg-white text-black rounded-xl p-10 flex items-center">
              <img
                src={imageUrl}
                alt="Resumes Entry"
                className="object-contain h-48 w-auto mr-8"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Resumes Entry</h3>
                <p className="text-base">Resumes Entry provides separate dashboards: admins manage resumes, and freelancers work on assignments. It offers KYC and secure data collection.</p>
              </div>
            </div>
            <div className="col-span-5 bg-white text-black rounded-xl p-10 flex items-center">
              <img
                src={imageUrl}
                alt={title}
                className="object-contain h-48 w-auto mr-8"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-2">ISKCON Jaipur</h3>
                <p className="text-base">Developed by our team, this website showcases the campus and projects, featuring temple events, community initiatives, and spiritual activities.</p>
              </div>
            </div>
          </div>
          {/* Bottom Grid: Two Boxes (row layout) */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="bg-white text-black rounded-xl p-6 flex items-center">
              <img
                src={imageUrl}
                alt={title}
                className="object-contain h-36 w-auto mr-4"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-2">The Lip Bar</h3>
                <p className="text-base">Developed by our team, this ecommerce landing page combines product showcase and secure checkout with an integrated payment gateway.</p>
              </div>
            </div>
            <div className="bg-white text-black rounded-xl p-6 py-12 flex items-center">
              <img
                src={imageUrl}
                alt={title}
                className="object-contain h-36 w-auto mr-4"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Boss Audio System</h3>
                <p className="text-base">Our ecommerce landing page showcases Boss Audio’s innovative products with a secure, streamlined shopping experience that drives conversions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Layout for screens below lg */}
        <div className="block lg:hidden space-y-6 px-4 md:px-10">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="bg-white text-black rounded-xl sm:p-10 p-6 sm:flex justify-center items-center"
            >
              <img
                src={imageUrl}
                alt={title}
                className="object-contain md:h-48 h-28 w-auto mr-8"
              />
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-sm sm:text-base sm:max-w-lg">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
