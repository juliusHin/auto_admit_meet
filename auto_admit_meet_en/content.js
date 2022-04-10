function admitUserIfWaiting() {
    const spanElements = document.getElementsByTagName('span');
    for (let i = 0; i < spanElements.length; i++) {
        const span = spanElements[i];
        // untuk yang masuk banyak sekaligus
        if (span.textContent == 'View all') {
            console.log('ada beberapa peserta masuk');
            span.click();
        }

        // klik button izinkan
        if (span.textContent == 'Admit') {
            console.log(`Admitting participant automatically.`);
            span.click();
        }

    }
}

function worker() {
    try {
        admitUserIfWaiting();
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
    }
}

setInterval(worker, 200);