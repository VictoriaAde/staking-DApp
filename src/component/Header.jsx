import { Flex } from "@radix-ui/themes";

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="text-white">STAKING POOL</div>
      <Flex gap={"4"} align={"center"}>
        <w3m-button />
      </Flex>
    </div>
  );
}
