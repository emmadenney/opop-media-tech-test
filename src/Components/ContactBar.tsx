import { ContactBarContainer, GridIcon, GridText, MiddleCol } from "../styles";
import email from "../logos/email.png";
import location from "../logos/location.png";
import phone_call from "../logos/phone-call.png";

export default function ContactBar() {
  return (
    <ContactBarContainer>
      <div>
        <GridIcon src={phone_call} />
        <GridText>CALL</GridText>
      </div>
      <MiddleCol>
        <GridIcon id="location-icon" src={location} />
        <GridText>DIRECTIONS</GridText>
      </MiddleCol>
      <div>
        <GridIcon src={email} />
        <GridText>EMAIL</GridText>
      </div>
    </ContactBarContainer>
  );
}
