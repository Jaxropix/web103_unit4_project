export const validateFeatures = (features) => {
    if (features.model === "truck" && features.wheels === "sports") {
      return { valid: false, message: "Truck cannot have sports wheels" };
    }
    return { valid: true };
  };
  
const optionPrices = {
    wheels: { standard: 0, sports: 500, offroad: 700 },
    color: { red: 0, blue: 100, black: 150 },
    interior: { basic: 0, luxury: 1000 },
  };
  
  export const calculatePrice = (basePrice, features) => {
    let total = basePrice;
  
    for (const [feature, option] of Object.entries(features)) {
      if (optionPrices[feature] && optionPrices[feature][option] !== undefined) {
        total += optionPrices[feature][option];
      }
    }
  
    return total;
  };
  