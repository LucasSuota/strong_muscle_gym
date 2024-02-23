import { planPrice } from "@/constants";
import PriceCard from "./components/PriceCard";
import PricesTitle from "./components/PricesTitle";

const PricesArea = () => {
  return (
    <section className="w-full mx-auto flex flex-col items-center justify-center">
      <PricesTitle />
      <div className="sm:w-3/5 w-4/5 flex items-center justify-center sm:flex-row flex-col sm:gap-0 gap-2">
        {planPrice.map((plan, index) => (
          <PriceCard
            key={index}
            title={plan.title}
            best={plan.best}
            installments={plan.installments}
            off={plan.off}
            price={plan.price}
          />
        ))}
      </div>
    </section>
  );
};

export default PricesArea;
