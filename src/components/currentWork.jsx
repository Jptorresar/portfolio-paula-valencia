import "../styles/currentWork.css";
import { CurrentGrid } from "./currentGrid";

function literature() {
  return (
    <>
      <CurrentGrid
        image="design"
        nombre="Design Project"
        texto="My design project focuses on creating an engaging typing lesson for elementary students using the Typetastic program. The project includes a teacher-friendly website featuring lesson plans, interactive activities, and assessment tools, all designed to support effective and fun typing instruction while fostering digital literacy skills.
"
        link="/Design Project.pdf"
        isDownload={true}
        linktext="Download my design project"
      ></CurrentGrid>
      <CurrentGrid
        image="website"
        nombre="Multimedia Project"
        texto="Welcome to my Typing Lessons website! This resource is designed to support teachers in delivering engaging and effective typing lessons for elementary students using the Typetastic program. Explore lesson plans, interactive activities, and assessment tools tailored to foster digital literacy and make learning to type both fun and impactful.
"
        link="https://typing-lessons-864h.vercel.app/"
        isDownload={false}
        linktext="Visit my website"
      ></CurrentGrid>
      <CurrentGrid
        image="literature"
        nombre="Literature Review"
        texto="My literature review explores the benefits of dual language immersion programs, examining their impact on student achievement, cognitive development, and bilingual proficiency. It highlights key factors such as teacher and student perspectives, motivation, and cultural connections to showcase how these programs support academic success and personal growth.
"
        link="/Lit Review.pdf"
        isDownload={true}
        linktext="Download here"
      ></CurrentGrid>
    </>
  );
}
export default literature;
