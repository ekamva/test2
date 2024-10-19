const calculateBonus = (a, b) => {
    let bonus;
    const sum = a + b;
    debugger;
    // В этой остановке программа вычисляет sum.
    sum > 50 ? (bonus = 50) : (bonus = sum);
    debugger;
    // В этой остановке программа проверила условие если sum > 50,
    // и переменная bonus получила своё значение. 
    return bonus;
    };

    