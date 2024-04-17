import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Video from "../components/video"
import Cta from "../components/cta";
import Faq from "../components/faq";

const Home = () => {
  return (
    <>
      <Head>
        <title>Birds Aren't Real - Uncover the Truth!</title>
        <meta name="description" content="Explore the hidden truths behind the birds aren't real movement. Discover how drones have infiltrated our skies disguised as birds. Join us in spreading awareness and unveiling the conspiracy." />
        <link rel="icon" href="/logo.svg" file="svg"/>
      </Head>

      <Navbar />
      <Hero />
      <div id="why" />
      <SectionTitle
        pretitle="This shit is messed up y'all"
        title=" Because birds aren't real">
        In case you didn't notice, the goverment is spying on you. Birds are drones and they're trying to arm them.
        Let's spread awareness and make uncle sam stop looking in our pockets. We thought we had fixed it with this technology,
        but now the big pigion bank in Europe want's to stop that, they're putting birds in our decentralized economy.
        The economy that we own, as a culture. Why isn't anyone spreading awareness? Birds aren't real and theyre invaltrading our land!
        Going 2008 Sam!? Nah mate, that will be my own fault this time! I say lfg, let's stop these bs meme tokens and make a difference!
        Let's pull a Micheal Burry in this b*tch!
      </SectionTitle>
      <div id="development" />
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="You're welcome BTW"
        title="How does a bird work?">
        Here's the blueprint.
      </SectionTitle>
      <div id="proof" />
      <Video />
      <div id="FAQ" />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        I already know what you're going to ask.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}

export default Home;