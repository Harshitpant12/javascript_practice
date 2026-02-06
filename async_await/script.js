// async function getData() {
//     // Simulate getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }
async function getData() {
    // Simulate getting data from a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // // let data = await x.json()
    // let data = await x.text()
    // console.log(data);
    // return 455

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = await x.json()
    return data
    //   .then(response => response.json())
    //   .then(json => console.log(json))
}

async function main() {
    console.log('Loading Modules...');
    let data = await getData()
    console.log(data);

    console.log('Printing this after the promise is resolved');
    console.log('Hello There');

}
main()

// data.then(() => {
//     console.log(data);

//     console.log('Printing this after the promise is resolved');
//     console.log('Hello There');
// })
