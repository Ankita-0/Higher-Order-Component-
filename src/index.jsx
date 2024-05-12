import ReactDOM from 'react-dom/client';

import ClickIncrease from './counters/ClickIncrease';
import HoverIncrease from './counters/HoverIncrease';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(<><ClickIncrease /><HoverIncrease/></>);
