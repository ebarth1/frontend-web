import { getIngridients, IIngridientsData } from "@/services/Foodplanner/foodplanner";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function FoodPlannerAdminView() {
    const [viewComponentType, setViewComponentType] = useState<string>();

    //ToDo useReducer
    const [ingridients, setIngridients] = useState<IIngridientsData[]>([]);

    const loadIngridientComponent = async () => {
        let ingridientDataResponse = await getIngridients();

        setIngridients(ingridientDataResponse.data);
        setViewComponentType("ingridients");
    }

    return(
        <>
            <div className="d-flex flex-row">
                <Button 
                    className="m-1"
                    variant="outline-dark"
                >
                    Ingridients
                </Button>
                <Button
                    className="m-1"
                    variant="outline-dark"
                >
                    Ingridient-Category
                </Button>
                <Button
                    className="m-1"
                    variant="outline-dark"
                >
                    Meals
                </Button>
            </div>
            <hr />
        </>
    );
}