import { Box, Card, Flex, Text } from "@radix-ui/themes";
import StakeComponent from "./StakeComponent";
import UnstakeComponent from "./UnstakeComponent";

const PoolCard = ({
  totalStakers,
  totalStakedAmount,
  rewardReserve,
  rewardRate,
}) => {
  return (
    <Card size="2" style={{ width: 425 }}>
      <Flex gap="" align="center">
        <Box width={"100%"}>
          <Flex justify={"between"} align={"center"}>
            <div>
              <Text as="div">
                <span className="font-medium  ">Total Stakers:</span>
                {totalStakers}
              </Text>
              <Text as="div">
                <span className="font-medium  ">Total Staked Amount: </span>
                {totalStakedAmount}
              </Text>
              <Text as="div">
                <span className="font-medium  ">Reward Reserve:</span>
                {rewardReserve}
              </Text>
              <Text as="div">
                <span className="font-medium  ">
                  Reward Rate: {rewardRate}{" "}
                </span>
              </Text>
            </div>
          </Flex>
          <StakeComponent />
          <UnstakeComponent />
        </Box>
      </Flex>
    </Card>
  );
};

export default PoolCard;
