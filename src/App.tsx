import "./App.css";
import Header from "./Components/Header";
import ContactBar from "./Components/ContactBar";
import Details from "./Components/Details";
import Buttons from "./Components/Buttons";
import { MobileContainer, PageContainer, AddContact, Tagline } from "./styles";

function App() {
  return (
    <PageContainer>
      <MobileContainer>
        <Header />
        <ContactBar />
        <AddContact>
          <p>ADD TO CONTACTS</p>
        </AddContact>
        <Tagline>
          Managing Director at Eric, delivering creative and business solutions.
          Contact today!
        </Tagline>
        <Details />
        <Buttons />
      </MobileContainer>
    </PageContainer>
  );
}

export default App;
