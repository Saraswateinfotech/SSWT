import successStoriesData from './success-stories-data.json';

export default function SuccessStories() {
  const handleCardClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

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
            <div 
              className="col-span-2 row-span-2 bg-white text-black rounded-xl p-10 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleCardClick(successStoriesData[0].link)}
            >
              <img
                src={successStoriesData[0].imageUrl}
                alt={successStoriesData[0].title}
                className="object-contain mb-4 h-48 w-auto"
              />
              <h3 className="text-2xl font-semibold mb-2">{successStoriesData[0].title}</h3>
              <p className="text-base">{successStoriesData[0].description}</p>
            </div>
            {/* Other Boxes: use row layout */}
            {successStoriesData.slice(1, 3).map((story) => (
              <div 
                key={story.id}
                className="col-span-5 bg-white text-black rounded-xl p-10 flex items-center cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleCardClick(story.link)}
              >
                <img
                  src={story.imageUrl}
                  alt={story.title}
                  className="object-contain h-48 w-auto mr-8"
                />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{story.title}</h3>
                  <p className="text-base">{story.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Bottom Grid: Two Boxes (row layout) */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            {successStoriesData.slice(3).map((story) => (
              <div 
                key={story.id}
                className="bg-white text-black rounded-xl p-6 flex items-center cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleCardClick(story.link)}
              >
                <img
                  src={story.imageUrl}
                  alt={story.title}
                  className="object-contain h-36 w-auto mr-4"
                />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{story.title}</h3>
                  <p className="text-base">{story.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Layout for screens below lg */}
        <div className="block lg:hidden space-y-6 px-4 md:px-10">
          {successStoriesData.map((story) => (
            <div
              key={story.id}
              className="bg-white text-black rounded-xl sm:p-10 p-6 sm:flex justify-center items-center cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleCardClick(story.link)}
            >
              <img
                src={story.imageUrl}
                alt={story.title}
                className="object-contain md:h-48 h-28 w-auto mr-8"
              />
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">{story.title}</h3>
                <p className="text-sm sm:text-base sm:max-w-lg">{story.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}