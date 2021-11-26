// export let pageItems = 5

export function paginator(data,pageItems) {
    let numberOfPages = Math.floor(data.length / pageItems)
    let pages = []
    for (let i = 0; i <data.length; i+=pageItems) {
        let page = data.slice(i,i+pageItems)
        pages.push(page)
    }
    console.log('pages2', pages)
    return pages

}