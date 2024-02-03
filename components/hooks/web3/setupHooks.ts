import { Web3Dependencies } from "@_types/hooks";
import { hookFactory as createAccountHook, UseAccountHook } from "./useAccount";
import { hookFactory as createNetworkHook, UseNetworkHook } from "./useNetwork";
import { hookFactory as createListedNftsHook, UseListedNftsHook } from "./useListedNfts";
import { hookFactory as createCreatedNftsHook, UseCreatedNftsHook } from "./useCreatedNfts";

export type Web3Hooks = {
    useAccount: UseAccountHook;
    useNetwork: UseNetworkHook;
    useListedNfts: UseListedNftsHook;
    useCreatedNfts: UseCreatedNftsHook;
}

export type SetupHooks = {
    (d: Web3Dependencies): Web3Hooks
}

export const setupHooks: SetupHooks = (deps) => {
    return {
        useAccount: createAccountHook(deps),
        useNetwork: createNetworkHook(deps),
        useListedNfts: createListedNftsHook(deps),
        useCreatedNfts: createCreatedNftsHook(deps),
    }
}
