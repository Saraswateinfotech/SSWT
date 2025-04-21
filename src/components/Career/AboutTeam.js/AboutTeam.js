import Image from "next/image";

export default function AboutTeam() {
  return (
    <section className="py-20 px-4 md:px-20 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
      {/* Header - always on top */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Who we are
      </h1>

      {/* Intro paragraph - always below header */}
      <p className="text-lg md:text-xl text-gray-600 mx-auto mb-8">
        We’re a team of problem-solvers building software that helps businesses
        run smarter—so they can focus on what matters most
      </p>

      {/* Content area - changes layout based on screen size */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        {/* Image - comes first on mobile, left on desktop */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/undraw_team-collaboration_phnf.svg"
            alt="SAP team collaboration"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>

        {/* Text content - comes after image on mobile, right on desktop */}
        <div className="w-full lg:w-1/2 lg:py-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Shaping tomorrow together
          </h2>

          <div className="space-y-4 text-lg">
            <p className="text-gray-600">
              At Sarasvate Infotech, we believe progress is built on shared
              expertise. Every solution we design stems from
              collaboration—between our engineers, clients, and partners—to
              solve real-world challenges with precision and agility.
            </p>

            <p className="text-gray-600">
              Our impact is measured in working systems, streamlined operations,
              and empowered teams. Whether optimizing enterprise software or
              crafting custom tools, we focus on results that last—helping
              businesses not just adapt, but lead in their industries.
            </p>
          </div>

          {/* <div className="pt-6">
            <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
              Learn more
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
