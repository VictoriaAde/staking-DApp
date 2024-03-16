import { Button, Flex } from "@radix-ui/themes";
import useRewardApprove from "../hooks/useRewardApprove";
import useStakeApprove from "../hooks/useStakeApprove";

export default function Header() {
  const handleRewardApproval = useRewardApprove();
  const handleStakeApproval = useStakeApprove();

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="text-white">STAKING POOL</div>
        <Flex gap={"4"} align={"center"}>
          <w3m-button />
        </Flex>
      </div>
      <div className="flex gap-2">
        <Button onClick={handleRewardApproval}>Approve Reward Token</Button>
        <Button onClick={handleStakeApproval}>Approve Stake Token</Button>
      </div>
    </>
  );
}
