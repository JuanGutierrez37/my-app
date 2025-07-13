import {
   Avatar,
   Card,
   CardHeader,
   Text,
   ShellBar,
   ShellBarItem,
   List,
   ListItemStandard,
   ListItemCustom,
   ProgressIndicator,
   FlexBox,
   FlexBoxJustifyContent,
   FlexBoxWrap,
   FlexBoxDirection,
   AnalyticalTable,
   Icon,
} from "@ui5/webcomponents-react";
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";
import {dataset} from "../data/data";
import { useState } from "react";
import lineChartIcon from '@ui5/webcomponents-icons/dist/line-chart.js';
import barChartIcon from '@ui5/webcomponents-icons/dist/horizontal-bar-chart.js';

export const MyCard = () => {
    const [toggleCharts, setToggleCharts] = useState("lineChart");
    const [loading, setLoading] = useState(false);

    const contentTitle = toggleCharts === 'lineChart' ? 'Line Chart' : 'Bar Chart';
    const switchToChart = toggleCharts === 'lineChart' ? 'Bar Chart' : 'Line Chart';


    const handleHeaderClick = () => {
        if (toggleCharts === "lineChart") {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setToggleCharts("barChart");
        }, 2000);
        } else {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setToggleCharts("lineChart");
        }, 2000);
        }
    };
    return (
        <div>
            <Card header={<CardHeader titleText="Prices" 
                            interactive
                            subtitleText={`Click here to switch to ${switchToChart}`}
                            avatar={<Icon name={
                                            toggleCharts === "lineChart" ? lineChartIcon : barChartIcon 
                                        }
                                        accessibleName={contentTitle}
                                    />}
                            
                            onClick={handleHeaderClick}/>}
                  style={{ width: "300px", margin: "var(--sapContent_Margin_Small)", height: "400px"}}>
                <Text style={{padding: "var(--sapContent_Space_S)"}}>
                    Content of the card
                </Text>
                {toggleCharts === "lineChart" ? (
                    <LineChart
                        dimensions={[{ accessor: "month" }]}
                        measures={[{ accessor: "data", label: "Price" }]}
                        dataset={dataset}
                        loading={loading}
                    />
                ) : (
                    <BarChart
                        dimensions={[{ accessor: "month" }]}
                        measures={[{ accessor: "data", label: "Price" }]}
                        dataset={dataset}
                        loading={loading}
                    />
                )}
            </Card>
        </div>
    )
}

export default MyCard;