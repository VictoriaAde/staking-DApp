import { SUPPORTED_CHAIN } from "../connection";
import {
  getRewardTokenContract,
  getStakeTokenContract,
  getStakingContract,
} from "../constants/contracts";
import { getProvider } from "../constants/providers";

export const isSupportedChain = (chainId) =>
  Number(chainId) === SUPPORTED_CHAIN;

export const getReadWriteStakingContract = async (provider) => {
  const readWriteProvider = getProvider(provider);

  const signer = await readWriteProvider.getSigner();

  return getStakingContract(signer);
};

export const getReadWriteRewardTokenContract = async (provider) => {
  const readWriteProvider = getProvider(provider);

  const signer = await readWriteProvider.getSigner();

  return getRewardTokenContract(signer);
};

export const getReadWriteStakeTokenContract = async (provider) => {
  const readWriteProvider = getProvider(provider);

  const signer = await readWriteProvider.getSigner();

  return getStakeTokenContract(signer);
};
