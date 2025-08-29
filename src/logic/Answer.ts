import { IAnswer, ICountry, TypeOfQuestion } from "@/types/types";

export function countryToAnswer(country: ICountry, questionType: TypeOfQuestion): IAnswer {
   switch (questionType) {
      case "lang":
         return {
            name: country.name,
            lang: country.lang,
            flag: country.flag,
            answer: country.lang
         }

      case "name":
         // For "name" type questions, use the same flag for all answers to avoid giving away the answer
         return {
            name: country.name,
            lang: country.lang,
            flag: country.flag,
            answer: country.name,
            // Add a property to control flag visibility in the UI
            showFlag: false
         }

      case "flag":
         return {
            name: country.name,
            lang: country.lang,
            flag: country.flag,
            answer: country.flag
         }

      default:
         console.error("Invalid question type");
         return {
            name: '',
            lang: '',
            flag: country.flag,
            answer: ''
         };
   }

}