import { Card, CardHeader, Text } from "@ui5/webcomponents-react";
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";

export const MyCard = () => {
    const handleCardHeaderClick = () => {
        console.log("Card header clicked");
    };
    return (
        <div>
            <Card header={<CardHeader titleText="Title of the card" 
                            interactive
                            onClick={handleCardHeaderClick}/>}
                  style={{ width: "300px", 
                           paddingLeft: "var(--sapContent_Space_S)", 
                           paddingRight: "var(--sapContent_Space_S)" }}>
                <Text style={{padding: "var(--sapContent_Space_S)"}}>
                    Content of the card
                </Text>
                 <LineChart measures={[]} dimensions={[]} />
            </Card>
        </div>
    )
}

export default MyCard;