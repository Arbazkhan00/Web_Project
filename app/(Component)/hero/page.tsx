import Image from "next/image"
import  heroimg from "@/public/h.png"
export default function Hero(){
    
    return(
        <div className="-mt-0">
         <Image
         src={heroimg}
         alt="hero Image"
         width={5000}
         height={10}
         
         />
        </div>
    )
}