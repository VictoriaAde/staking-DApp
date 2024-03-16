import { useEffect, useState } from "react";
import { readOnlyProvider } from "../constants/providers";
import { ethers } from "ethers";
import stakingPoolAbi from "../constants/ABIstakingPool.json";
import multicallAbi from "../constants/multicall.json";
import { getStakingContract } from "../constants/contracts";

const useGetAllPools = () => {
  const [data, setData] = useState([]);
  const [numOfPool, setNumOfPool] = useState(0);
  // const hasFetched = useRef(false);

  useEffect(() => {
    (async () => {
      const contract = getStakingContract(readOnlyProvider);
      contract
        .id()
        .then((res) => setNumOfPool(Number(res)))
        .catch((err) => console.log(err));

      const poolIDs = [...Array.from({ length: numOfPool + 1 })].map(
        (_, index) => index
      );

      const itf = new ethers.Interface(stakingPoolAbi);
      const calls = poolIDs.map((id) => ({
        target: import.meta.env.VITE_staking_contract_address,
        callData: itf.encodeFunctionData("getPoolByID", [id]),
      }));

      const multicall = new ethers.Contract(
        import.meta.env.VITE_multicall2Address,
        multicallAbi,
        readOnlyProvider
      );

      const callResults = await multicall.tryAggregate.staticCall(false, calls);
      const validResponsesIndex = [];
      const validResponses = callResults.filter((x, i) => {
        if (x[0] === true) {
          validResponsesIndex.push(i);
          return true;
        }
        return false;
      });

      const decodedResponses = validResponses.map((x) =>
        itf.decodeFunctionResult("getPoolByID", x[1])
      );

      //   console.log(decodedResponses);

      setData(decodedResponses);
    })();
  }, [numOfPool]);

  return data;
};

export default useGetAllPools;
