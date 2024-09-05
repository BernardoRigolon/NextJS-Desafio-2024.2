import AboutUsCard from "./card";

export default function AboutUs() {
    return (
        <div className="flex flex-col lg:flex-row justify-center lg:py-40 lg:px-[30px] lg:gap-[120px]">
            <AboutUsCard
            title="Missão"
            description="oi"
            />
            <AboutUsCard
            title="Visão"
            description="oi"
            />
            <AboutUsCard
            title="Valores"
            description="oi"
            />
        </div>
    )
}