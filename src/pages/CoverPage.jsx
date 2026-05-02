import { AboutMe } from "./AboutMe"
import { Details } from "./Details"
import { Flyogins1 } from "./Flyogins1"
import { Flyogins2 } from "./Flyogins2"
import { Flyogins3 } from "./Flyogins3"
import { Flyogins4 } from "./Flyogins4"
import { Flyogins5 } from "./Flyogins5"
import { Flyogins6 } from "./Flyogins6"
import { ThankYou } from "./ThankYou" 
import { Wedding2 } from "./Wedding2"
import { Wedding3 } from "./Wedding3"
import { Wedding4 } from "./Wedding4"
import { Wedding5 } from "./Wedding5"
import { Wedding6 } from "./Wedding6"
import { Wedding7 } from "./Wedding7"
import { Weddings } from "./Weddings"
import { WorkCase } from "./WorkCase"

export function CoverPage () {
  return (
   <> 

    <div className="relative flex  justify-center items-center h-[40vh] w-screen sm:h-screen md:h-screen lg:h-screen overflow-hidden">

      {/* background image */}
      <img
        src="/image/Cover.jpg"
        className="absolute inset-0 w-full h-full object-fill scale-100 brightness-100 z-0"
      />
    </div>

    <AboutMe />
  
    <WorkCase />

    <Weddings />

    <Wedding2 />

    <Wedding3 />

    <Wedding4 />

    <Wedding5 />

    <Wedding6 />

    <Wedding7 />

    <Details />

    <Flyogins1 />

    <Flyogins2 />

    <Flyogins3 />

    <Flyogins4 />

    <Flyogins5 />

    <Flyogins6 />
    
    <ThankYou />
  </>
  )
}