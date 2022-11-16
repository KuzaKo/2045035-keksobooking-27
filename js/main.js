import { getObjects, createObject} from './data.js';
import { createCardElement } from './card.js';

import './form.js';

getObjects();

const richCardData = createObject(1);

createCardElement(richCardData);
