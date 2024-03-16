import { Box, Card, Flex, Text } from "@radix-ui/themes";

const PoolCard = ({ id, name, PoolCount, handleCreatePool }) => {
  return (
    <Card size="2" style={{ width: 425 }}>
      <Flex gap="" align="center">
        <Box width={"100%"}>
          <Flex justify={"between"} align={"center"}>
            <Text as="div" weight="bold">
              {name}
            </Text>
            <button
              className="text-white bg-blue-600 py-1 px-4 rounded-md"
              onClick={() => handleCreatePool(id)}
            >
              Pool
            </button>
          </Flex>
          <Text as="div" color="gray">
            Number of Pool: {PoolCount}
          </Text>
        </Box>
      </Flex>
    </Card>
  );
};

export default PoolCard;
