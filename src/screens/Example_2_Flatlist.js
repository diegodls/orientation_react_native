import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
} from 'react-native';

import { screenDimensions } from '../constants/orientation';
import ListItem from '../components/ListItem';
import { posts } from '../obj/posts'

const Example_2_Flatlist = () => {

    const screenOrientation = screenDimensions();
    const BACKGROUND_COLOR = screenOrientation.isPortait ? '#1b1919' : '#fbf9fa';

    return (
        <>
            <StatusBar barStyle={screenOrientation.isPortait ? 'light-content' : 'dark-content'} backgroundColor={BACKGROUND_COLOR} />
            <SafeAreaView style={{
                ...StyleSheet.absoluteFill,
                backgroundColor: BACKGROUND_COLOR,
            }}>
                <View style={{
                    flex: 1,
                    width: screenOrientation.width,
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
                        }}>Com Hook</Text>
                    </View>

                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        data={posts}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({ item, index }) => (
                            <ListItem item={item} isLast={index === posts.length - 1} screenOrientation={screenOrientation} />
                        )}
                    />
                </View>
            </SafeAreaView>
        </>
    )
}
export default Example_2_Flatlist;