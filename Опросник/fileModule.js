let data = [];
let blockCount = [];
for (let i = 0; i < localStorage.length; i++) {
    blockCount.push(i);

    const dataLocal = JSON.parse(localStorage.getItem(`block-${i}`));

    for (let value in dataLocal) {
        data.push(dataLocal[value]);
    }

}
data = data.map(function (el) {
    return [el[0], el[1], el[2]].join(';') + "\r\n";
});
const blob = new Blob(data, {
    type: 'text/csv;charset=utf-8'
});

link.href = URL.createObjectURL(blob);