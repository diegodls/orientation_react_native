import React, { useState } from 'react'
import {
    SafeAreaView,
    View,
    Text,
    Image,
} from 'react-native'

import image_default from '../obj/image_default.png'
import image_1 from '../obj/image_post_1.jpeg'
import image_2 from '../obj/image_post_2.jpeg'
import image_3 from '../obj/image_post_3.jpeg'
import image_4 from '../obj/image_post_4.jpeg'
import image_5 from '../obj/image_post_5.jpeg'
import image_6 from '../obj/image_post_6.jpeg'
import image_7 from '../obj/image_post_7.jpeg'
import image_8 from '../obj/image_post_8.jpeg'
import image_9 from '../obj/image_post_9.jpeg'
import image_10 from '../obj/image_post_10.jpeg'
import image_11 from '../obj/image_post_11.jpeg'
import image_12 from '../obj/image_post_12.jpeg'


const ListItem = (props) => {

    const item = props.item;
    const screenOrientation = props.screenOrientation;
    const isLast = props.isLast;
    const widthFormated = screenOrientation.width - 20;

    function selectImage(image) {

        switch (image) {
            case '1':
                return image_1;
            case '2':
                return image_2;
            case '3':
                return image_3;
            case '4':
                return image_4;
            case '5':
                return image_5;
            case '6':
                return image_6;
            case '7':
                return image_7;
            case '8':
                return image_8;
            case '9':
                return image_9;
            case '10':
                return image_10;
            case '11':
                return image_11;
            case '12':
                return image_12;
            default:
                return image_default;

        }

    }

    function getImageHeight(image) {
        return Image.resolveAssetSource(image).height * (widthFormated / Image.resolveAssetSource(image).width)
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 10,
                paddingBottom: isLast ? 10 : 0,
                width: screenOrientation.width,
                overflow: 'hidden',
            }}
        >

            <View
                style={{
                    flex: 1,
                    width: widthFormated,
                    height: getImageHeight(selectImage(item.image)),
                    borderRadius: 15,
                    overflow: 'hidden',

                }}
            >
                <Image
                    source={selectImage(item.image)}
                    style={{
                        flex: 1,
                        width: undefined,
                        height: undefined,
                        resizeMode: 'cover',
                        opacity: screenOrientation.isPortait ? 0.6 : 1,
                    }}
                />
            </View>
            <View style={{
                position: 'absolute',
                overflow: 'hidden',
                left: 20,
                alignItems: 'center',
                backgroundColor: screenOrientation.isPortait ? 'rgba(0, 0, 0, 0.4)' : 'rgba(256, 256, 256, 0.3)',
                padding: 5,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 20,
            }}>
                <Text
                    numberOfLines={1}
                    style={{
                        fontSize: 50,
                        color: screenOrientation.isPortait ? '#ff7517' : '#373331',
                    }}>{item.name}</Text>
            </View>
        </SafeAreaView>
    )
}



export default ListItem;