import {
    Card,
    CardHeader,
    Icon,
    List,
    ListItemCustom,
    ListItemStandard,
    ProgressIndicator,
    Text,
    FlexBox,
    FlexBoxDirection,
    FlexBoxJustifyContent
} from "@ui5/webcomponents-react";
import listIcon from "@ui5/webcomponents-icons/dist/list.js";
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { useNavigate } from "react-router-dom";


export default function ListCard() {
    const navigate = useNavigate();
    const handleProgressHeaderClick = () => {
        navigate("/detail");
    };

    return (
        <div style={{
            paddingLeft: "var(--sapContent_Space_S)",
            paddingRight: "var(--sapContent_Space_S)"
        }}>
            <Card
                header={
                    <CardHeader
                        titleText="Progress"
                        subtitleText="List"
                        interactive
                        avatar={<Icon name={listIcon} />}
                        onClick={handleProgressHeaderClick}
                    />
                }
                style={{ width: "300px", margin: "var(--sapContent_Margin_Small)", height: "400px" }}
            >

                <List>
                    <ListItemStandard
                        additionalText="finished"
                        additionalTextState={ValueState.Positive}
                    >
                        Activity 1
                    </ListItemStandard>
                    <ListItemStandard
                        additionalText="failed"
                        additionalTextState={ValueState.Negative}
                    >
                        Activity 2
                    </ListItemStandard>
                    <ListItemCustom>
                        <FlexBox
                            direction={FlexBoxDirection.Column}
                            fitContainer
                            style={{ paddingBlock: "var(--sapContent_Space_S)" }}
                        >
                            <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
                                <Text style={{ fontSize: "var(--sapFontLargeSize)" }}>
                                    Activity 3
                                </Text>
                                <Text style={{ color: "var(--sapCriticalTextColor)" }}>
                                    in progress
                                </Text>
                            </FlexBox>
                            <ProgressIndicator
                                value={69}
                                valueState={ValueState.Positive}
                                style={{ marginBlockStart: "0.5rem" }}
                            />
                        </FlexBox>
                    </ListItemCustom>

                </List>
            </Card>

        </div>
    )
}