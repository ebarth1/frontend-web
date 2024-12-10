import { getIngridients, IIngridientsData } from "@/services/Foodplanner/foodplanner";
import type { GetServerSideProps } from "next";

interface IProps {
    ingridients: IIngridientsData[]
}

export default function FoodPlanner(props: IProps) {
    console.log(props);
    return(
        <h1>Food-Planner</h1>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const ingridientsData = getIngridients();
    return {
        props: {
            ingridients: ingridientsData
        }
    }
}

