import { baseUrl } from "../app/shared/baseUrl";

export const mapImageURL =(arr) => {
  return arr.map((itme) => {
    return{ 
      ...itme,
      image:baseUrl + itme.image
    };
  });
};