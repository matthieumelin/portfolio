import React, { useState } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

import styled from "styled-components";

import { Colors } from "./utils/style/Colors";

import AvatarImage from "./assets/images/avatar.jpg";
import DownloadIcon from "./assets/icons/download.svg";
import TimesIcon from "./assets/icons/times.svg";
import BarsIcon from "./assets/icons/bars.svg";
import GraduationIcon from "./assets/icons/graduation.svg";
import LinkedInIcon from "./assets/icons/socials/linkedin.svg";

import { ProjectData } from "./data/project/ProjectData";
import { ProjectTags } from "./data/project/ProjectTags";
import { SkillData } from "./data/SkillData";
import { TrainingData } from "./data/TrainingData";

import "./App.css";

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
              <NavbarToggle
                src={navbarIsOpen ? BarsIcon : TimesIcon}
                style={{ width: 24, height: 24 }}
                onClick={() => setNavbarIsOpen(!navbarIsOpen)}
              />
            </NavbarWrapper>
            <NavbarMenu navbarIsOpen={navbarIsOpen}>
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
          <HeaderContent>
            <HeaderSubtitle>Hello, Je suis</HeaderSubtitle>
            <HeaderTitle>Matthieu</HeaderTitle>
            <HeaderJob>Développeur web & mobile</HeaderJob>
          </HeaderContent>
        </Header>
        <Main>
          <Presentation id="#presentation">
            <PresentationHeader>
              <Title>
                Présentation
                <TitleSpan>Présentation</TitleSpan>
              </Title>
            </PresentationHeader>
            <PresentationBody>
              <PresentationWrapper>
                <PresentationAvatar src={AvatarImage} />
                <PresentationAbout>
                  <PresentationTextTitle>Hello,</PresentationTextTitle>
                  <PresentationText>
                    Je suis{" "}
                    <PresentationTextStrong>
                      Matthieu Melin
                    </PresentationTextStrong>
                    , Développeur Web & Mobile, passionné par les nouvelles
                    technologies.
                  </PresentationText>
                </PresentationAbout>
              </PresentationWrapper>
              <PresentationLink
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/matthieu-melin/"
              >
                <Icon src={DownloadIcon} style={{ width: 20, height: 20 }} />{" "}
                Télécharger CV
              </PresentationLink>
            </PresentationBody>
          </Presentation>
          <Portfolio id="#portfolio">
            <PortfolioHeader>
              <Title>
                Portfolio
                <TitleSpan>Qui suis-je ?</TitleSpan>
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
          <Skills id="skills">
            <SkillsHeader>
              <Title>
                Compétences
                <TitleSpan>Mes réalisations</TitleSpan>
              </Title>
              <Description>
                Mes expériences professionnelles me permettent de disposer des
                compétences techniques :
              </Description>
            </SkillsHeader>
            <SkillsBody>
              {SkillData &&
                SkillData.map((skill) => {
                  return (
                    <SkillGroup key={skill.id}>
                      <SkillName>
                        {skill.name}
                        <SkillPercent>{skill.percent}%</SkillPercent>
                      </SkillName>
                      <SkillProgressContainer>
                        <SkillProgress percent={skill.percent} />
                      </SkillProgressContainer>
                    </SkillGroup>
                  );
                })}
            </SkillsBody>
          </Skills>
          <Trainings id="trainings">
            <TrainingsHeader>
              <Title>
                Formations
                <TitleSpan>Formations</TitleSpan>
              </Title>
            </TrainingsHeader>
            <TrainingsBody>
              {TrainingData &&
                TrainingData.map((training) => {
                  return (
                    <Training key={training.id}>
                      <Icon
                        src={GraduationIcon}
                        style={{
                          display: "block",
                          margin: "0 auto",
                          height: 200,
                          width: 200,
                        }}
                      />
                      <TrainingName>{training.name}</TrainingName>
                      <TrainingDuration>{training.duration}</TrainingDuration>
                      <TrainingDescription>
                        {training.description}
                      </TrainingDescription>
                    </Training>
                  );
                })}
            </TrainingsBody>
          </Trainings>
        </Main>
        <Footer>
          <Contact>
            <FooterDescription>
              N'hésitez pas à me contacter, je suis à votre disposition pour
              plus d'informations.
            </FooterDescription>
            <Button
              type="button"
              style={{
                width: "max-content",
                display: "block",
                margin: "0 auto",
              }}
            >
              matthieumelin62@gmail.com
            </Button>
          </Contact>
          <FooterCopyright>
            © Copyright Tous droits réservés - 2022{" "}
            <FooterCopyrightSpan>Matthieu MELIN</FooterCopyrightSpan>
          </FooterCopyright>
          <FooterSocials>
            <FooterSocialItem>
              <FooterSocialLink
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/matthieu-melin/"
              >
                <Icon src={LinkedInIcon} style={{ width: 14, height: 14 }} />
              </FooterSocialLink>
            </FooterSocialItem>
          </FooterSocials>
        </Footer>
      </StyledApp>
    </BrowserRouter>
  );
}

