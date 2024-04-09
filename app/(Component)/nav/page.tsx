import Link from "next/link"
export default function Nav(){
    return(
       
            
        <nav className="mt-4 px-36 sticky top-0 bg-none">
          
        <div className="flex justify-between">
        <div className="text-2xl -mt-1">LOGO</div>
            <ul className="flex space-x-7  ">
              <Link href={"/"}>  <li className="hover:underline">HOME</li> </Link>
              <Link href={"/about"}>   <li className="hover:underline">ABOUT</li> </Link>
              <Link href={"page"}>     <li className="hover:underline">PAGE</li> </Link>
              <Link href={"/services"}>   <li className="hover:underline">SERVICES</li> </Link>
              <Link href={"/protfolio"}>  <li className="hover:underline">PROTFOLIO</li> </Link>
              <Link href={"/blog"}>  <li className="hover:underline">BLOG</li> </Link>
              <Link href={"/contact"}>  <li className="hover:underline">CONTACT</li> </Link>
            </ul>
            <div>
                <input type="search" name="Sreach" placeholder="Sreach" className="text-black rounded-2xl p-1 -mt-10 "/>
            </div>
        </div>
    
        </nav>
    )
}