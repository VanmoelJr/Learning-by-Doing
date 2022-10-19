const fetch = require('node-fetch');

const getDetailProduct = () => new Promise((resolve, reject) => {
    fetch('https://www.tokopedia.com/layzmotor/yoshimura-kawasaki-zx25r-windscreen-wind-armor-dark-smoke', {
        method: 'GET',
        headers: {
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
        }
    })
    .then(res => res.text())
    .then(result => {
        resolve(result)
    })
    .catch(err => reject(err))
});

(async () => {
    const detailProduct = await getDetailProduct()
    console.log(detailProduct);
})();