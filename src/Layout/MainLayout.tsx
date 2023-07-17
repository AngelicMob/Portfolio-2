import React from "react"

type TMainLayout = {
    children: React.ReactNode;
}

const MainLayout = (props:TMainLayout) => {
  return (
    <div>
      {props.children}
    </div>
  )
};

export default MainLayout;
