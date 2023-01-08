import { useLoaderData } from "react-router-dom";
import  data  from "../data"

const Price = (props) => {
  // get the data fetched by our loader
//   const stock = useData();

  return (
    <div>
      <h1>
        <h1>{data[0].name}</h1>
        <h2>{data[0].symbol}</h2>
        <h2>{data[0].lastPrice}</h2>
        
      </h1>
      {/* <h2>{stock.open}</h2> */}
    </div>
  );
};

export default Price;