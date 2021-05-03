import { createStore } from 'redux';
import cakeReducer from './cakeshop/cakeReducer';


 
const store = createStore(cakeReducer);

 
export default store;