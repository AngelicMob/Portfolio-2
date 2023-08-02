import * as s from "./ListItem.style";
import { ItemList } from "../SectionList1";
type TListItem = {
  data: ItemList;
};

const ListItem = (props: TListItem) => {
  return (
    <s.ListItemContainer>
      <s.ImageContainer>
        <img
          src={props.data.imgSrc}
          alt="iconImage"
          style={{ height: "100%", width: "100%", borderRadius: "10px" }}
        ></img>
      </s.ImageContainer>
      <s.TextContainer>
        <span className="cardTitle">{props.data.title}</span>
        <span className="cardDescription">{props.data.description}</span>
      </s.TextContainer>
    </s.ListItemContainer>
  );
};

export default ListItem;
