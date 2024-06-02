import Boost from "./components/Boost";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LinkInput from "./components/LinkInput";
import Statistics from "./components/Statistics";

const App = () => {
  return (
    <>
      <main className="bg-[#f7f7fa] overflow-x-hidden">
        <div className="">
          <div>
            <Header />
            <Hero />
          </div>
          <div className="bg-gray-100 relative">
            <div className="">
              <LinkInput />
              <Statistics />
              <Cards />
              <div className="">
                <Boost />
              </div>
              <div className="w-screen">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
