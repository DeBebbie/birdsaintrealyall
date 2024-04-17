import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What are you as the 'dev' getting out of this?",
    answer: "I will use my share of the pie entirely for the other tier-one project that I'm working on. I advice you to stay connected!",
  },
  {
    question: "Why are you doing this?",
    answer: "In order to learn project management and community building.",
  },
  {
    question: "Why don't you as the dev think that this is a tier one project?",
    answer:
      "Because of the way pump-fun opperates. You can't setup strong economics for a token on this platform, there are other fair-launch platforms that do allow that, and any on the big tokens you see have fundamentels like that.",
  },
  {
    question: "How big can this project actually get?",
    answer:
      "Realisticly I believe somewhere in the area of $500,000,000 with a strong community. Tier one listing is only possible if the hype is crazy about BAR because the entire token is fair-launched. If we achieve that it could become way bigger than that though, but that all depends on the community.",
  },
  {
    question: "Where is the dev?",
    answer: 
    "I live in the UTC time zone so that's where my clock is at, I also do have a day job but I am able to be on TG and Discord for important messages, I will be less active durring that time."
  }
];

export default Faq;