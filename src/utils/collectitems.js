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
// de items kon aanpassen
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
    console.log(nextArray[sizeTv]);
    return nextArray[sizeTv];
}


