import Link from "next/link";
import Image from "next/image";
import dynamic from 'next/dynamic';
import React from "react";
import Container from "./container";

const FontAwesomeIcon = dynamic(() => import('@fortawesome/react-fontawesome').then((mod) => mod.FontAwesomeIcon), {
  ssr: false
})
import { faXTwitter, faReddit, faTelegram, faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const navigation = [
    "Foreword",
    "Evidence",
  ];
  const legal = ["Roadmap", "FAQ"];

  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-paleOrange-500 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link href="/" className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                <Image
                  src="/img/logo.svg"
                  alt="N"
                  width="32"
                  height="32"
                  className="w-8"
                />
                <span>BAR on Solana</span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              Birds aren't real, and we need to bring awareness.
              Uncle sam needs to keep its hands out of my pants!
              This time we ain't letting them touch us!
              We're stronger together!
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link key={index} href="/" className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-paleOrange-500 focus:outline-none dark:focus:bg-paleOrange-500">
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link key={index} href="/" className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-paleOrange-500 focus:outline-none dark:focus:bg-paleOrange-500">
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="">
            <div>Start the invation!</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a href="https://twitter.com/KlokkieBeer" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} className="text-xl" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://www.reddit.com/r/BirdsArentReal/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faReddit} className="text-xl" />
                <span className="sr-only">Reddit</span>
              </a>
              <a href="https://t.me/+RnSeDa5m_DUyNTBk" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTelegram} className="text-xl" />
                <span className="sr-only">Telegram</span>
              </a>
              <a href="https://discord.gg/6BHkYb24" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faDiscord} className="text-xl" />
                <span className="sr-only">Discord</span>
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          As off {new Date().getFullYear()}. Birds still aren't real.
        </div>
      </Container>
      {/* Do not remove this */}
    </div>
  );
};