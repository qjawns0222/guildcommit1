import { GUILDGET } from "./actionTypes";

export const guildget = (payload: any) => {
  console.log("action");
  console.log(payload);
  return {
    type: GUILDGET,
    payload: payload,
  };
};
