import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Birds aren't real and we need to bring awareness.
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Because Pump-Fun doesn't allow for the creation of marketing wallets because its protocol is 'Fair-Launch.' 
            There are only things to improve on the development side of things. Luckily I am actually a developer. 
            After pool deployment the first thing will be trending on all the aggregators: DexTools, DexView, Birdeye, everything. 
            Once the pool has stabilized I will set up liquid staking programs and yield farms. 
            This is necessary because they provide liquidity. And are seen as LP providers, that annoying thing you see after the pool has been deployed on Raydium and you do a rug check, yes that's what I'm talking about. 
            Although I won't let this project die, I would want this project to be a stepping stone. I'm sitting on a far better project unlike anything you have seen in this space.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://pump.fun/board"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-paleOrange-500 rounded-md ">
                Buy pre-sale on Pump-Fun!
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
}


export default Hero;