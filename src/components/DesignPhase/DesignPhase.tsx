import * as s from "./DesignPhase.styles";

type TDesignPhase = {
  sectionTitleVisible?: boolean;
  sectionTitle?: string;
  initiacardData?: string;
};

const DesignPhase = (props: TDesignPhase) => {
  return (
    <s.DesignPhaseContainer>
      {props.sectionTitleVisible && (
        <s.SectionTitle>
          <span>{props.sectionTitle}</span>
        </s.SectionTitle>
      )}
      <s.InitialCard>
        {props.initiacardData && (
          <span className="initiacardData">{props.initiacardData}</span>
        )}
      </s.InitialCard>
      <s.DotListCardContainer>
        <DottedListItem>
          <s.ContentContainer className="first-item">
            <span className="first-item-span">Used Figmas Features</span>
            <p className="first-item-p">
              To create dynamic layout designs for the developers, I proposed
              using all the features of Figma, including auto layout, content
              swap, instance swap, properties, and variants, to showcase all the
              different variations of sections required.{" "}
            </p>
            <img
              src="./firstCardProjImg.png"
              style={{ height: "100%", width: "100%" }}
            />
          </s.ContentContainer>
        </DottedListItem>
        <DottedListItem>
          <s.ContentContainer className="second-item">
            <span className="second-item-span">
              The design basis that I used to support and give the Layout Design
              UI aesthetic professional look was:
            </span>
            <ul className="second-item-ul">
              <li>Grid system</li>
              <li>Baseline grid</li>
              <li>Typography</li>
              <li>
                {`Spacing Rules (Found it very difficult to follow spacing +
                baseline grid), sometimes you only follow one if it is not
                possible to get both to match at the same time)`}
              </li>
              <li>Design Principles  </li>
            </ul>
            <img
              src="./dottedListSecondImage.png"
              style={{ height: "100%", width: "100%" }}
            />
          </s.ContentContainer>
        </DottedListItem>
        <DottedListItem>
          <s.ContentContainer className="third-item">
            <span>
              I used 3 heuristics: Aesthetic and Minimalist design, Recognition
              & Recall, Consistency and Standards.{" "}
            </span>
            <span>
              The reason I only chose 3 was partly because of limited time for
              prototyping with Figma.
            </span>
            <span>
              However, it was good to follow 3 heuristics in my opinion to get a
              good basis for what all states should look like so that the coders
              could code the interface.
            </span>
            <img
              src="./thirdImage.png"
              style={{ height: "100%", width: "100%", marginTop: "20px" }}
            />
          </s.ContentContainer>
        </DottedListItem>
        <DottedListItem>
          <s.ContentContainer className="fourth-item">
            <span>
              By following all UI principles and guidelines, I created the
              layout and updated the components and also utilized my UX
              knowledge and research to create a smooth transition between Dark
              and Light Mode by using HSL in the Colors and testing with neutral
              and primary colors.
            </span>
          </s.ContentContainer>
        </DottedListItem>
      </s.DotListCardContainer>
    </s.DesignPhaseContainer>
  );
};

export default DesignPhase;

type TDottedListItem = {
  children?: JSX.Element;
};

function DottedListItem(props: TDottedListItem) {
  return (
    <s.DottedListItemContainer>
      <s.DottedListItemDot>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="19.5" stroke="#018383" />
        </svg>

        <svg
          width="9"
          height="2"
          viewBox="0 0 9 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.20312 1.46094H0.96875V0.4375H8.20312V1.46094Z"
            fill="#018383"
          />
        </svg>
      </s.DottedListItemDot>
      <s.DottedListItemContent>
        {props.children && props.children}
      </s.DottedListItemContent>
    </s.DottedListItemContainer>
  );
}
