import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "What I can do for you.",
  desc: "",
  image: benefitOneImg,
  bullets: [
    {
      title: "Insetivize LP provissioning",
      desc: "This is the reason why all pump-funs dump after pool deployment.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Active moderation",
      desc: "By being active, and letting the community help.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Real-Time development",
      desc: "All my development is in real-time, it won't take ages to update the website",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "What can you do for me?",
  desc: "",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Micro transactions",
      desc: "Yes even the small one's help, when you place a lot of 0.01 or 0.001 transactions pump-fun's aggregator will notice achange in the price and move it to the top of the list.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Sharing X posts",
      desc: "Send this ship to Elon, he has to know birds aren't real y'all!",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Graphic Design",
      desc: "Are you good with Dall-E, Adobe, Figma, or even fing Paint, hit me up. I'm terrible at that sh*t.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
