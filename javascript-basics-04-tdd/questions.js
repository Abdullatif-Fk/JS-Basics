
const stringSize = (text) => {
    return text.length;

}
const replaceCharacterE = (text) => {

    return text.replace("e", " ");s
}
const concatString = (text1, text2) => {
    return text1 +text2;

}
const showChar5 = (text) => {
    return text[4];

}
const showChar9 = (text) => {
    return text.substring(0,9);

}
const toCapitals = (text) => {
    return text.toUpperCase();

}
const toLowerCase = (text) => {
    return text.toLowerCase();

}
const removeSpaces = (text) => {
    return text.trim();

}
const IsString = (text) => {
    return typeof(text)===typeof("");

}

const getExtension = (text) => {
    return text.slice((text.lastIndexOf('.')  +1));

}
const countSpaces = (text) => {
    return text.split(' ').length-1;

}
const InverseString = (text) => {
    return text.split('').reverse().join('');
}

const power = (x, y) => {
    return Math.pow(x,y);

}
const absoluteValue = (num) => {
    return Math.abs(num);
}
const absoluteValueArray = (array) => {
    for (var i=0 ;i<array.length;i++){
        array[i]=Math.abs(array[i]);

    }
    return array;

}
const circleSurface = (radius) => {
    var surface =Math.PI*radius*radius;
    return Math.round(surface);

}
const hypothenuse = (ab, ac) => {
    var hyp =ab*ab+ac*ac;
    return Math.sqrt(hyp);


}
const BMI = (weight, height) => {

    var h=height * height;
    h=weight / h;
    return parseFloat(h.toFixed(2));

}

const createLanguagesArray = () => {
    return ["Html", "CSS", "Java", "PHP"]; 

}

const createNumbersArray = () => {
   var a= [0,1,2,3,4,5]
   return a;

}

const replaceElement = (languages) => {
    languages[2]="Javascript";
    return languages;

}

const addElement = (languages) => {
    languages.push("Ruby");
    languages.push("Python");
    return languages;


}

const addNumberElement = (numbers) => {
    numbers.unshift(-2 ,-1);
    return numbers;

}

const removeFirst = (languages) => {

     languages.shift();
     return languages;
}

const removeLast = (languages) => {
    languages.pop();
     return languages;


}

const convertStrToArr = (social_arr) => {
    return social_arr.split(",");
     

}

const convertArrToStr = (languages) => {
    return languages.join();

}

const sortArr = (social_arr) => {
    return social_arr.sort();

}

const invertArr = (social_arr) => {
    return social_arr.reverse();

}