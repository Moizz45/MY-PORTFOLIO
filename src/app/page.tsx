import Image from "next/image";
import Header from "./component/header";


export default function Home() {
  return (
    <ul>
    <Header/>
    <h1><span className="portfoliocolor">Port</span>folio</h1>
      <div className="HomeContainer"> 
      <div className="ChildContainer"> 
        Hello Everyone,
        <br />
        My Name is <span className="red">ABDUL MOIZ</span>
        <br /> 
        I'm a<span className="green"> Frontend </span>  Developer
        <hr />
        <a href="https://www.linkedin.com/in/abdul-moiz-77690b207" className="exploremore"> Explore More </a>
      </div>
      <div id="round-image">
        <img src="moiz.jpg" alt="mypicture" className="profilepicture"></img>
      </div>
      </div>
      <br />
          <h1 className="MainHeadings"> My Skills </h1>
        <br />
        <div className="skillsParent">
        <div className="skillsContainer"> HTML </div>
        <div className="skillsContainer"> CSS </div>
        <div className="skillsContainer"> JavaScript </div>
        <div className="skillsContainer"> Typescript </div>
        <div className="skillsContainer"> Word </div>
        <div className="skillsContainer"> Excel </div>
        <div className="skillsContainer"> Adobe Photoshop </div>
        <div className="skillsContainer"> Next JS </div>
        <div className="skillsContainer"> Github </div>
        </div>
        <br />
          <div>
            <h1 className="MainHeadings" > About me ? </h1>
            <br />
            <p>Hi! I'm Abdul Moiz Welcome to my portfolio! I'm a passionate FrontEnd web developer with a keen eye for design and functionality. , I am pursuing an IT course of Generative AI, Web3 and Metaverse at Governor House Sindh. Where we are currently learning advanced technologies like Next JS. With a strong foundation in HTML, CSS, and TypeScript/Javascript, I enjoy creating beautiful, user-friendly websites. Over the past few months, I've worked on diverse projects, from building simple Calculator to static Student Management System. I specialize in responsive design, ensuring that every user has the best experience, no matter what device they're using.</p>
            </div>
            <br />
            
        <br /> <br />
        <h1 className="MainHeadings" > Contact Us </h1>
        <div className="MainContact">
                <div className="contactus">
                    <form action="">
                        {/* {/<ul> } */}
                            <h1 className="h1contact"> <b> Contact Us </b></h1>
                            <input type="text" placeholder="Name" className="design" required/>
                            <input type="email" placeholder="Email" className="design" required/>
                            <textarea name="message" placeholder="Your Message" className="designMessage" required></textarea>
                            <button className="button">Send Message</button>
                        {/* { </ul> } */}
                    </form>
                </div>
              
            </div>
            <footer>
              <div className="Footer">
                <p className="footer-text">ABDUL MOIZ</p>
                <div className="social-profiles">
                <a href="https://www.linkedin.com/in/abdul-moiz-77690b207" target="blank">
                 <img src="linkedin.png" alt="linkedin-profile" className="footer-icons"/> 
                </a>
                <a href="https://github.com/Moizz45" target="blank">
                <img src="github.png" alt="github-profile" className="footer-icons" />
                </a>
                <a href="https://discord.com/channels/@me" target="blank">
                <img src="discord.png" alt="discord-profile"  className="footer-icons"/>
                </a>
                </div>
                <br />
                <p className="footer-text-last"> © Web Developer. All rights deserved</p>
              </div>
            </footer>
        
    </ul>
  );
}