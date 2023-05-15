'use strict';

const baseUrl = 'https://api.nbp.pl/api/exchangerates/tables/';

const getCurrency = async (table) => {

    try {

        const response = await fetch(`${baseUrl}${table}`);
        const data = await response.json();
        return data;

    } catch (error) {

        console.log(`To jest błąd: ${error}`);

    }

}

getCurrency('b').then(data => {

    console.log(data);

    // destrukturyzacja
    // const currencies = data[0]; to to samo co niżej
    const [currencies] = data;

    const { rates } = currencies;

    rates.forEach((element, i) => {
        const tr = document.createElement('tr');
        tr.innerHTML =
            `
            <td>${++i}</td>
            <td>${element.currency}</td>
            <td>${element.mid}</td>
            `
        document.querySelector('table tbody').appendChild(tr);
    });
});