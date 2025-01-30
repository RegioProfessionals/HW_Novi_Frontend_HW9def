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
    const sourceImage = bestSellingTv.sourceImg;

    return (
        <>
            <div className="outer-containerSales">
                <div className="soldProducts-container">
                    <h1>Aantal verkochte producten</h1>
                    <article className="sold">
                        <h1>{numberOfSoldTVs}</h1>
                    </article>
                </div>
                <div className="boughtProducts-container">
                    <h1>Aantal ingekochte producten</h1>
                    <article className="bought">
                        <h1>{numberOfBoughtTVs}</h1>
                    </article>
                </div>
                <div className="stockProducts-container">
                    <h1>Aantal te verkopen producten</h1>
                    <article className="stock">
                        <h1>{stillToSell}</h1>
                    </article>
                </div>
            </div>
            <div className="bestSellingTv">
                <article className="spotlighttv">
                    <img src={sourceImage} alt="Image Best-selling TV"/>
                    <div className="innerTextBlock">
                        <h1>{spotlightTv}</h1>
                        <h1 className="price"><span className="eurosign">{valutaSign}</span>{priceTv},-</h1>
                        <p className="formatteditem">{formattedSizeTv}</p>
                        <div className="iconListSpecs">
                            <div className="checkHeightIcon">
                                <img src="../src/assets/check.png" height="18px" width="18px" alt="icon+"/>
                            </div>
                            <div className="checkHeightText">
                                <p>wifi</p>
                            </div>
                            <img src="../src/assets/minus.png" height="18px" width="18px" alt="icon-"/>
                            <p>speech</p>
                            <img src="../src/assets/check.png" height="18px" width="18px" alt="icon+"/>
                            <p>hdr</p>
                            <img src="../src/assets/check.png" height="18px" width="18px" alt="icon+"/>
                            <p>bluetooth</p>
                            <img src="../src/assets/minus.png" height="18px" width="18px" alt="icon-"/>
                            <p>ambilight</p>
                        </div>
                    </div>
                </article>
            </div>

        </>

    )
}

export default App
