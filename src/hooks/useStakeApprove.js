import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { ethers } from "ethers";
import { getProvider } from "../constants/providers";
import {
  getStakingContract,
  getStakeTokenContract,
} from "../constants/contracts";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";

const useStakeApprove = () => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return useCallback(async () => {
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const contract = getStakingContract(signer);

    const stakeTokenContract = getStakeTokenContract(signer);
    const approveAmount = ethers.parseUnits("1", 18);

    console.log(approveAmount);

    try {
      const approveTx = await stakeTokenContract.approve(
        contract.target,
        approveAmount
      );
      console.log("Approve transaction: ", approveTx);
      const receipt = await approveTx.wait();

      console.log("receipt: ", receipt);

      if (receipt.status) {
        return console.log("Approval successful!");
      }
    } catch (error) {
      //   let errorText;
      console.error("ERROR:", error);
    }
  }, [chainId, walletProvider]);
};

export default useStakeApprove;
