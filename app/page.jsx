import HeroPage from "./components/HeroPage";
import Testimonials from "./components/Testimonials";
import RecentTutors from "./components/RecentTutors";

export default function Home() {
    return (
        <div>
            <HeroPage />
            <Testimonials />
            <RecentTutors />
        </div>
    );
}
