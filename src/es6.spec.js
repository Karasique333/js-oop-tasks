const assert = require('assert');
const core = require('./es6');

describe('es6', () => {
    describe('#fioToName', () => {
        it('ФИО в Имя Фамилия корректно', () => {
            assert.strictEqual(core.fioToName('Иванов Иван Иванович'), 'Иван Иванов');
        });

        it('ФИ в Имя Фамилия', () => {
            assert.strictEqual(core.fioToName('Петров Петр'), 'Петр Петров');
        });
    });

    describe('#filterUnique', () => {
        it('массив с уникальными равен сам себе', () => {
            assert.deepStrictEqual(core.filterUnique([1, 2, 3]), [1, 2, 3]);
        });

        it('массив с неуникальными отфильтрован', () => {
            assert.deepStrictEqual(core.filterUnique([1, 1, 1, 1]), [1]);
        });

        it('пустой массив', () => {
            assert.deepStrictEqual(core.filterUnique([]), []);
        });
    });

    describe('#calculateSalaryDifference', () => {
        it('считает разницу корректно', () => {
            assert.strictEqual(core.calculateSalaryDifference([1, 2, 3]), 3);
        });

        it('на пустой массив возвращается falsy значение', () => {
            assert.strictEqual(!!core.calculateSalaryDifference([]), false);
        });
    });

    describe('#Dictionary', () => {
        it('экземпляр класса создается', () => {
            const dic = new core.Dictionary();

            // TODO
            assert.strictEqual(!!dic, true);
        });

        it('Добавление слова', () => {
            const dictionary = new core.Dictionary()
            dictionary.addWord("Чай", "Напиток")
            assert.strictEqual(dictionary.getDefinition("Чай"), "Напиток")
        });

        it('Удаление слова', () => {
            const dictionary = new core.Dictionary()
            dictionary.addWord("Чай", "Напиток")
            dictionary.removeWord("Чай")
            assert.strictEqual(dictionary.getDefinition("Чай"), undefined)
        });

        it('Ошибка при добавлении не строки', () => {
            const dictionary = new core.Dictionary()
            assert.throws(() => dictionary.addWord(456,'Напиток'), Error)
        });
    });
});