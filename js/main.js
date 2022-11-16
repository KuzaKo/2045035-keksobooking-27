import { getObjects, createObject} from './data.js';
import { createCardElement } from './card.js';

import './form.js';
import './form2.js';

getObjects();

const richCardData = createObject(1);

createCardElement(richCardData);
