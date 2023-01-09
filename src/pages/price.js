// import { useLoaderData } from "react-router-dom";
import  data  from "../data"
import { useParams } from "react-router-dom";

const Price = (props) => {
  const {symbol} = useParams() 
   console.log(symbol);



  // get the data fetched by our loader
  const stock = data.find(element =>{
    console.log(element);
    return element.symbol === symbol
  });

  return (
    <div>
      <h1>
        <h1>{stock.name}</h1>
        <h2>{stock.symbol}</h2>
        <h2>{stock.lastPrice}</h2>
       
      </h1>
      {/* <h2>{stock.open}</h2> */}
    </div>
  );
};

export default Price;