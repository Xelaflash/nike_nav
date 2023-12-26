import { NavigationBar } from "./NavigationBar";
import { PromoBar } from "./PromoBar";
import { Topnav } from "./TopNav";

function Navbar() {
  return (
    <div>
      <Topnav />
      <NavigationBar />
      <PromoBar />
    </div>
  );
}

export { Navbar };
