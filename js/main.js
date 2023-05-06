// get the api data for the gallery
async function getData(id){
    // tracking

    console.log(id)
    // let painting = document.getElementsByTagName('img')[img_index].attributes[1].value
    // console.log(painting);

    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json'],
    ]);

    let request = new Request(`https://api.artic.edu/api/v1/artworks/${id}`, {
        method: 'GET',
        headers: headers,
    });

    let result = await fetch(request)

    let response = await result.json();

    // console.log(response);

    // console.log(response.data.title);

    create_data(id, response.data.title, response.data.date_display, response.data.artist_display);
}

// create constants to hold dom elements
const DOM_Elements = {
    p72801 : '.p72801',
    p28560 : '.p28560',
    p16568 : '.p16568',
    p14655 : '.p14655',
    p61603 : '.p61603',
    p64818 : '.p64818',

}

// create the painting info html
const create_data = ( id, title, date_display, artist_display) => {
    // console.log(id);
    // console.log(title);
    // console.log(date_display);
    // console.log(artist_display);
    const html = `
            <div>
                Title: ${title}
            </div>
            <div>
                Date: ${date_display}
            </div>
            <div>
                Artist: ${artist_display}
            </div>
    `
    // const html = 'test'
    console.log(html);
    switch(id){
        case '72801' : {
            console.log(title);
    console.log(date_display);
    console.log(artist_display);
            document.querySelector(DOM_Elements.p72801).insertAdjacentHTML('beforeend', html);
            console.log('test');
            break;
        }
        case '28560' : {
            console.log(title);
    console.log(date_display);
    console.log(artist_display);
            document.querySelector(DOM_Elements.p28560).insertAdjacentHTML('beforeend', html);
            break;
        }
        case '16568' : {
            console.log(title);
    console.log(date_display);
    console.log(artist_display);
            document.querySelector(DOM_Elements.p16568).insertAdjacentHTML('beforeend', html);
            break;
        }
        case '14655' : {
            console.log(title);
    console.log(date_display);
    console.log(artist_display);
            document.querySelector(DOM_Elements.p14655).insertAdjacentHTML('beforeend', html);
            break;
        }
        case '61603' : {
            console.log(title);
    console.log(date_display);
    console.log(artist_display);
            document.querySelector(DOM_Elements.p61603).insertAdjacentHTML('beforeend', html);
            break;
        }
        case '64818' : {
            console.log(title);
    console.log(date_display);
    console.log(artist_display);
            document.querySelector(DOM_Elements.p64818).insertAdjacentHTML('beforeend', html);
            break;
        }
    }
}

const clearData = (id) => {
    switch(id){
        case '72801' : {
            document.querySelector(DOM_Elements.p72801).innerHTML = '';
            break;
        }
        case '28560' : {
            document.querySelector(DOM_Elements.p28560).innerHTML = '';
            break;
        }
        case '16568' : {
            document.querySelector(DOM_Elements.p16568).innerHTML = '';
            break;
        }
        case '14655' : {
            document.querySelector(DOM_Elements.p14655).innerHTML = '';
            break;
        }
        case '61603' : {
            document.querySelector(DOM_Elements.p61603).innerHTML = '';
            break;
        }
        case '64818' : {
            document.querySelector(DOM_Elements.p64818).innerHTML = '';
            break;
        }
    }
}