import {Button} from "@/components/ui/button";
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import Cta from "@/components/CTA";
import {recentSessions} from "@/constants";

const Page = () => {
  return (
    <main>
        <h1 className="text-2xl underline">Popular Companions</h1>
        <section className="home-section">
            <CompanionCard
                id="123"
                name="Neura the Brainy Explorer"
                topic="Neural Network of the Brain"
                subject="Science"
                duration={45}
                color="#ffca34"
            /><CompanionCard
                id="456"
                name="Countsy the Number Wizard"
                topic="Derivatives and Integrals"
                subject="Math"
                duration={45}
                color="#ffda6e"
            /><CompanionCard
                id="789"
                name="Verba the Vocabulary Builder"
                topic="language"
                subject="English Literature"
                duration={45}
                color="#bd27f5"
            />
        </section>
        <section className="home-section">
            <CompanionsList
                title="Recently Completed Sessions"
                companions={recentSessions}
                classNames="w-2/3 max-lg:w-full"
            />
            <Cta />
        </section>
    </main>
  )
}

export default Page