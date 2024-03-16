import { Container } from "@radix-ui/themes";
import { configureWeb3Modal } from "./connection";
import "@radix-ui/themes/styles.css";
import Header from "./component/Header";
import CreatePoolComponent from "./component/CreatePoolComponent";
import useGetPool from "./hooks/useGetPools";
import PoolCard from "./component/PoolCard";

configureWeb3Modal();

function App() {
  const pools = useGetPool();
  // console.log("pools", pools);

  // Restructure and name the data
  const structuredPools = pools.map((item, index) => ({
    id: index,
    totalStakers: item[0],
    totalStakedAmount: item[1],
    rewardReserve: item[2],
    rewardRate: item[3],
  }));

  console.log("structuredPools", structuredPools);

  return (
    <Container>
      <Header />
      <main className="mt-6">
        <CreatePoolComponent />
        {structuredPools.map((pool) => (
          <PoolCard
            key={pool.id}
            totalStakers={Number(pool.totalStakers)}
            totalStakedAmount={Number(pool.totalStakedAmount)}
            rewardReserve={Number(pool.rewardReserve)}
            rewardRate={Number(pool.rewardRate)}
          />
        ))}
      </main>
    </Container>
  );
}

export default App;

// there should be a way we can name arrays

// Combining all pools into one array

// destructure it and give them names
