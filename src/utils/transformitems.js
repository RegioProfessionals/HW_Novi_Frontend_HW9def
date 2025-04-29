import {bestSellingTv} from '../constants/inventory.js';
import {inventory} from "../constants/inventory.js";
import {collectBrandItems, collectSizeItems} from "./collectitems.js";

const a = bestSellingTv;
const b = inventory;
export function transformItems(spotLightTV) {

    // in my version of WebSorm in the ReadMe file the euro-sign is red.
    // so I thought that I had to exactly duplicate what I see ..
    // later someone told me that in the original ReadMe file in the repository all
    //text is black .. so I did something extra which was not necessary .. anyway ..
    //here is the code for it in combination with app.jsx, I added a screenshot in utils(RoodEuroTeken)
    const valutaSign = "€"
    let nextArrayPriceItem = valutaSign + a.price;
    let nextPriceArray = [];
    nextPriceArray.push(nextArrayPriceItem);

    for (let i = 0; i < b.length; i++) {
        nextArrayPriceItem = valutaSign + b[i].price;
        nextPriceArray.push(nextArrayPriceItem);
    }
    return (
        nextPriceArray[spotLightTV]
    )
}
