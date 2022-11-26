// ! Node 19.1.0 versiyonuna göre kodlama yapılmıştır.

const fs = require('node:fs');

// ! Dosya Oluşturma

fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err, data) => {
    if (err) console.log(err);
    console.log('Dosya Oluşturuldu');
}
);

// ! Dosya Okuma

fs.readFile('employees.json', 'utf8', (err, data) => {
    if (err) console.log(err);
    console.log(data);
});


// ! Dosya Ekleme Yapma

const eklenecek = { 'deneme': 'deneme' };
fs.appendFile('employees.json', `${eklenecek}`, (err) => {
    if (err) console.log(err.message);
    console.log(`${eklenecek} dosyaya eklendi`);
});


// ! Dosya Silme

fs.unlink('employees.json', (err) => {
    if (err) console.log(err.message);
    console.log(`${__dirname}/employees.jason dosyası silindi`);
});