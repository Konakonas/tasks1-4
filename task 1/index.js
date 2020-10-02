let gitXml = new XMLHttpRequest();
gitXml.open('GET', 'https://api.github.com/gists/public', false);
gitXml.send();
if (gitXml.status === 200) {
    let gitData = (gitXml.responseText);
    gitData = JSON.parse(gitData.toLowerCase());
    getData(gitData);
}

function getData(data) {
    let allData = '';
    let currentData = [];
    data.forEach(function (key) {
            let fileName = key.files;
            for (key in fileName) {
                let newObj = {
                    filename: fileName[key]['filename'],
                    language: fileName[key]['language'],
                    raw_url: fileName[key]['raw_url']
                };
                currentData.push(newObj);
            }
        }
    )
    for (let key in currentData) {
        allData += '<tr><td>' + currentData[key].filename + '</td>'
            + '<td>' + currentData[key].language + '</td>' +
            '<td><a href="' + currentData[key].raw_url + '">' + "url" + '</a></td></tr>';
    }
    $('#data').append(allData);
}
