class VigenereCipheringMachine {
    constructor(isReverse = true) {
        this.isReverse = isReverse;
        this.vigenereTable = [
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            'BCDEFGHIJKLMNOPQRSTUVWXYZA',
            'CDEFGHIJKLMNOPQRSTUVWXYZAB',
            'DEFGHIJKLMNOPQRSTUVWXYZABC',
            'EFGHIJKLMNOPQRSTUVWXYZABCD',
            'FGHIJKLMNOPQRSTUVWXYZABCDE',
            'GHIJKLMNOPQRSTUVWXYZABCDEF',
            'HIJKLMNOPQRSTUVWXYZABCDEFG',
            'IJKLMNOPQRSTUVWXYZABCDEFGH',
            'JKLMNOPQRSTUVWXYZABCDEFGHI',
            'KLMNOPQRSTUVWXYZABCDEFGHIJ',
            'LMNOPQRSTUVWXYZABCDEFGHIJK',
            'MNOPQRSTUVWXYZABCDEFGHIJKL',
            'NOPQRSTUVWXYZABCDEFGHIJKLM',
            'OPQRSTUVWXYZABCDEFGHIJKLMN',
            'PQRSTUVWXYZABCDEFGHIJKLMNO',
            'QRSTUVWXYZABCDEFGHIJKLMNOP',
            'RSTUVWXYZABCDEFGHIJKLMNOPQ',
            'STUVWXYZABCDEFGHIJKLMNOPQR',
            'TUVWXYZABCDEFGHIJKLMNOPQRS',
            'UVWXYZABCDEFGHIJKLMNOPQRST',
            'VWXYZABCDEFGHIJKLMNOPQRSTU',
            'WXYZABCDEFGHIJKLMNOPQRSTUV',
            'XYZABCDEFGHIJKLMNOPQRSTUVW',
            'YZABCDEFGHIJKLMNOPQRSTUVWX',
            'ZABCDEFGHIJKLMNOPQRSTUVWXY'
        ]
    }
    encrypt(str, key) {
        if (typeof str !== 'string' || !key) {
            throw new Error();
        }
        let newKey = key;
        if (str.length !== newKey.length) {
            if (str.length > newKey.length) {
                const dif = Math.ceil(str.length / newKey.length);
                newKey = newKey.repeat(dif);
                const arrStr = str.split(' ');
                if (arrStr.length > 1) {
                    const newKeyArr = newKey.split('');
                    let position = 0;
                    arrStr.forEach(elem => {
                        position += elem.length;
                        newKeyArr.splice(position, 0, ' ');
                        position += 1;
                    });
                    newKey = newKeyArr.join('');
                }
            }
        }
        let encryptStr = '';
        for (let i = 0; i < str.length; i += 1) {
            const index = this.vigenereTable[0].indexOf(str[i].toUpperCase());
            if (index < 0 ) {
                encryptStr += str[i];
                continue;
            }
            const keyRow = this.vigenereTable.find(elem => elem[0] === newKey[i].toUpperCase());
            encryptStr += keyRow[index];
        }
        return encryptStr;
    }

    decrypt(str, key) {
        if (typeof str !== 'string' || !key) {
            throw new Error();
        }
        let newStr = str;
        if (!this.isReverse) {
            newStr = newStr.split('').reverse().join('');
        }
        let newKey = key;
        if (newStr.length !== newKey.length) {
            if (newStr.length > newKey.length) {
                const dif = Math.ceil(newStr.length / newKey.length);
                newKey = newKey.repeat(dif);
                const arrStr = newStr.split(' ');
                if (arrStr.length > 1) {
                    const newKeyArr = newKey.split('');
                    let position = 0;
                    arrStr.forEach(elem => {
                        position += elem.length;
                        newKeyArr.splice(position, 0, ' ');
                        position += 1;
                    });
                    newKey = newKeyArr.join('');
                }
            }
        }
        let decryptStr = '';
        for (let i = 0; i < newStr.length; i += 1) {
            const keyRow = this.vigenereTable.find(elem => elem[0] === newKey[i].toUpperCase());

            if (keyRow) {
                const index = keyRow.indexOf(newStr[i].toUpperCase());
                if (index < 0) {
                    decryptStr += newStr[i];
                    continue;
                }
                decryptStr += this.vigenereTable[0][index];
                continue;
            }

            decryptStr += newStr[i];
        }
        if (!this.isReverse) {
            return decryptStr.split('').reverse().join('');
        }
        return decryptStr;
    }
}

module.exports = VigenereCipheringMachine;
