import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import { getStakingContract } from "../constants/contracts";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";

const useUnstake = (poolId) => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return useCallback(async () => {
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const contract = getStakingContract(signer);

    try {
      const tx = await contract.unstake(poolId);

      console.log("transaction: ", tx);
      const receipt = await tx.wait();

      console.log("receipt: ", receipt);

      if (receipt.status) {
        return console.log("Unstake successful!");
      }

      console.log("Unstake failed!");
    } catch (error) {
      console.error("error: ", error);
    }
  }, [chainId, poolId, walletProvider]);
};

export default useUnstake;
