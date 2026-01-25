

import LogoSection from '../components/LogoSection'
import WelcomeCard from '../components/WelcomeCard'
import HeroBackground from '../components/HeroBackground'

const Home = () => {
    return (
        <div>
            <div className="relative h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark">
                <HeroBackground/>

                <div className="relative z-20 flex flex-col h-full">
                    <main className="flex-1 flex flex-col items-center justify-between py-10">
                        <LogoSection />
                        <WelcomeCard />
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Home
