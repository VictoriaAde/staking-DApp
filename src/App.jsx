import { Container } from "@radix-ui/themes";
import { configureWeb3Modal } from "./connection";
import "@radix-ui/themes/styles.css";
import Header from "./component/Header";
import CreatePoolComponent from "./component/CreatePoolComponent";
import PoolCard from "./component/PoolCard";
import useGetAllPools from "./hooks/useGetAllPools";

configureWeb3Modal();

function App() {
  // const pools = useGetPool();
  const getAllPools = useGetAllPools();
  console.log(getAllPools);

  // console.log("pools", pools);

  // // Restructure and name the data
  // const structuredPools = getAllPools.map((item, index) => ({
  //   id: index,
  //   totalStakers: item[0],
  //   totalStakedAmount: item[1],
  //   rewardReserve: item[2],
  //   rewardRate: item[3],
  // }));

  // console.log("structuredPools", structuredPools);

  return (
    <Container>
      <Header />
      <main className="mt-6">
        <div className="mb-2">
          <CreatePoolComponent />
        </div>

        <div className="flex gap-7 flex-wrap">
          {getAllPools.map((pool, poolIndex) => (
            <div key={poolIndex}>
              {pool.map((item, itemIndex) => (
                <PoolCard
                  key={itemIndex}
                  index={poolIndex}
                  totalStakers={Number(item[0])}
                  totalStakedAmount={Number(item[1])}
                  rewardReserve={Number(item[2])}
                  rewardRate={Number(item[3])}
                />
              ))}
            </div>
          ))}
        </div>
      </main>
    </Container>
  );
}

export default App;

// there should be a way we can name arrays

// Combining all pools into one array

// destructure it and give them names
