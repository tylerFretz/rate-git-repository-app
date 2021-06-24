import { useMutation } from '@apollo/react-hooks';

import { CREATE_USER } from '../graphql/mutations';

const useSignUp = () => {
    const [mutate, result] = useMutation(CREATE_USER);

    const signUp = async (credentials) => {
        const { data } = await mutate({ variables: credentials });
        return data;
    };

    return [signUp, result];
};

export default useSignUp;