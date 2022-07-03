import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import data from ".";
import { da } from "../../type";

import { GUILDGET } from "../actions/actionTypes";
import { ActionProps, CounterState } from "../types/state";

const id: String = `"랭크"    "플레이어"    "길드 역할"    "양"
"1"    "1day1coffeemilk"    "Officer"    "1133667556"
"2"    "MANBOCKDANG"    "멤버"    "759617345"
"3"    "IHIHHIHI"    "멤버"    "701004554"
"4"    "bionkr01"    "멤버"    "694391569"
"5"    "Pohang"    "focus"    "667770380"
"6"    "Midasno"    "멤버"    "655201796"
"7"    "lightlook"    "멤버"    "588116072"
"8"    "DKBruce"    "멤버"    "586232762"
"9"    "YamaYDona"    "focus"    "577956582"
"10"    "KingofSon"    "멤버"    "509594507"
"11"    "Barekin"    "멤버"    "499337141"
"12"    "birdog"    "Master of Coin"    "419052560"`;

function cheuse(id: String) {
  const re = id.split("\n");
  const ref = re.map((a: String) => {
    const ref = a.split("    ");
    return ref;
  });
  let arr: any = [];
  const refm = ref.map((a: any) => {
    a = a.filter((a: Object, index: any) => {
      if (index % 2 == 1) {
        return a;
      }
    });

    return a;
  });

  refm.map((a: String) => {
    let ob = {
      user: a[0].replace('"', "").replace('"', ""),
      count: a[1].replace('"', "").replace('"', ""),
    };
    arr.push(ob);
  });
  return arr;
}
export const initialState: CounterState = {
  guild: cheuse(id),
};

const Main = (state = initialState, action: ActionProps) => {
  console.log(action.type == GUILDGET);
  switch (action.type) {
    case GUILDGET:
      return { guild: action.payload };
    default:
      return { ...state };
  }
};

export default Main;
export type mainState = ReturnType<typeof Main>;
