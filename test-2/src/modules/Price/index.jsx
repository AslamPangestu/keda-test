import styles from "./index.module.sass";

const PRICES = [
  {
    name: "Basic",
    price: "Rp 100.000,00",
    features: [
      "Record incoming goods",
      "Record outgoing goods",
      "Record profit results",
    ],
  },
  {
    name: "Business",
    price: "Rp 200.000,00",
    features: [
      "Record incoming and outgoing goods",
      "Record Profits",
      "Can analyze sales results with CHART",
      "Support 7x24 Hours",
    ],
  },
  {
    name: "Entrepreneur",
    price: "Rp 300.000,00",
    features: [
      "Record incoming and outgoing goods",
      "Record Profits",
      "Can analyze sales results with CHART",
      "Support 7x24 Hours",
      "Export data to Excel",
      "AI Income prediction",
    ],
  },
];

const PriceModule = () => {
  return (
    <section id="price" className={styles.priceSection}>
      <span>Pricing</span>
      <div className={styles.priceContainer}>
        {PRICES.map((item) => (
          <div key={item.name}>
            <div>{item.name}</div>
            <div>{item.price}</div>
            <div>
              <span>Feature:</span>
              <ul>
                {item.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PriceModule;
