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
        // Convert the Proxy object to a regular array
        const myTarget = Array.from(
          { length: res.length },
          (_, index) => res[index]
        );
        setPool((prev) => [...prev, myTarget]);
      })
      .catch((err) => {
        console.error("error fetching pools: ", err);
      });
  }, []);

  return pool;
};

export default useGetPools;

//
