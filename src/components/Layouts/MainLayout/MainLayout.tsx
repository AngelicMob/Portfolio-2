import * as s from "./MainLayout.styles";

type TMainLayout = {
  children: JSX.Element;
};

const MainLayot = (props: TMainLayout) => {
  return (
    <>
      <s.MainLayoutContainer>{props.children}</s.MainLayoutContainer>
    </>
  );
};

export default MainLayot;
