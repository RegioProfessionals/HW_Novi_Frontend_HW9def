import {bestSellingTv} from '../constants/inventory.js';
import {inventory} from "../constants/inventory.js";

const a = bestSellingTv;
const b = inventory;
export function collectBrandItems(spotlightTv) {
    let nextArrayItem = a.brand + " " + a.type + " - " + a.name;
    let nextArray = [];
    nextArray.push(nextArrayItem);
    for (let i = 0; i < b.length; i++) {
        nextArrayItem = b[i].brand + " " + b[i].type + " - " + b[i].name;
        nextArray.push(nextArrayItem);
    }
    return nextArray[spotlightTv]
}
// Om 2c te kunnen volbrengen eerst deze functie gemaakt. Vervolgens
// van alles geprobeerd met if, else en for loops .. te omslachtig.
//Toen kwam ik via via op een andere functie waar ik deze functie wel bij kon gebruiken
export function collectSizeItems(sizeTv) {
    let nextArrayItem = a.availableSizes;
    let nextArray = [];
    nextArray.push(nextArrayItem);
    for (let i = 0; i < b.length; i++) {
        nextArrayItem = b[i].availableSizes;
        nextArray.push(nextArrayItem);
    }
    return nextArray[sizeTv]
}

// Hier ben ik erg lang mee bezig geweest .. gezocht naar een functie die binnen een arrayitem
// de items kon aanpassen, eerst met if else functies geprobeerd maar dat lukte niet zonder een gigantische hoeveelheid code
export function formatSizeItems(sizeTv) {
    let nextArrayItem = a.availableSizes.map(size => {
        const sizeInCm = Math.round(size * 2.54);
        return `${size} inch (${sizeInCm} cm)`;
    }).join(" | ");
    let nextArray = [];
    nextArray.push(nextArrayItem);
    for (let i = 0; i < b.length; i++) {
        nextArrayItem = b[i].availableSizes.map(size => {
            const sizeInCm = Math.round(size * 2.54);
            return `${size} inch (${sizeInCm} cm)`;
        }).join(" | ");
        nextArray.push(nextArrayItem);
    }
    return nextArray[sizeTv];
}

// deel 2 opdracht 2a
let brandArray = [];
export function collectBrands() {
    brandArray = inventory.map((merk) => {

        return (`${merk.brand}`);
    }).join("   |   ");
    return brandArray;
}




