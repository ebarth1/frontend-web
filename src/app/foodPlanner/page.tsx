"use client";

import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import FoodPlannerAdminView from "../components/FoodPlanner/Admin/FoodPlannerAdminView";


export default function FoodPlanner() {
    const [viewPageType, setViewPageType] = useState<string>();

    return(
        <div>
            <div className="m-1">
                <Button
                    variant="outline-dark"
                    className="m-1"
                    onClick={() => setViewPageType("planner")}
                >
                    Planner
                </Button>
                <Button
                    variant="outline-dark"
                    className="m-1"
                    onClick={() => setViewPageType("admin")}
                >
                    Administration
                </Button>
                <Button
                    variant="outline-dark"
                    className="m-1"
                    onClick={(() => setViewPageType(undefined))}
                    hidden={!viewPageType}
                >
                    Back to Startpage
                </Button>
            </div>
            <hr />
            {viewPageType === "admin" &&
                <FoodPlannerAdminView/>
            }
        </div>
    );
}

