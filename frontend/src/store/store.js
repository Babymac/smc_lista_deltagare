// import { persistStore } from 'redux-persist'
// persistStore(store);
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import RootReducer from '../reducers/root-reducer';

const client = axios.create({
	baseUrl: 'http://192.168.1.198:8080',
	responseType: 'json'
});

const configureStore = () =>
	createStore(
		RootReducer,
		window.__REDUX_DEVTOOLS_EXTENSION__ &&  window.__REDUX_DEVTOOLS_EXTENSION__(),
		applyMiddleware(axiosMiddleware(client))
	);

const store = configureStore();

export default store;
