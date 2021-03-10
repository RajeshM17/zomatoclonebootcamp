import GoldPage from "../GoldPage";
import OutPage from "../OutPage";
import SearchPage from "../SearchPage";
import OrderPage from "../OrderPage";
import ProfilePage from "../ProfilePage";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SimpleBottomNavigation from "../components/BottomNav";
function BaseLayout() {
  return (
    <div className="BaseLayout">
      <Switch>
        <Route path="/Order">
          <OrderPage />
        </Route>
        <Route path="/Out">
          <OutPage />
        </Route>
        <Route path="/Gold">
          <GoldPage />
        </Route>
        <Route path="/Search">
          <SearchPage />
        </Route>
        <Route path="/Profile">
          <ProfilePage />
        </Route>
      </Switch>
      <SimpleBottomNavigation/>
    </div>
  );
}

export default BaseLayout;
