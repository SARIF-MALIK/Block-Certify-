import { CryptoHookFactory } from "@_types/hooks";
import useSWR from "swr";
import { Nft } from "@_types/nft";

type UseListedNftsResponse = {}
type ListedNftsHookFactory = CryptoHookFactory<Nft[], UseListedNftsResponse>

export type UseListedNftsHook = ReturnType<ListedNftsHookFactory>

export const hookFactory: ListedNftsHookFactory = ({contr act}) => () => {
    const {data, ...swr} = useSWR(
        contract ? "web3/useListedNfts" : null,
        async () => {
            const nfts = [] as Nft[];

            try {
                const coreNfts = await contract!.getAllAadhaarNfts();
                console.log("coreNfts", coreNfts); 
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
            } catch (error) {
                console.log(error); 
            }
         
        }
    )
    return {
        ...swr,
        data: data || [],
    };
}