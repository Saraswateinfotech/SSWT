import { Outfit } from "next/font/google";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const companyText = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function HeroSection() {
  const text = "SARASWATE";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    let typing = true;

    const typeSpeed = 300;
    const backspaceSpeed = 100;
    const pauseDuration = 2000;

    const animateTyping = () => {
      if (typing) {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
          setTimeout(animateTyping, typeSpeed);
        } else {
          typing = false;
          setTimeout(animateTyping, pauseDuration);
        }
      } else {
        if (index > 0) {
          setDisplayedText(text.slice(0, index - 1));
          index--;
          setTimeout(animateTyping, backspaceSpeed);
        } else {
          typing = true;
          setDisplayedText("");
          setTimeout(animateTyping, typeSpeed);
        }
      }
    };

    animateTyping();
  }, []);

  return (
    <section
      id="home"
      className={`${companyText.className} text-[#28405b] flex gap-5 flex-col-reverse max-w-screen-2xl m-auto md:flex-row items-center justify-between py-12 pt-20 md:min-h-screen px-6 md:px-4 lg:px-16  bg-white`}
    >
      <div className="space-y-5 w-screen px-4 md:px-0">
        <h1
          className={`${companyText.className} lg:pt-28 text-[32px] text-[#28405b] md:text-[40px] lg:text-[54px] font-bold`}
        >
          We're <span className="text-[#043F9B]">{displayedText}</span>
        </h1>
        <div className="w-16 h-1 bg-[#043F9B] rounded-full"></div>
        <p
          className={`${companyText.className} text-lg lg:text-xl lg:leading-9 font-light pb-10 text-[#28405b] max-w-xl`}
        >
          A Leading IT Services Company Focused on Building Next-Gen Products
          for Startups and MNCs.
        </p>
        <span className="flex flex-row flex-wrap gap-6 pb-14 text-lg font-semibold">
          <span className="flex items-center gap-2">
            <Icon
              icon="teenyicons:tick-circle-solid"
              width="16"
              height="16"
              style={{ color: "#af3cb8" }}
            />
            DEFINE
          </span>
          <span className="flex items-center gap-2">
            <Icon
              icon="teenyicons:tick-circle-solid"
              width="16"
              height="16"
              style={{ color: "#1e3b96" }}
            />
            DELIVER
          </span>
          <span className="flex items-center gap-5 #16777d">
            <Icon
              icon="teenyicons:tick-circle-solid"
              width="16"
              height="16"
              style={{ color: "#16777d" }}
            />
            ITERATE
          </span>
        </span>
        <button className="mt-6 bg-[#043F9B] text-white font-medium text-xl py-3 px-5 rounded-sm hover:bg-blue-700 transition duration-200">
          Learn More
        </button>
      </div>
      <div className="mt-12 md:mt-0 relative w-full md:w-10/12 flex justify-center md:mb-0 mb-16">
        <img src="/sswt-hero.svg" />
      </div>
    </section>
  );
}
