// This is a simple pattern used to shield you from complex API and to unify multiple separate APIs.
// If you ever used jQuery then you used a Facade. jQuery is a facade for the complex DOM API and it simplifies all the complexity
// of working with DOM by exposing the same API which is easier to reason with.
// So, facades let you abstract away any complexity of the subsystem allowing you to interact with it directly instead of the system. 
// This is probably the most common pattern when it comes to libraries of the web. This pattern can help you turn powerful and complex 
// things out there into something much simpler to consume.

const h = require('../../helper/helper').helper;

// ------------------------------------ //
// ............ Ejemplo ............... //
// facade around the XMLHttpRequest API //
// with support for Promise and POST    //
// JSON and Multipart Data              //
// ------------------------------------ //
const request = (() => ({
    post(url, data = {}) {
        const req = new XMLHttpRequest();
        if (data instanceof File) {
            formData = new FormData();
            formData.append('file', data, data.name);
            data = formData
        } else {
            data = JSON.stringify(data);
        }
        req.open('POST', url, true);
        return new Promise((res, rej) => {
            req.onload = (e) => {
                if (req.status === 200) {
                    res(e);
                } else {
                    rej(e);
                }
            }
            req.onerror = rej;
            req.onabort = rej;
            req.onabort = rej;
            req.ontimeout = rej;
            req.send(data);
        });
    },
    get() {
        // code here
    }
}))();
request.post('https://www.domain.com/api/endpoint', { some: 'data' })
    .then(e => {
        console.log('success', e)
    })
    .catch(e => {
        console.log('failed', e)
    })