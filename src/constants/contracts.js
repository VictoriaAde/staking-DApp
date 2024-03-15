import { ethers } from "ethers";
import stakingABI from "./ABIstakingPool.json";
import erc20ABI from "./ABIerc20.json";

export const getStakingContract = (providerOrSigner) =>
  new ethers.Contract(
    import.meta.env.VITE_staking_contract_address,
    stakingABI,
    providerOrSigner
  );

export const getStakeTokenContract = (providerOrSigner) =>
  new ethers.Contract(
    import.meta.env.VITE_stakeToken_contract_address,
    erc20ABI,
    providerOrSigner
  );

export const getRewardTokenContract = (providerOrSigner) =>
  new ethers.Contract(
    import.meta.env.VITE_rewardToken_contract_address,
    erc20ABI,
    providerOrSigner
  );
