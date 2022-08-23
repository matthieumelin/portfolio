import React, { useState } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

import styled from "styled-components";

import { Colors } from "./utils/style/Colors";

import AvatarImage from "./assets/images/avatar.jpg";
import DownloadIcon from "./assets/icons/download.svg";
import TimesIcon from "./assets/icons/times.svg";
import BarIcon from "./assets/icons/bar.svg";

import { ProjectData } from "./data/ProjectData";
import { ProjectTags } from "./data/ProjectTags";

export default function App() {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  const [selectedTag, setSelectTag] = useState(ProjectTags[0]);

  return (
    <BrowserRouter>
      <StyledApp>
        <Header>
          <Navbar>
            <NavbarWrapper>
              <NavbarBrand>Matthieu Melin</NavbarBrand>
              <Icon
                src={navbarIsOpen ? TimesIcon : BarIcon}
                style={{ width: 24, height: 24 }}
                onClick={() => setNavbarIsOpen(!navbarIsOpen)}
              />
            </NavbarWrapper>
            <NavbarMenu>
              <NavbarMenuItem>
                <NavbarMenuLink to="#home">Accueil</NavbarMenuLink>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <NavbarMenuLink to="#presentation">Présentation</NavbarMenuLink>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <NavbarMenuLink to="#realisations">Réalisations</NavbarMenuLink>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <NavbarMenuLink to="#skills">Compétences</NavbarMenuLink>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <NavbarMenuLink to="#contact">Contact</NavbarMenuLink>
              </NavbarMenuItem>
            </NavbarMenu>
          </Navbar>
        </Header>
        <Main>
          <Presentation id="#presentation">
            <PresentationHeader>
              <Title>
                Présentation
                <TitleSpan>Qui suis-je ?</TitleSpan>
              </Title>
            </PresentationHeader>
            <PresentationBody>
              <PresentationWrapper>
                <PresentationAvatar src={AvatarImage} />
                <PresentationTextTitle>Hello,</PresentationTextTitle>
                <PresentationText>
                  Je suis{" "}
                  <PresentationTextStrong>
                    Matthieu Melin
                  </PresentationTextStrong>
                  , Développeur Web & Mobile, passionné par les nouvelles
                  technologies.
                </PresentationText>
              </PresentationWrapper>
              <Button>
                <Icon src={DownloadIcon} style={{ width: 20, height: 20 }} />{" "}
                Télécharger CV
              </Button>
            </PresentationBody>
          </Presentation>
          <Portfolio id="#portfolio">
            <PortfolioHeader>
              <Title>
                Portfolio
                <TitleSpan>Réalisations</TitleSpan>
              </Title>
              <PortfolioFilters>
                {ProjectTags &&
                  ProjectTags.map((tag, index) => {
                    return (
                      <PortfolioFiltersItem
                        key={index}
                        isActive={tag === selectedTag}
                        onClick={() => setSelectTag(tag)}
                      >
                        {tag}
                      </PortfolioFiltersItem>
                    );
                  })}
              </PortfolioFilters>
            </PortfolioHeader>
            <PortfolioBody>
              {ProjectData &&
                ProjectData.filter((project) =>
                  project.types.includes(selectedTag)
                ).map((project) => {
                  return (
                    <PortfolioProject key={project.id} image={project.image}>
                      <PortfolioProjectAbout>
                        <PortfolioProjectAboutName>
                          {project.name}
                        </PortfolioProjectAboutName>
                        <PortfolioProjectAboutDescription>
                          {project.description}
                        </PortfolioProjectAboutDescription>
                      </PortfolioProjectAbout>
                    </PortfolioProject>
                  );
                })}
            </PortfolioBody>
          </Portfolio>
        </Main>
        <Footer></Footer>
      </StyledApp>
    </BrowserRouter>
  );
}

const StyledApp = styled.div``;
const Header = styled.header``;
const Navbar = styled.nav`
  background-color: #fff;
  padding: 20px;
`;
const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NavbarBrand = styled.h1`
  margin: 0;
  color: ${Colors.gray};
  text-transform: uppercase;
`;
const NavbarMenu = styled.ul`
  list-style: none;
  padding: 0;
`;
const NavbarMenuItem = styled.li``;
const NavbarMenuLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;
const Main = styled.main``;
const Presentation = styled.section`
  margin: 30px;
`;
const PresentationHeader = styled.header``;
const PresentationBody = styled.div``;
const PresentationWrapper = styled.div``;
const PresentationAvatar = styled.img`
  border-radius: 100%;
  display: block;
  width: 200px;
  height: 200px;
  margin: 0 auto 20px auto;
`;
const PresentationTextTitle = styled.h2`
  margin: 0;
  color: ${Colors.darkGray};
`;
const PresentationText = styled.p`
  margin: 0;
  color: ${Colors.gray};
  font-style: italic;
`;
const PresentationTextStrong = styled.strong`
  color: ${Colors.darkGray};
`;
const Portfolio = styled.section`
  margin: 30px;
`;
const PortfolioHeader = styled.div``;
const PortfolioFilters = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const PortfolioFiltersItem = styled.li`
  background-color: ${(props) => (props.isActive ? Colors.red : Colors.gray)};
  width: max-content;
  color: white;
  border-radius: 2px;
  padding: 1px 10px;
`;
const PortfolioBody = styled.div`
  display: grid;
  gap: 20px;
  margin: 30px 0;
`;
const PortfolioProjectAbout = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: inherit;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.2s linear;
  padding: 0 10px;
  height: inherit;
  display: flex;
`;
const PortfolioProject = styled.article`
  height: 200px;
  border-radius: 5px;
  box-shadow: 10px 10px 60px rgb(0 0 0 / 20%);
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &:hover ${PortfolioProjectAbout} {
    visibility: visible;
    opacity: 1;
  }
`;
const PortfolioProjectAboutName = styled.h3`
  margin: 0;
  color: #fff;
`;
const PortfolioProjectAboutDescription = styled.p`
  margin: 0;
  text-align: center;
  color: #fff;
`;
const Button = styled.div`
  background-color: ${Colors.red};
  color: white;
  text-transform: uppercase;
  text-align: center;
  padding: 15px 10px;
  border-radius: 5px;
  margin: 20px 0;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    background-color: ${Colors.lightRed};
    transition: 0.5s;
  }
`;
const Icon = styled.img``;
const Title = styled.h2`
  position: relative;
  text-align: center;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 400;
  color: ${Colors.gray};
`;
const TitleSpan = styled.span`
  z-index: -999;
  font-size: 2.5rem;
  font-weight: 600;
  white-space: nowrap;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #e9ecef;
`;
const Footer = styled.footer``;
