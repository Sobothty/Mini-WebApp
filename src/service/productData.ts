import "dotenv/config";
import ProductType from "../types/ProductType";

const dataFetching = async (): Promise<ProductType[]> => {
  const URL = process.env.BASE_URL as string;
  try {
    const response = await fetch(`${URL}products`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: ProductType[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error for further handling
  }
};

export default dataFetching;
