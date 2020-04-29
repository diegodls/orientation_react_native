

/*
***** Importante *****
Deixar somente os objetos nesse arquivo, remover funções e etc...
*/


// colar os imports no item de amostra (CARD/LISTITEM/ITEM, etc..)
import image_default from '../obj/image_default.png'
import image_1 from '../obj/image_man.jpeg'
import image_2 from '../obj/image_woman.jpeg'
import image_3 from '../obj/image_man_2.jpeg'
import image_4 from '../obj/image_woman_2.jpeg'
import image_5 from '../obj/image_man_3.jpeg'
import image_6 from '../obj/image_woman_3.jpeg'
import image_7 from '../obj/image_man_4.jpeg'
import image_8 from '../obj/image_woman_4.jpeg'
import image_9 from '../obj/image_man_5.jpeg'
import image_10 from '../obj/image_woman_5.jpeg'
import image_11 from '../obj/image_man_6.jpeg'
import image_12 from '../obj/image_woman_6.jpeg'


//colar essa function dentro do render/const do item de amostra (CARD/LISTITEM/ITEM, etc..) e usar para mostrar a imagem:
//<Image source={selectImage(item.image)} />

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

//importar o peoples na tela principal ou que importa o (CARD/LISTITEM/ITEM, etc..)
export const peoples =
    [
        {
            id: 1,
            name: "Alberto Roberto",
            image: "1",
            description: "Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.",
            age: 30,
            gender: "M"
        },
        {
            id: 2,
            name: "Hannah Tanaka",
            image: "2",
            description: "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Atirei o pau no gatis, per gatis num morreus. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si num tem leite então bota uma pinga aí cumpadi. Diuretics paradis num copo é motivis de denguis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Casamentiss faiz malandris se pirulitá. A ordem dos tratores não altera o pão duris. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Per aumento de cachacis, eu reclamis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.",
            age: 32,
            gender: "F"
        },
        {
            id: 3,
            name: "Djokovich Stein",
            image: "3",
            "description": "Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.",
            age: 23,
            gender: "M"
        },
        {
            id: 4,
            name: "Skylar Terrance",
            image: "4",
            description: "Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.",
            age: 26,
            gender: "F"
        },
        {
            id: 5,
            name: "Dion Mustane",
            image: "5",
            description: "Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.",
            age: 35,
            gender: "M"
        },
        {
            id: 6,
            name: "Marie Kovichenko",
            image: "6",
            description: "Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.",
            age: 20,
            gender: "F"
        },
        {
            id: 7,
            name: "Clovis Matias",
            image: "7",
            description: "Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.",
            age: 82,
            gender: "M"
        },
        {
            id: 8,
            name: "Clementice Istor",
            image: "8",
            description: "Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.",
            age: 80,
            gender: "F"
        },
        {
            id: 9,
            name: "Roulo Almen",
            image: "9",
            description: "Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.",
            age: 40,
            gender: "M"
        },
        {
            id: 10,
            name: "Terice Manei",
            image: "10",
            description: "Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.",
            age: 22,
            gender: "F"
        },
        {
            id: 11,
            name: "Albert Lince",
            image: "11",
            description: "Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.",
            age: 24,
            gender: "M"
        },
        {
            id: 12,
            name: "Jhoana May",
            image: "12",
            description: "Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.",
            age: 23,
            gender: "F"
        }
    ];

export default peoples;