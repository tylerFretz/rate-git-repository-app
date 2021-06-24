import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { useContext } from 'react';
import { useHistory } from 'react-router-native';

import { AUTHORIZE } from '../graphql/mutations';
import AuthStorageContext from '../contexts/AuthStorageContext';

const useSignIn = () => {
    const history = useHistory();
    const authStorage = useContext(AuthStorageContext);
    const apolloClient = useApolloClient();
    const [mutate, result] = useMutation(AUTHORIZE);

    const signIn = async ({ username, password }) => {
        const { data } = await mutate({ variables: { credentials: { username, password } } });
        if (data?.authorize) {
            await authStorage.setAccessToken(data.authorize.accessToken);
            apolloClient.resetStore();
            history.push('/');
        }
        return data;
    };

    return [signIn, result];
};

export default useSignIn;