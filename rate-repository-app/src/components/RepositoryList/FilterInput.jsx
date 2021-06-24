import React, { useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';

const FilterInput = ({ filter, setFilter }) => {
    const [input, setInput] = useState(filter);
    
    const onChangeInput = input => setInput(input);

    //using on icon press instead of debounce because of loss of focus on rerenders

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setFilter(input);
    //     }, 500);
    //     return () => clearInterval(timer);
    // }, [input]);

    return (
        <>
            <Searchbar
                style={{ flexGrow: 1 }}
                placeholder="Filter by"
                onChangeText={onChangeInput}
                onIconPress={() => setFilter(input)}
                value={input}
            />
        </>
    );
};

export default FilterInput;