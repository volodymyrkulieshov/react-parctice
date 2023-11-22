import Profile from "./components/Profile";
import Panel from "./components/Panel";

const App = () => (
  <div>
    <Panel title="User profile">
      <Profile name="Mango" email="mango@mail.com" />
    </Panel>
  </div>
);

export default App;
