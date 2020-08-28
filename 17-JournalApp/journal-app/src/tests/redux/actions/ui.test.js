import '@testing-library/jest-dom';
import { setError, removeError, uiFinishLoading, uiStartLoading } from '../../../redux/actions/ui';
import { types } from '../../../redux/types/types';

describe('Pruebas en ui-actions', () => {

    test('Todas las acciones deben de funcionar' , () => {
        
        const action = setError('Help!!!');

        expect(action).toEqual({
            type: types.uiSetError,
            payload: 'Help!!!'
        });

        const removeErrorAction = removeError();
        const uiStartLoadingAction = uiStartLoading();
        const uiFinishLoadingAction = uiFinishLoading();

        expect(removeErrorAction).toEqual({
            type: types.uiRemoveError,
        });

        expect(uiStartLoadingAction).toEqual({
            type: types.uiStartLoading,
        });

        expect(uiFinishLoadingAction).toEqual({
            type: types.uiFinishLoading,
        });


    });
    
});