import { LinkedList } from './collections/LinkedList';
import { CharactersCollection } from './collections/CharactersCollection';
import { NumbersCollection } from './collections/NumbersCollection';

const numberCollection = new NumbersCollection([1, 20, -7, -89, 40]);
numberCollection.sort();
console.log(numberCollection.data);

const charactersCollection = new CharactersCollection('MurchelonTheCat');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(777);
linkedList.add(-9);
linkedList.add(-748);
linkedList.add(0);
linkedList.add(143);
linkedList.sort();
linkedList.print();
