import {bestSellingTv} from '../constants/inventory.js';
import {inventory} from "../constants/inventory.js";

export function countSoldItems() {
      let soldItems = bestSellingTv.sold;
      for (let i = 0; i < inventory.length; i++) {
      soldItems = soldItems + inventory[i].sold;
      }
      return (
      soldItems
      )
}

export function countBoughtItems() {
      let boughtItems = bestSellingTv.originalStock;
      for (let i = 0; i < inventory.length; i++) {
            boughtItems = boughtItems + inventory[i].originalStock;
      }
      return (
          boughtItems
      )
}


