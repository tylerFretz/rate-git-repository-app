import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Menu } from 'react-native-paper';

const SortByMenu = ({ setSortingCriteria }) => {
    const [visible, setVisible] = useState(false);

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<Button onPress={openMenu} style={{ alignSelf: 'flex-end', backgroundColor: 'white', height: 58 }}>Sort By</Button>}>
                <Menu.Item onPress={() => setSortingCriteria('latest')} title='Most recent' />
                <Menu.Item onPress={() => setSortingCriteria('highestRated')} title='Top rated' />
                <Menu.Item onPress={() => setSortingCriteria('lowestRated')} title='Lowest rated' />
            </Menu>
        </View>
    );
};

export default SortByMenu;