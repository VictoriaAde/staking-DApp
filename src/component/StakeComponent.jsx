import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import useStake from "../hooks/useStake";

const StakeComponent = () => {
  const [poolId, setPoolId] = useState(0);
  const [amount, setAmount] = useState(0);

  const handleStake = useStake(poolId, amount);

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button className="bg-blue-600">Stake a Token</Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Stake</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Stake
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Enter ID
            </Text>
            <TextField.Input
              value={poolId}
              onChange={(e) => setPoolId(e.target.value)}
              placeholder="Enter Pool ID"
            />
            <Text as="div" size="2" mb="1" weight="bold">
              Enter Amount
            </Text>
            <TextField.Input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter Amount"
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Button className="bg-blue-600" onClick={handleStake}>
            Stake
          </Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default StakeComponent;
