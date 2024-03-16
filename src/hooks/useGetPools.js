import { useEffect, useState, useRef } from "react";
import { getStakingContract } from "../constants/contracts";
import { readOnlyProvider } from "../constants/providers";

const useGetPools = () => {
  const [pool, setPool] = useState([]);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const contract = getStakingContract(readOnlyProvider);
    contract
      .getPoolByID(0)
      .then((res) => {
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
