import jake_profile from "../jake_profile.png";
import {
  HeaderContainer,
  AvatarContainer,
  Avatar,
  Name,
  Title,
} from "../styles";

export default function Header() {
  return (
    <HeaderContainer>
      <AvatarContainer>
        <Avatar src={jake_profile} alt="Jake Jones"></Avatar>
      </AvatarContainer>
      <Name>Jake Jones</Name>
      <Title>Managing Director</Title>
    </HeaderContainer>
  );
}
