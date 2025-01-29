import './App.css';
import {countSoldItems} from "./utils/countitems.js";
import {countBoughtItems} from "./utils/countitems.js";
import {collectBrandItems} from "./utils/collectitems.js";
import {transformItems} from "./utils/transformitems.js";
import {formatSizeItems} from "./utils/collectitems.js";
import {bestSellingTv} from "./constants/inventory.js";



function App() {

    let numberOfBoughtTVs = countBoughtItems();
    let numberOfSoldTVs = countSoldItems();
    let stillToSell = countBoughtItems() - countSoldItems();
    const spotLightNumber = 0;
    let spotlightTv = collectBrandItems(spotLightNumber);
    let priceSpotlightTv = transformItems(spotLightNumber);
    let valutaSign = priceSpotlightTv.charAt(0);
    let priceTv = priceSpotlightTv.substring(1);
    let formattedSizeTv = formatSizeItems(spotLightNumber);
    const sourceImage=bestSellingTv.sourceImg;

    return (
        <>
            <div className="soldProducts">
                <h1>Aantal verkochte producten</h1>
                <article className="sold">
                    <p>{numberOfSoldTVs}</p>
                </article>
            </div>
            <div className="boughtProducts">
            <h1>Aantal ingekochte producten</h1>
            <article className="bought">
                <p>{numberOfBoughtTVs}</p>
            </article>
            </div>
            <div className="stockProducts">
            <h1>Voorraad</h1>
            <article className="stock">
                <p>{stillToSell}</p>
            </article>
            </div>
            <div className="bestSellingTv">
            <article className="spotlighttv">
                <img src={sourceImage} alt="Image Best-selling TV" />
                <div className="innerTextBlock">
                <p>{spotlightTv}</p>
                <p className="price"><span className="eurosign">{valutaSign}</span>{priceTv}</p>
                <p className="formatteditem">{formattedSizeTv}</p>
                </div>
            </article>
            </div>

        </>

    )
}

export default App
