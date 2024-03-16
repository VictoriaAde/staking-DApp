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
  console.log(pools);

  return (
    <Container>
      <Header />
      <main className="mt-6">
        <CreatePoolComponent />
        {pools.map((item, index) => (
          <PoolCard
            key={index}
            name={item[0]}
            id={index}
            PoolCount={Number(item.PoolCount)}
          />
        ))}
      </main>
    </Container>
  );
}

export default App;
