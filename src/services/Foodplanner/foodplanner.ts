import { url } from "inspector";
import { request } from "../_general";

export interface IMealsData {
    meal_id: number;
    meal_name: string;
    active: number;
    created: string;
    updated: string;
}

export interface IIngridientsData {
    ingridient_id: number;
    ingridient_name: string;
    ingridient_category_id: number;
    active: number;
    created: string;
    updated: string;
}

export interface IIngridientsCategoryData {
    ingridient_category_id: number;
    ingridient_category_name: string;
    active: number;
    created: string;
    updated:string;
}

export const getIngridients = async () => {
    return await request(
         '/foodplanner/ingridients',
         'GET'
    )
}