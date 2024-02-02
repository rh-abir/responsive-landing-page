import Container from "@/components/Container";
import BatteryReplacement from "@/components/ServiceTiles/BatteryReplacement";
import ChipsetReplacement from "@/components/ServiceTiles/ChipsetReplacement";
import DataRecovery from "@/components/ServiceTiles/DataRecovery";

const ServicesSection = () => {
  return (
    <Container className="my-40">
      <div className="text-center flex flex-col  items-center justify-between ">
        <h2>THis is service</h2>
        <p className="max-w-[80ch] mt-10 mb-20">
          All our technicians are fully qualilfied and licensed. Moreover,
          theyare incredibly skillful and proficient invarious aspects of
          computer repair.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-5">
        <BatteryReplacement />
        <ChipsetReplacement />
        <DataRecovery />
        <div className="bg-yellow-500 h-[415px] rounded-2xl col-span-12"></div>
        <div className="bg-yellow-500 h-[415px] rounded-2xl col-span-12 md:col-span-6  lg:col-span-4"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 md:col-span-6 lg:col-span-4"></div>
        <div className="bg-yellow-500 h-[415px] rounded-2xl  col-span-12 md:col-span-12 lg:col-span-4"></div>
      </div>
    </Container>
  );
};

export default ServicesSection;
