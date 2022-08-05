import RouteConfig from '@config/route.config';
import { ApplicationProvider } from 'lens-ui';
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <ApplicationProvider>
      <Router>
        <RouteConfig />
      </Router>
    </ApplicationProvider>
  );
}

export default App;
