import './App.css';
import {countSoldItems} from "./utils/countitems.js";
import {countBoughtItems} from "./utils/countitems.js";
import {collectBrandItems} from "./utils/collectitems.js";
import {transformItems} from "./utils/transformitems.js";
import {collectSizeItems} from "./utils/collectitems.js";
import {formatSizeItems} from "./utils/collectitems.js";


function App() {

  let numberOfBoughtTVs = countBoughtItems();
  let numberOfSoldTVs = countSoldItems();
  let stillToSell = countBoughtItems()-countSoldItems();
  const spotLightNumber = 3;
  let spotlightTv = collectBrandItems(spotLightNumber);
  let priceSpotlightTv = transformItems(spotLightNumber);
  let valutaSign = priceSpotlightTv.charAt(0);
  let priceTv = priceSpotlightTv.substring(1);
  let sizeTv = collectSizeItems(spotLightNumber);
  let formattedSizeTv = formatSizeItems(spotLightNumber);

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
          <h1>BestSelling TV</h1>
          <article className="spotlighttv">
              <p>{spotlightTv}</p>
              <p className="price"><span className="eurosign">{valutaSign}</span>{priceTv}</p>
              <p className="screenitems">{sizeTv}</p>
              <p className="formatteditem">{formattedSizeTv}</p>
          </article>

      </>

  )
}

export default App
