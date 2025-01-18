import * as s from "./Home.styles";
import IntroCard from "../../components/IntroCard/IntroCard";
import SectionList1 from "../../components/SectionList1/SectionList1";
import SectionList2 from "../../components/SectionList2/SectionList2";
import SnowManSection from "../../components/SnowManSection/SnowManSection";

const QuoteString =
  "“Immersiveness and Close To Realism,\n Creates better experiences”";

const IntroCardData = {
  first: "UX Designer",
  second: "Hello! I am Angelic",
  third: `A passionate UX Designer, Researcher and Digital Designer based in Gothenburg , and I design UI & UX, you will find me draw & digital paint and write practicing for fun.`,
  imgSrc: "./landingpage-nightmountain/PNG/portfolio-art nightMountain.png",
};

const SectionList1Data = {
  title: `UX Designer internship at
  Devinova`,
  subText: `
  Devinova Group AB gave me incredible opportunity to grow during my internship,
   and not just in UX, but also in Graphic Design! Here is an overlook over the tasks I did:`,
  itemList: [
    {
      title: "Block Library",
      imgSrc: "./landingpage_icons/s1_recent_projectlist/icon1_block.svg",
      description: `A template system for the company to reuse for clients. It involved making the design for each section of contents in Figma for the Devs.`,
    },
    {
      title: "Logo Design",
      imgSrc: "./landingpage_icons/s1_recent_projectlist/icon2_logodesign.svg",
      description:
        "Used Adobe Illustrator to make my first Logo for the company. It was made print ready and used for the web.",
    },
    {
      title: "Brand and Logo Guidelines",
      imgSrc: "./landingpage_icons/s1_recent_projectlist/icon3_logoguide.svg",
      description: `The guidelines were made with Adobe Illustrator, included the Logo usage and Brand for Typography.`,
    },
    {
      title: "Color System, Grids and Typography",
      imgSrc: "./landingpage_icons/s1_recent_projectlist/icon4_colorsystem.svg",
      description: `These essentials were added to add Brand Identity and Personality.`,
    },
  ],
};
const SectionList2Data = {
  imageAvailable: true,
  title: `My UX
  Values`,
  subText: ``,
  itemList: [
    {
      title: "Problem Framing",
      imgSrc:
        "./landingpage_icons/s2_ux_values/emoji_objects_FILL0_wght400_GRAD0_opsz24.svg",
      description: `By problem framing greatly, you can uncover the solutions that are best suited for the right problem. Which is why I believe it is one of the most important aspect in UX.`,
    },
    {
      title: "Creativity + Principles",
      imgSrc:
        "./landingpage_icons/s2_ux_values/important_devices_FILL0_wght400_GRAD0_opsz24.svg",
      description:
        "It is really important to follow principles and also apply your creativity while you design to maintain and deliver faster in providing designs.",
    },
    {
      title: "Prototyping ",
      imgSrc:
        "./landingpage_icons/s2_ux_values/indeterminate_question_box_FILL0_wght400_GRAD0_opsz24.svg",
      description: `Immersive Interactions delivers a great and smooth iterating opportunity, and also allows faster feedback for improvements.`,
    },
    {
      title: "Color System, Grids and Typography",
      imgSrc:
        "./landingpage_icons/s2_ux_values/undraw_prototyping_process_re_7a6p.svg",
      description: `Immersive Interactions delivers a great and smooth iterating opportunity, and also allows faster feedback for improvements!`,
    },
  ],
};
const SnowManSectionData = {
  data: [
    {
      title: "My Work",
      imgSrc: "./Snowmen/WorkBubble/portfolio-art work-bubble.svg",
      linkTo: "/project",
    },
    {
      title: "Attributes",
      imgSrc: "./Snowmen/SkillBulp/portfolio-art SkillBulp.svg",
      linkTo: "/about",
    },
    {
      title: "About Me",
      imgSrc: "./Snowmen/AboutMe/hobbies.svg",
      linkTo: "/about",
    },
  ],
};
const Home = () => {
  return (
    <s.HomeContainer>
      <s.Quote>{QuoteString}</s.Quote>
      <s.Section>
        <IntroCard data={IntroCardData} buttonVisible={true} />
      </s.Section>
      <s.Section>
        <SectionList1 data={SectionList1Data}></SectionList1>
      </s.Section>
      <s.Section>
        <SectionList2 data={SectionList2Data}></SectionList2>
      </s.Section>
      <s.Section>
        <SnowManSection data={SnowManSectionData.data} />
      </s.Section>
    </s.HomeContainer>
  );
};

export default Home;