const StyledApp = styled.div``;
const Icon = styled.img``;
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
const Header = styled.header``;
const HeaderContent = styled.div`
  padding: 20px;
  background-color: ${Colors.darkGray};

  @media screen and (min-width: 1024px) {
    padding: 50px;
  }
`;
const HeaderTitle = styled.h1`
  margin: 0;
  color: white;
  text-transform: uppercase;
  font-size: 3rem;
`;
const HeaderSubtitle = styled.h2`
  margin: 0;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 300;
  font-size: 1.1rem;
`;
const HeaderJob = styled.p`
  margin: 0;
  font-weight: 300;
  font-size: 1rem;
  color: ${Colors.red};
`;
const Navbar = styled.nav`
  background-color: #fff;
  padding: 20px;

  @media screen and (min-width: 1024px) {
    display: flex;
    gap: 20px;
    align-items: center;
  }
`;
const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NavbarToggle = styled(Icon)`
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
const NavbarBrand = styled.p`
  margin: 0;
  color: ${Colors.darkGray};
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
`;
const NavbarMenu = styled.ul`
  list-style: none;
  overflow: hidden;
  padding: 0;
  margin: ${(props) => (props.navbarIsOpen ? "10px 0 0 0" : "0")};
  max-height: ${(props) => (props.navbarIsOpen ? "300px" : "0")};
  -webkit-transition: margin 0.5s, max-height 0.5s;
  -moz-transition: margin 0.5s, max-height 0.5s;
  -ms-transition: margin 0.5s, max-height 0.5s;
  -o-transition: margin 0.5s, max-height 0.5s;
  transition: margin 0.5s, max-height 0.5s;

  @media screen and (min-width: 1024px) {
    max-height: 300px;
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 0 auto;
  }
`;
const NavbarMenuItem = styled.li``;
const NavbarMenuLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;
const Main = styled.main``;
const Presentation = styled.section`
  margin: 60px 20px;
  @media screen and (min-width: 1024px) {
    margin: 60px;
  }
`;
const PresentationHeader = styled.header``;
const PresentationBody = styled.div`
`;
const PresentationWrapper = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
  }
`;
const PresentationLink = styled.a`
  background-color: ${Colors.red};
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  padding: 15px 10px;
  border-radius: 5px;
  margin: 20px 0;
  transition: 0.5s;
  cursor: pointer;
  display: block;
  &:hover {
    background-color: ${Colors.lightRed};
    transition: 0.5s;
  }
  @media screen and (min-width: 1024px) {
    width: max-content;
    display: block;
    margin: 0 auto;
  }
`;
const PresentationAbout = styled.div`
  @media screen and (min-width: 1024px) {
    width: max-content;
  }
`;
const PresentationAvatar = styled.img`
  border-radius: 100%;
  display: block;
  width: 200px;
  height: 200px;
  margin: 0 auto 20px auto;

  @media screen and (min-width: 1024px) {
    margin: 0 30px 0 0;
  }
`;
const PresentationTextTitle = styled.h2`
  margin: 0;
  color: ${Colors.darkGray};

  @media screen and (min-width: 1024px) {
    font-size: 2rem;
  }
`;
const PresentationText = styled.p`
  margin: 0;
  color: ${Colors.gray};
  font-style: italic;

  @media screen and (min-width: 1024px) {
    font-size: 1.3rem;
  }
`;
const PresentationTextStrong = styled.strong`
  color: ${Colors.darkGray};
`;
const Portfolio = styled.section`
  margin: 60px 20px;
  @media screen and (min-width: 1024px) {
    margin: 60px;
  }
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
  cursor: pointer;
`;
const PortfolioBody = styled.div`
  display: grid;
  gap: 20px;
  margin: 30px 0;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
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
  cursor: pointer;

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
const Skills = styled.section`
  padding: 0 20px;
  margin: 60px 0;
  @media screen and (min-width: 1024px) {
    margin: 60px;
  }
`;
const SkillsHeader = styled.div``;
const SkillsBody = styled.div``;
const SkillGroup = styled.div`
  max-width: 768px;
`;
const SkillProgressContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 100%;
  position: relative;
`;
const SkillProgress = styled.div`
  background-color: ${Colors.red};
  border-radius: 20px;
  width: ${(props) => `${(props.percent / 100) * 100}%`};
  height: 15px;
`;
const SkillPercent = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  color: ${Colors.gray};
  font-weight: 300;
`;
const SkillName = styled.p`
  font-weight: 300;
  text-transform: uppercase;
  color: ${Colors.gray};
  position: relative;
`;
const Title = styled.h2`
  position: relative;
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
  color: ${Colors.gray};

  @media screen and (min-width: 1024px) {
    font-size: 2rem;
  }
`;
const TitleSpan = styled.span`
  z-index: -999;
  font-weight: 600;
  white-space: nowrap;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #e9ecef;

  @media screen and (min-width: 1024px) {
    font-size: 3rem;
  }
`;
const Description = styled.p`
  color: ${Colors.gray};
`;
const Trainings = styled.section`
  margin: 60px 0 60px 0;
`;
const TrainingsHeader = styled.div``;
const TrainingsBody = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  background-color: white;
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 768px) {
    justify-content: center;
  }
`;
const Training = styled.article`
  flex: 0 0 auto;
  width: 320px;
`;
const TrainingName = styled.h2`
  text-transform: uppercase;
  text-align: center;
  color: ${Colors.darkGray};
`;
const TrainingDuration = styled.p`
  color: ${Colors.red};
  text-align: center;
  font-weight: 300;
`;
const TrainingDescription = styled.p`
  color: ${Colors.gray};
  text-align: center;
`;
const Footer = styled.footer`
  background-color: ${Colors.darkGray};
  padding: 20px;
`;
const Contact = styled.div``;
const FooterDescription = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 300;
`;
const FooterCopyright = styled.p`
  color: white;
  font-weight: 300;
  text-align: center;
`;
const FooterCopyrightSpan = styled.span`
  color: ${Colors.red};
`;
const FooterSocials = styled.ul`
  padding: 0;
  display: flex;
  justify-content: center;
  list-style: none;
`;
const FooterSocialItem = styled.li``;
const FooterSocialLink = styled.a`
  border-radius: 100%;
  background-color: ${Colors.red};
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
