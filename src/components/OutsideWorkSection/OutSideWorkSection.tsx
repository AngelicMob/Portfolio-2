import * as s from "./OutSideWorkSection.styles";

const OutSideWorkSection = () => {
  return (
    <s.OutSideWorkSectionContainer>
      <s.Title>Outside Work</s.Title>
      <s.Content>
        <s.Description>
          <span>
            As a person I am very curious, enthusiastic, love taking long walks
            in the forests, maybe enjoy a nice coffee and freshly baked
            pasteries.
          </span>

          <span>
           Along of other things I do is cooking, gaming and working on my novel.
          </span>
          <span>
          I am also very fascinated by art and how you can create things and illustrate out of your mind, it’s a beautiful thing.
          </span>

          <span>
          That is why I have taken an interest and have began self tutoring myself 
          within Graphic Design and Motion Design.
          </span>
        </s.Description>
        <s.ImageContainer>
          <img
            src="./outsideWork.png"
            style={{ width: "100%", height: "100%" }}
          />
        </s.ImageContainer>
      </s.Content>
    </s.OutSideWorkSectionContainer>
  );
};

export default OutSideWorkSection;
