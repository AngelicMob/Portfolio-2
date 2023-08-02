import React from "react";
import * as s from "./Home.styles";
import IntroCard from "../../components/IntroCard/IntroCard";
import SectionList1 from "../../components/SectionList1/SectionList1";
import SectionList2 from "../../components/SectionList2/SectionList2";
import SnowManSection from "../../components/SnowManSection/SnowManSection";
type THome = {};
const QuoteString =
  "“Immersiveness and Close To Realism,\n Creates better experiences”";

const IntroCardData = {
  first: "UX Designer",
  second: "Hello! I am Angelic",
  third: `A passionate UX Designer, Researcher and Digital Designer based in Gothenburg , and I design UI & UX, you will find me draw & digital paint and write practicing for fun.`,
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
      imgSrc: "./exArt.jpg",
      description: `By problem framing very good, you can uncover the solutions that are best suited for the right problem. Which is why I believe it is one of the most important aspect in UX.`,
    },
    {
      title: "Logo Design",
      imgSrc: "./exArt.jpg",
      description: "If you uncover the right",
    },
    {
      title: "Brand and Logo Guidelines",
      imgSrc: "./exArt.jpg",
      description: `Immersive Interactions delivers a great and smooth iterating opportunity, and also allows faster feedback for improvements!`,
    },
    {
      title: "Color System, Grids and Typography",
      imgSrc: "./exArt.jpg",
      description: `Immersive Interactions delivers a great and smooth iterating opportunity, and also allows faster feedback for improvements!`,
    },
  ],
};
const SectionList2Data = {
  title: `My UX
  Values`,
  subText: ``,
  itemList: [
    {
      title: "Problem Framing",
      imgSrc: "./exArt.jpg",
      description: `By problem framing very good, you can uncover the solutions that are best suited for the right problem. Which is why I believe it is one of the most important aspect in UX.`,
    },
    {
      title: "Creativity + Principles",
      imgSrc: "./exArt.jpg",
      description: "If you uncover the right",
    },
    {
      title: "Prototyping ",
      imgSrc: "./exArt.jpg",
      description: `Immersive Interactions delivers a great and smooth iterating opportunity, and also allows faster feedback for improvements!`,
    },
    {
      title: "Color System, Grids and Typography",
      imgSrc: "./exArt.jpg",
      description: `Immersive Interactions delivers a great and smooth iterating opportunity, and also allows faster feedback for improvements!`,
    },
  ],
};
const SnowManSectionData = {
  data: [
    {
      title: "My Work",
      imgSrc: "./exArt.jpg",
      linkTo: "/projects",
    },
    {
      title: "Attributes",
      imgSrc: "./exArt.jpg",
      linkTo: "/about",
    },
    {
      title: "About Me",
      imgSrc: "./exArt.jpg",
      linkTo: "/about",
    },
  ],
};
const Home = (props: THome) => {
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
