"use client";

import QuickLinks from "@/components/quickLinks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  const recentVisits = [
    {
      id: 0,
      src: "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png",
      name: "Github",
    },
    {
      id: 1,
      src: "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png",
      name: "Github",
    },
    {
      id: 2,
      src: "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png",
      name: "Github",
    },
    {
      id: 3,
      src: "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png",
      name: "Github",
    },
    {
      id: 4,
      src: "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png",
      name: "Github",
    },
    {
      id: 5,
      src: "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png",
      name: "Github",
    },
    {
      id: 6,
      src: "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png",
      name: "Github",
    },
    {
      id: 7,
      src: "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png",
      name: "Github",
    },
  ];

  const handleSubmit = () => {
    if (!search) {
      return;
    }
    router.push(`https://www.google.com/search?q=${search}`);
  };

  return (
    <div className="flex  w-full ">
      <div className="w-28">
        <QuickLinks />
      </div>
      <div className="flex-grow flex flex-col items-center justify-center space-y-20">
        <div className="w-60">
          <lottie-player
            src="/lottie/atom.json"
            background="white"
            speed="1"
            loop
            autoplay
            data-testid="lottie"
          ></lottie-player>
        </div>

        {/* input and text */}

        <div className="flex items-center w-full justify-center gap-40">
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                className="p-2 rounded-md pr-8 md:w-[35rem] w-80 px-3"
                placeholder="Enter text to search"
              />
              <div className="absolute right-2 top-2">
                <svg
                  onClick={handleSubmit}
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="text-red-500 h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  ></path>
                </svg>
              </div>
            </div>
          </form>
          <div>Keep Learning 🙌</div>
        </div>

        {/* input and text */}

        <div>
          <div className="flex items-center w-96 flex-wrap gap-10">
            {recentVisits.map((visits) => {
              return (
                <div className="flex items-center flex-col" key={visits.id}>
                  <img className="w-10" src={visits.src} />
                  <p>{visits.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
