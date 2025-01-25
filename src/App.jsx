import './App.css';
import {countSoldItems} from "./utils/countitems.js";
import {countBoughtItems} from "./utils/countitems.js";

function App() {

  let numberOfBoughtTVs = countBoughtItems();
  let numberOfSoldTVs = countSoldItems();
  let stillToSell = countBoughtItems()-countSoldItems();
  console.log(numberOfSoldTVs);
  console.log(numberOfBoughtTVs);
  console.log(stillToSell);
  return (
      <>
          <h1>Aantal verkochte producten</h1>
          <article className="sold">
              <p>{numberOfSoldTVs}</p>
          </article>
          <h1>Aantal ingekochte producten</h1>
          <article className="bought">
              <p>{numberOfBoughtTVs}</p>
          </article>
          <h1>Voorraad</h1>
          <article className="stock">
              <p>{stillToSell}</p>
          </article>
      </>

  )
}

export default App
