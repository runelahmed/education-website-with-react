import HomePageHero from "../components/hero/HomePageHero";
import HomePagePrograms from "../components/program/HomePagePrograms";
import ShowCase from "../components/showcase/ShowCase";
import News from '../components/news/News';
import Stories from "../components/news/Stories";
import Partner from "../components/partner/Partner";

const HomePage = () => {
  return (
    <>
      <HomePageHero/>
      <HomePagePrograms/>
      <News/>
      <ShowCase/>
      <Stories/>
      <Partner/>

    </>
  )
}

export default HomePage
