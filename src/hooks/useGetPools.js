import { useEffect, useState } from "react";
import { getStakingContract } from "../constants/contracts";
import { readOnlyProvider } from "../constants/providers";
// import { decodeBytes32String } from "ethers";

const useGetPools = () => {
  const [pool, setPool] = useState([]);

  useEffect(() => {
    const contract = getStakingContract(readOnlyProvider);
    contract
      .getPoolByID(0)
      .then((res) => {
        setPool((prev) => [...prev]);
        console.log(res);
      })
      .catch((err) => {
        console.error("error fetching pools: ", err);
        // setProposal((prev) => ({ ...prev, loading: false }));
      });
  }, []);

  return pool;
};

export default useGetPools;

//
