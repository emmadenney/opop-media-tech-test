import styled from "styled-components";

export const PageContainer = styled.main`
  text-align: center;
  background-color: #000000;
  height: 100vh;
`;

export const MobileContainer = styled.section`
  width: 376px;
  height: 816px;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
`;

export const HeaderContainer = styled.section`
  height: 230px;
  color: ${(props) => props.theme.primaryTextColor};
  background-color: ${(props) => props.theme.primaryBgColor};
  padding-top: 40px;
`;

export const AvatarContainer = styled.div`
  width: 130px;
  height: 130px;
  margin: auto;
  border: solid;
  border-radius: 100%;
  border-color: #ffffff;
  border-width: 2px;
  padding: 5px;
`;

export const Avatar = styled.img`
  height: 120px;
  border: solid;
  border-radius: 100%;
  border-width: 5px;
  border-color: #ffffff;
`;

export const Name = styled.h2`
  margin-bottom: 5px;
  font-weight: normal;
  font-size: 20px;
`;

export const Title = styled.p`
  font-size: 14px;
  margin-top: 0;
`;

export const ContactBarContainer = styled.section`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-around;
  align-items: center;
  width: 376px;
  height: 68px;
  border-top: solid;
  border-width: 0.5px;
  border-color: #ffffff;
  font-size: 14px;
  background-color: ${(props) => props.theme.secondaryBgColor};
  color: #ffffff;
`;

export const GridIcon = styled.img`
  max-width: 18px;
`;

export const GridText = styled.p`
  margin: 0;
`;

export const MiddleCol = styled.div`
  border-left: solid;
  border-right: solid;
  border-width: 0.5px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const AddContact = styled.div`
  height: 50px;
  font-size: 12px;
  color: #f9f9f9;
  display: grid;
  grid-template-rows: auto;
  align-content: center;
  background: ${(props) => props.theme.actionBgColor};
`;

export const Tagline = styled.p`
  color: #81848e;
  font-size: 11px;
  padding: 10px;
  margin: 5px;
`;

export const DetailsContainer = styled.section`
  display: grid;
  grid-template-columns: 10% auto;
  align-items: center;
  padding-left: 50px;
  text-align: left;
  background-color: #f9f9f9;
`;

export const TextContainer = styled.div`
  padding-left: 25px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const Detail = styled.p`
  font-size: 14px;
  margin: 0;
  line-height: 19px;
  color: ${(props) => props.theme.secondaryTextColor};
`;

export const Type = styled.p`
  margin: 0;
  line-height: 16px;
  font-size: 12px;
  color: ${(props) => props.theme.thirdTextColor};
`;

export const ButtonsContainer = styled.section`
  height: 80px;
  display: grid;
  grid-template-columns: 50% 50%;
  font-size: 14px;
  color: #f9f9f9;
`;

export const ShareButton = styled.div`
  background-color: ${(props) => props.theme.thirdBgColor};
`;

export const VisitButton = styled.div`
  border-left: solid;
  border-color: #ffffff;
  border-width: 0.7px;
  background-color: ${(props) => props.theme.secondaryBgColor};
`;
