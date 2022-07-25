import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import store from '../store/index';

type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
