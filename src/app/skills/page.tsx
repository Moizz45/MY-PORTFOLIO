import Header from "../component/header";

export default function Skills(){
    return(
        <div>
            <Header/>
            <h1 className="Headings"> These are some of my Skills</h1>
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
        </div>
    )
}