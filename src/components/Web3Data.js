import { Skeleton } from "@mui/material";
import { largeNumberFormatter } from "../utils/utils";
import mainStore from "../stores/main.store";
import { observer } from "mobx-react";

const Web3Data = observer(props => {
    const web3Data = mainStore.web3Data;
    if (!web3Data) {
        return <Skeleton variant="rectangular" height={'5vh'} width={'12vw'} />
    }
    {
        const selectedBase = mainStore.selectedAsset.name;
        if (web3Data[selectedBase]) {
            return (
                <div>
                    Avg 30 days uniV3 liquidity vs USDC
                    <br />
                    {selectedBase}: {largeNumberFormatter(web3Data[selectedBase]['value'])} (${largeNumberFormatter(web3Data[selectedBase]['value']*mainStore.basePrice)})
                </div>
            )
        }
    }
})

export default Web3Data