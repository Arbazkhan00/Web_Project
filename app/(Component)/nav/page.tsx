import Link from "next/link"

export default function Nav(){
    return(
        <nav className="flex justify-between mt-4 px-36 sticky top-0 ">
            <div className="">Logo</div>
        <div className="">
            
            <ul className="flex space-x-7  ">
              <Link href={"/"}>  <li className="hover:underline">HOME</li> </Link>
              <Link href={"/about"}>   <li className="hover:underline">ABOUT</li> </Link>
              <Link href={"page"}>     <li className="hover:underline">PAGE</li> </Link>
              <Link href={"/services"}>   <li className="hover:underline">SERVICES</li> </Link>
              <Link href={"/protfolio"}>  <li className="hover:underline">PROTFOLIO</li> </Link>
              <Link href={"/blog"}>  <li className="hover:underline">BLOG</li> </Link>
              <Link href={"/contact"}>  <li className="hover:underline">CONTACT</li> </Link>
            </ul>
        </div>
        <div className="">
            <input type="search" placeholder="Sreach" className=" px-2 rounded-full w-36 py-1"
    
            />
        </div>
        </nav>
    )
}