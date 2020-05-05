import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    FlatList,
    Dimensions,
} from 'react-native';

import ListItemWithout from '../components/ListItemWithout';
import { posts } from '../obj/posts'

const Example_2_Flatlist_Without = () => {

    const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
    const BACKGROUND_COLOR = '#1b1919';

    return (
        <>
            <StatusBar barStyle={SCREEN_WIDTH > SCREEN_HEIGHT ? 'dark-content' : 'light-content'} backgroundColor={BACKGROUND_COLOR} />
            <SafeAreaView style={{
                ...StyleSheet.absoluteFill,
                backgroundColor: BACKGROUND_COLOR,
            }}>
                <View style={{
                    flex: 1,
                    width: SCREEN_WIDTH,
                }}>
                    <View style={{
                        backgroundColor: '#222831',
                        width: 150,
                        height: 60,
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderTopRightRadius: 0,
                        borderTopLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderBottomLeftRadius: 0,
                        elevation: 5,
                        position: 'absolute',
                        marginTop: 20,
                    }}>
                        <Text style={{
                            color: '#fc951a',
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}>Sem Hook</Text>
                    </View>

                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        data={posts}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({ item, index }) => (
                            <ListItemWithout item={item} isLast={index === posts.length - 1} SCREEN_WIDTH={SCREEN_WIDTH} SCREEN_HEIGHT={SCREEN_HEIGHT}/>
                        )}
                    />
                </View>
            </SafeAreaView>
        </>
    )
}
export default Example_2_Flatlist_Without;