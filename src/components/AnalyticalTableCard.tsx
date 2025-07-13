import tableViewIcon from "@ui5/webcomponents-icons/dist/table-view.js";
import {
    Card,
    CardHeader,
    Icon,
    AnalyticalTable
} from "@ui5/webcomponents-react";
import {tableColumns, tableData} from "../data/data";


export default function AnalyticalTableCard() {
    return (
        <div>
            <Card
                header={
                    <CardHeader
                        titleText="Analytical Table"
                        subtitleText="Data Overview"
                        avatar={<Icon name={tableViewIcon} />}
                    />
                }
                style={{ width:"75vw", maxWidth: "1200px",margin: "var(--sapContent_Margin_Small)" }}
            >
            <AnalyticalTable data={tableData} columns={tableColumns} visibleRows={6}/>
            </Card>
        </div>
    );
}