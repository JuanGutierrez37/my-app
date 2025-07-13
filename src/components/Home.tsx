import { FlexBox, FlexBoxJustifyContent,FlexBoxWrap } from "@ui5/webcomponents-react";
import AnalyticalTableCard from "./AnalyticalTableCard";
import ListCard from "./ListCard";
import MyCard from "./MyCard";

export function Home() {
    return (
        <div>

            <FlexBox
                justifyContent={FlexBoxJustifyContent.Center}
                wrap={FlexBoxWrap.Wrap}
                style={{ padding: "var(--sapContent_Space_M)" }}>
                <MyCard />
                <ListCard />
                <AnalyticalTableCard />
            </FlexBox>
        </div>
    );
}