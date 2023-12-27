import { Header } from "./Header";
import { NavigationBar } from "./NavigationBar";
import { PromoBar } from "./PromoBar";
import { Topnav } from "./TopNav";

function Navbar() {
  return (
    <div>
      <Topnav />
      <NavigationBar />
      <PromoBar autoPlay interval={5000} />
      <Header />
    </div>
  );
}

export { Navbar };
