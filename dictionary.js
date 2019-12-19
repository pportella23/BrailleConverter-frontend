
var BRAILLE = {
    ' ': '000000',   // space bar to dot-0
    '_': '010101',
    '-': '000011',
    ',': '⠠',
    ';': '⠰',
    ':': '⠱',
    '!': '⠮',
    '?': '⠹',
    '.': '⠨',
    '(': '⠷',
    '[': '⠪',
    '@': '⠈',
    '*': '⠡',
    '/': '⠌',
    '\'': '⠄',
    '\"': '⠐',
    '\\': '⠳',
    '&': '⠯',
    '%': '⠩',
    '^': '⠘',
    '+': '⠬',
    '<': '⠣',
    '>': '⠜',
    '$': '⠫',
    '0': '⠴',
    '1': '⠂',
    '2': '⠆',
    '3': '⠒',
    '4': '⠲',
    '5': '⠢',
    '6': '⠖',
    '7': '⠶',
    '8': '⠦',
    '9': '⠔',
    'A': '100000',
    'B': '101000',
    'C': '110000',
    'D': '110100',
    'E': '100100',
    'F': '111000',
    'G': '111100',
    'H': '101100',
    'I': '011000',
    'J': '011100',
    'K': '100010',
    'L': '101010',
    'M': '110010',
    'N': '110110',
    'O': '100110',
    'P': '111010',
    'Q': '111110',
    'R': '101110',
    'S': '011010',
    'T': '011110',
    'U': '100011',
    'V': '101011',
    'W': '011101',
    'X': '110011',
    'Z': '100111',
    ']': '111101',
    '#': '010111',
    'Y': '110111',
    ')': '011111',
    '=': '111111'
},

    ASCII = {
        ' ': ' ',   // space bar to space bar
        '⠀': ' ',   // dot-0 to space bar
        '⠸': '_',
        '⠤': '-',
        '⠠': ',',
        '⠰': ';',
        '⠱': ':',
        '⠮': '!',
        '⠹': '?',
        '⠨': '.',
        '⠷': '(',
        '⠪': '[',
        '⠈': '@',
        '⠡': '*',
        '⠌': '/',
        '⠄': '\'',
        '⠐': '\"',
        '⠳': '\\',
        '⠯': '&',
        '⠩': '%',
        '⠘': '^',
        '⠬': '+',
        '⠣': '<',
        '⠜': '>',
        '⠫': '$',
        '⠴': '0',
        '⠂': '1',
        '⠆': '2',
        '⠒': '3',
        '⠲': '4',
        '⠢': '5',
        '⠖': '6',
        '⠶': '7',
        '⠦': '8',
        '⠔': '9',
        '⠁': 'A',
        '⠃': 'B',
        '⠉': 'C',
        '⠙': 'D',
        '⠑': 'E',
        '⠋': 'F',
        '⠛': 'G',
        '⠓': 'H',
        '⠊': 'I',
        '⠚': 'J',
        '⠅': 'K',
        '⠇': 'L',
        '⠍': 'M',
        '⠝': 'N',
        '⠕': 'O',
        '⠏': 'P',
        '⠟': 'Q',
        '⠗': 'R',
        '⠎': 'S',
        '⠞': 'T',
        '⠥': 'U',
        '⠧': 'V',
        '⠺': 'W',
        '⠭': 'X',
        '⠵': 'Z',
        '⠻': ']',
        '⠼': '#',
        '⠽': 'Y',
        '⠾': ')',
        '⠿': '='
    };

// module.exports = {
//     convert: function (character) {
//         return !!BRAILLE[character] ? BRAILLE[character] : '?';
//     },

//     read: function (symbol) {
//         return !!ASCII[symbol] ? ASCII[symbol] : '?';
//     },

//     toBraille: function (text) {
//         var upperText, upperTextLength, brailleText, i;

//         upperText = text.toUpperCase();
//         upperTextLength = upperText.length;
//         brailleText = '';

//         for (i = 0; i < upperTextLength; i++) {
//             brailleText += this.convert(upperText[i]);
//         }

//         return brailleText;
//     },

//     toText: function (code) {
//         var codeLength, asciiText, i;

//         codeLength = code.length;
//         asciiText = '';

//         for (i = 0; i < codeLength; i++) {
//             asciiText += this.read(code[i]);
//         }

//         return asciiText;
//     }
// };


export function convert(character) {
    return !!BRAILLE[character] ? BRAILLE[character] : '?';
}
export function read(symbol) {
    return !!ASCII[symbol] ? ASCII[symbol] : '?';
}
export function toBraille(text) {
    var upperText, upperTextLength, brailleText, i;
    upperText = text.toUpperCase();
    upperTextLength = upperText.length;
    brailleText = [];
    for (i = 0; i < upperTextLength; i++) {
        brailleText[i] = this.convert(upperText[i]);
    }
    return brailleText;
}
export function toText(code) {
    var codeLength, asciiText, i;
    codeLength = code.length;
    asciiText = '';
    for (i = 0; i < codeLength; i++) {
        asciiText += this.read(code[i]);
    }
    return asciiText;
}
