import Card from "../Cards/Card";
import * as s from "./SectionList2.styles";

type TSectionList1 = {
  data: {
    title?: string;
    subText?: string;
    itemList?: ItemList[];
    imageAvailable?: boolean;
  };
};

export type ItemList = {
  title: string;
  imgSrc?: string;
  description: string;
};

const SectionList2 = (props: TSectionList1) => {
  return (
    <s.SectionList2Container>
      {props.data.title && <span className="title">{props.data.title}</span>}
      {props.data.subText && (
        <span className="subTitle">{props.data.subText}</span>
      )}
      <s.ListContainer>
        {props.data.itemList &&
          props.data.itemList.map((e: ItemList, i: number) => {
            return (
              <Card
                key={i}
                withImage={
                  props?.data?.imageAvailable
                    ? props.data.imageAvailable
                    : false
                }
                data={e}
              />
            );
          })}
      </s.ListContainer>
    </s.SectionList2Container>
  );
};

export default SectionList2;
