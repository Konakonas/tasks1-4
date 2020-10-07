async function data() {
    let response = await fetch('https://api.github.com/gists/public');
    if (response.ok) {
        let json = await response.json();
        getData(json);
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

function getData(data) {
    let allData = '';
    let currentData = [];
    data.forEach(key =>  {
            let files = Object.values(key.files);
            currentData.push(...files);
        }
    )
    for (let key in currentData) {
        allData += '<tr><td>' + currentData[key].filename + '</td>'
            + '<td>' + currentData[key].language + '</td>' +
            '<td><a href="' + currentData[key].url + '">' + "url" + '</a></td></tr>';
    }
    $('#data').append(allData);
}
data();
