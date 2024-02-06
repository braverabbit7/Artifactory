// Функция для ввода массива с клавиатуры
function inputArray() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve, reject) => {
        readline.question('Введите элементы массива через пробел: ', input => {
            const array = input.trim().split(' ').map(Number);
            readline.close();
            resolve(array);
        });
    });
}

// Функция для нахождения максимального элемента массива
function findMax(array) {
    if (array.length === 0) return null;
    return Math.max(...array);
}

// Главная функция
async function main() {
    try {
        // Ввод массива
        const array = await inputArray();

        // Нахождение максимального элемента
        const max = findMax(array);

        // Вывод максимального элемента
        console.log('Максимальный элемент массива:', max);
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}

// Запуск скрипта
main();
