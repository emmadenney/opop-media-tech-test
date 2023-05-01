import share from "../logos/share.png";
import world from "../logos/world.png";
import {
  ButtonsContainer,
  ShareButton,
  GridIcon,
  VisitButton,
} from "../styles";

export default function Buttons() {
  return (
    <ButtonsContainer>
      <ShareButton>
        <GridIcon style={{ paddingTop: "16px" }} src={share} alt="share" />
        <p style={{ margin: "5px" }}>SHARE</p>
      </ShareButton>
      <VisitButton>
        <GridIcon style={{ paddingTop: "16px" }} src={world} alt="web" />
        <p style={{ margin: "5px" }}>VISIT WEBSITE</p>
      </VisitButton>
    </ButtonsContainer>
  );
}
