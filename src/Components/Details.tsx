import {
  DetailsContainer,
  GridIcon,
  TextContainer,
  Detail,
  Type,
} from "../styles";
import phone_call_grey from "../logos/phone-call-grey.png";
import email_grey from "../logos/email-grey.png";
import location_grey from "../logos/location-grey.png";
import spotify from "../logos/spotify.png";

export default function Details() {
  return (
    <DetailsContainer>
      <GridIcon src={phone_call_grey} alt="phone" />
      <TextContainer>
        <Detail>(+44) 0787 933 5555</Detail>
        <Type>Telephone</Type>
      </TextContainer>
      <GridIcon style={{ height: "17px" }} src={location_grey} alt="location" />
      <TextContainer>
        <Detail>
          Peter Rabbit, Little Hut
          <br />
          Manchester,
          <br />
          M1 AAA
        </Detail>
        <Type>Location</Type>
      </TextContainer>
      <GridIcon src={email_grey} alt="email" />
      <TextContainer>
        <Detail>JakeJones@Jones.co.uk</Detail>
        <Type>Email</Type>
      </TextContainer>
      <GridIcon style={{ height: "17px" }} src={spotify} alt="spotify" />
      <TextContainer>
        <Detail>Jake Jones</Detail>
        <Type>Spotify</Type>
      </TextContainer>
    </DetailsContainer>
  );
}
