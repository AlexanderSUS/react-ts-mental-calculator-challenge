import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';

const useTyepedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTyepedSelector;
