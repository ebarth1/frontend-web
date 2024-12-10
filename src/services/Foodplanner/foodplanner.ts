import { ImageLoaderPropsWithConfig } from "next/dist/shared/lib/image-config";
import { IGlobalResponse, request } from "../_general";

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

export interface IIngridientsResponse extends IGlobalResponse {
    data: IIngridientsData[];
}

export interface IIngridientsCategoryResponse extends IGlobalResponse {
    data: IIngridientsCategoryData[];
}

export interface IMealsResponse extends IGlobalResponse {
    data: IMealsData[];
}


export const getIngridients = async () => {
    return await request(
         '/foodplanner/ingridients',
         'GET'
    ) as IIngridientsResponse;
}

export const getIngridientCategories = async () => {
    return await request(
        '/foodplanner/ingridient-categories',
        'GET'
    ) as IIngridientsCategoryResponse;
}

export const getMeals = async () => {
    return await request(
        '/foodplanner/meals',
        'GET'
    ) as IMealsResponse;
}