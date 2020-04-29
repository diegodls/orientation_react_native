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

export const posts =
    [
        {
            id: 1,            
            image: "1",
            description: "Be creative. Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor." ,
            likes: 30,
            author: 1
        },
        {
            id: 2,
            
            image: "2",
            description: "I like to play. Mussum Ipsum, Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.",
            likes: 32,
            author: 2
        },
        {
            id: 3,
            
            image: "3",
            description: "Nice view. Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.",
            likes: 23,
            author: 3
        },
        {
            id: 4,
            
            image: "4",
            description: "My little tree. Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.",
            likes: 26,
            author: 4
        },
        {
            id: 5,
            
            image: "5",
            description: "Magnific castle. Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.",
            likes: 35,
            author: 5
        },
        {
            id: 6,
            
            image: "6",
            description: "Nice lake. Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor." ,
            likes: 20,
            author: 6
        },
        {
            id: 7,
            
            image: "7",
            description: "WoW, let's fly. Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor." ,
            likes: 82,
            author: 7
        },
        {
            id: 8,
            
            image: "8",
            description: "Stars. Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor." ,
            likes: 80,
            author: 8
        },
        {
            id: 9,
            
            image: "9",
            description: "Let's do the work. Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor." ,
            likes: 40,
            author: 9
        },
        {
            id: 10,
            
            image: "10",
            description: "Take care. Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor." ,
            likes: 22,
            author: 10
        },
        {
            id: 11,
            
            image: "11",
            description: "Almost get lost. Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor." ,
            likes: 24,
            author: 11
        },
        {
            id: 12,
            
            image: "12",
            description: "Rest. Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor." ,
            likes: 23,
            author: 12
        }
    ];

export default posts;