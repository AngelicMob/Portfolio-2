import * as s from "./MainLayout.styles";

type TMainLayout = {
  children: JSX.Element;
};

function scroll() {
  console.log("scroll");
  window.scrollTo(0, 0);
  const a = document.querySelector(".scroll-top");
  console.log(a);
  a?.scrollHeight;
}
const MainLayot = (props: TMainLayout) => {
  return (
    <>
      <s.MainLayoutContainer>{props.children}</s.MainLayoutContainer>
    </>
  );
};

export default MainLayot;
