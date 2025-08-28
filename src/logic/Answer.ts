import { IAnswer, ICountry } from "@/types/types";

export function countryToAnswer(country: ICountry): IAnswer {

   return {
    answer: country.name,
    ...country
   } 

}