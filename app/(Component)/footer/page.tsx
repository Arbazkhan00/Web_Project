import Image from "next/image"
import ftim from "@/public/h.png"
export default function Footer(){
    return(
       <footer className="px-28 bg-sky-500 py-28  text-white">
        <div className="flex justify-center mb-4 text-4xl font-semibold"> We're Trusted Our Client</div>
  
            <div className="flex items-center justify-between -mb-16 text-center mt-12  ">
            <div >
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 ">
          
        </div>
        <div className="-ml-8 mt-4">
            <p>Naveed Sir</p> <br />
            <p className="-mt-4 ">Full Stack Developer</p>
        </div>
                
                <p className="mt-6">There are many variations of passages of Lorem Ipsum available, but the
majority have suffered alteration in some form, by injected humour,
or randomised words which don't look even slightly believable.
If you are going to use a passage of Lorem Ipsum, </p>

            </div>
            <div>
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
          
        </div>
        <div className="-ml-8 mt-4">
            <p>Arbaz khan </p><br />
            <p className="-mt-4">FrontEnd Developer</p>
        </div>
                
                <p className="mt-6">There are many variations of passages of Lorem Ipsum available, but the
majority have suffered alteration in some form, by injected humour,
or randomised words which don't look even slightly believable.
If you are going to use a passage of Lorem Ipsum, </p></div>
        </div>
    
       </footer>
    )
}