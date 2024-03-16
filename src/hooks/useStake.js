import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import { getStakingContract } from "../constants/contracts";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";

const useStake = (poolId, amount) => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return useCallback(async () => {
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    // if (!isAddress(address)) return console.error("Invalid address");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const contract = getStakingContract(signer);
    // const stakeTokenContract = getStakeTokenContract(signer);

    try {
      //   const approveTx = await stakeTokenContract.approve(signer, amount);
      //   console.log("transaction: ", approveTx);
      //   const receiptApprove = await approveTx.wait();

      //   console.log("receiptApprove: ", receiptApprove);

      //   if (receiptApprove.status) {
      //     return console.log("Approve successful!");
      //   }

      //   console.log("Approve failed!");

      const stakeTransaction = await contract.stake(poolId, amount);

      console.log("transaction: ", stakeTransaction);
      const receiptStake = await stakeTransaction.wait();

      console.log("receiptStake: ", receiptStake);

      if (receiptStake.status) {
        return console.log("Stake successful!");
      }

      console.log("Stake failed!");
    } catch (error) {
      console.error("error: ", error);
    }
  }, [chainId, poolId, amount, walletProvider]);
};

export default useStake;
