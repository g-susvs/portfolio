import { FC } from 'react'
import { Navbar } from './sections/Navbar'
import { Footer } from './sections/Footer'
import { HomeSection } from './sections/HomeSection'
import { AboutMeSection } from './sections/AboutMeSection'
import { SkillsSection } from './sections/SkillsSection'
import { ProjectsSection } from './sections/ProjectsSection'

export const App: FC = () => {


    return (
        <div className="container">
            <Navbar />

            <main className='main-content'>
                <HomeSection />
                <AboutMeSection />
                <SkillsSection />
                <ProjectsSection />
            </main>

            <Footer />
        </div>
    )
}
