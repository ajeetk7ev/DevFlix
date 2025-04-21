import Footer from "@/components/footer/footer";
import CompanySlider from "@/components/home/company-slider";
import JoinDevFlix from "@/components/home/CTASection";
import Features from "@/components/home/features-section";
import { Navbar } from "@/components/home/header/navbar";
import Hero from "@/components/home/hero-section";
import WhyDevFlix from "@/components/home/why-devflix";
import Instructor from "@/components/home/instructor-section";


export default function Home(){
    

    return(
        <div className="w-screen min-h-screen bg-white dark:bg-slate-900">
            <Navbar/>
            <section>
                <Hero/>
            </section>

            <section>
                <WhyDevFlix/>
            </section>

            <section>
                <CompanySlider/>
            </section>

              <section>
                <Features/>
            </section>

            <section>
                <Instructor/>
            </section>

          

            <section>
            <JoinDevFlix/>
            </section>

            <section>
              <Footer/>
            </section>
        </div>
    )
}