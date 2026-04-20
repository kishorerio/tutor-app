import HeroPage from "./components/HeroPage";
import Testimonials from "./components/Testimonials";
import RecentTutors from "./components/RecentTutors";
import TutorProfileDisplay from "./components/TutorProfileDisplay";

export default function Home() {
    // Set this to true to show tutor profile, false to hide
    const isTutorLoggedIn = false;

    return (
        <div>
            {isTutorLoggedIn && <TutorProfileDisplay />}
            <HeroPage />
            <Testimonials />
            <RecentTutors />
        </div>
    );
}
