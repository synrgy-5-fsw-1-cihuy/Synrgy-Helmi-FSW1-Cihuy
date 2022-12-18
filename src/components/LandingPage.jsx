import FAQ from "./FAQ";
import Jumbotron from "./Jumbotron";
import Offer from "./Offer";
import Testimonial from "./Testimonial";
import WhyUs from "./WhyUs";
import Banner from "./Banner";

const LandingPage = () => {
    return (
        <>
        <Banner />
        <Offer />
        <WhyUs />
        <Testimonial />
        <Jumbotron />
        <FAQ />
        </>
    )
}

export default LandingPage;