import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainLayot from "./components/Layouts/MainLayout/MainLayout";
import { routes } from "./routes/routes";
import * as s from "./App.styles";
function App() {
  return (
    <s.AppContainer>
      <Header></Header>
      <s.Content>
        <MainLayot>{routes}</MainLayot>
        <Footer></Footer>
      </s.Content>
    </s.AppContainer>
  );
}

export default App;
