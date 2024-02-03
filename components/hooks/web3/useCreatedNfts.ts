import { CryptoHookFactory } from "@_types/hooks";
import { Nft } from "@_types/nft";
import { ethers } from "ethers";
import useSWR from "swr";

type UseCreatedNftsResponse = {}
type CreatedNftsHookFactory = CryptoHookFactory<Nft[], UseCreatedNftsResponse>

export type UseCreatedNftsHook = ReturnType<CreatedNftsHookFactory>

export const hookFactory: CreatedNftsHookFactory = ({contract}) => () => {
    const {data, ...swr} = useSWR(
        contract ? "web3/useOwnedNfts" : null,
        async () => {
            const nfts = [] as Nft[];
            console.log("contract", contract);
            const coreNfts = await contract!.getAllAadhaarNfts();
    
            for (let i = 0; i < coreNfts.length; i++) {
                const item = coreNfts[i];
                const tokenURI = await contract!.tokenURI(item.tokenId);
                const metaRes = await fetch(tokenURI);
                const meta = await metaRes.json();

                nfts.push({
                    receiver:item.Address,
                    tokenId: item.tokenId.toNumber(),
                    creator:item.Address,
                    meta
                })
            }

            return nfts;
        }
    )
    return {
        ...swr,
        data: data || [],
    };
}