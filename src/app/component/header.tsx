import Link from "next/link"

export default function Header(){
    return(

        <ul className="header">
            <div className="header-button">
                {/* <h1> <span className="logo"> Portfolio </span></h1> */}
                <Link href={"/home"}><li>| Home |</li></Link>
                <Link href={"/skills"}><li>| Skills |</li></Link>
                <Link href={"/about"}><li>| About |</li></Link>
                <Link href={"/contect-us"}><li>| Contact Us |</li></Link>
            </div>
        </ul>
    )
}