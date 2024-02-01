import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <Container className="">
      <div>
        <h1>
          <span>Don't worry,</span>
          <br />
          <span>We'll fix it.</span>
          <p>
            Welcome to <span>iRepair</span> , your one-stop place for all kinds
            of <span>Macbook repairs</span> and diagnostics.
          </p>
        </h1>
        <Button>Book a service</Button>
      </div>
      <div></div>
    </Container>
  );
};

export default HeroSection;
