import { useEffect, useState } from "react";
import { getStakingContract } from "../constants/contracts";
import { readOnlyProvider } from "../constants/providers";
import { decodeBytes32String, ethers } from "ethers";

const usePool = () => {
  const [pool, setPool] = useState({
    loading: true,
    data: [],
  });

  useEffect(() => {
    const abicoder = ethers.AbiCoder.defaultAbiCoder();

    const handleCreatePool = (log) => {
      console.log("vote: ", log);
      const encodedProposalIndex = log.topics[2];
      const encodedVoteWeight = log.data;

      const decodedProposalIndex = abicoder.decode(
        ["uint256"],
        encodedProposalIndex
      );

      const decodedVoteWeight = abicoder.decode(["uint256"], encodedVoteWeight);

      console.log("got hrer");

      const index = Number(decodedProposalIndex[0]);
      const voteWeight = Number(decodedVoteWeight[0]);

      console.log(index, voteWeight);

      setPool((prev) => ({
        ...prev,
        data: prev.data.map((item, id) =>
          index === id
            ? { ...item, voteCount: item.voteCount + voteWeight }
            : item
        ),
      }));

      console.log("worked!");
    };

    const contract = getStakingContract(readOnlyProvider);
    contract
      .getAllProposals()
      .then((res) => {
        const converted = res.map((item) => ({
          name: decodeBytes32String(item.name),
          voteCount: Number(item.voteCount),
        }));
        ({
          loading: false,
          data: converted,
        });
      })
      .catch((err) => {
        console.error("error fetching proposals: ", err);
        setPool((prev) => ({ ...prev, loading: false }));
      });

    const filter = {
      address: import.meta.env.VITE_staking_contract_address,
      topics: [
        "0x1e9508a4adba2a00cbe57907315ae75b7766a40f03929616c91866787591f8ca",
      ],
    };

    const wssProvider = new ethers.WebSocketProvider(
      import.meta.env.VITE_wss_rpc_url
    );

    wssProvider.on(filter, handleCreatePool);

    return () => wssProvider.off(filter, handleCreatePool);
  }, []);

  return pool;
};

export default usePool;
