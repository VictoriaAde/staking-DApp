import { Container } from "@radix-ui/themes";
import { configureWeb3Modal } from "./connection";
import "@radix-ui/themes/styles.css";
import Header from "./component/Header";
import CreatePoolComponent from "./component/CreatePoolComponent";

configureWeb3Modal();

function App() {
  return (
    <Container>
      <Header />
      <main className="mt-6">
        <CreatePoolComponent />
      </main>
    </Container>
  );
}

export default App;
