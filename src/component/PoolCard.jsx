import { Box, Card, Flex, Text } from "@radix-ui/themes";

const PoolCard = ({
  totalStakers,
  totalStakedAmount,
  rewardReserve,
  rewardRate,
  handleStake,
}) => {
  return (
    <Card size="2" style={{ width: 425 }}>
      <Flex gap="" align="center">
        <Box width={"100%"}>
          <Flex justify={"between"} align={"center"}>
            <div>
              <Text as="div" weight="bold">
                totalStakers {totalStakers}
              </Text>
              <Text as="div" weight="bold">
                totalStakedAmount {totalStakedAmount}
              </Text>
              <Text as="div" weight="bold">
                rewardReserve {rewardReserve}
              </Text>
              <Text as="div" weight="bold">
                rewardRate {rewardRate}
              </Text>
            </div>
            <button
              className="text-white bg-blue-600 py-1 px-4 rounded-md"
              onClick={() => handleStake(totalStakers)}
            >
              Stake
            </button>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};

export default PoolCard;
