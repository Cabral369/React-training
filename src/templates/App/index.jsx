import { Base } from '../Base';
import { MockBase } from '../Base/Base.stories';
import * as styles from './styles';

function App() {
  return <Base {...MockBase} />;
}

export default App;
