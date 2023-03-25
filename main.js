let array = []

for (let i = 0; i < Infinity; i++) {
    let imya = prompt('Введите имя с помощью add'),
        newImya = imya.split(', ')
    if ( newImya[0] == 'add') {
        array.push(newImya[1])
    }else if(newImya[0] == 'delete') {
        for (let i = 0; i < array.length; i++) {
            array[i] == newImya[1] ? array.splice(i, 1) : ''
        }
    }else if(newImya[0] == 'stop'){
        break;
    }
    console.log(array);
} 

console.log(array);