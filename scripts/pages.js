// export let pageItems = 5
export let pageNumber = 0;

export function paginator(data,pageItems) {
    let numberOfPages = Math.floor(data.length / pageItems)
    let pages = []
    for (let i = 0; i <data.length; i+=pageItems) {
        let page = data.slice(i,i+pageItems)
        pages.push(page)
    }
    return pages

}

export function pageSelector(value,pages,pageNumber) {
    if (value === 'up') {
        if(pageNumber<pages.length-1) {
            pageNumber++
            return pageNumber
        }else{
            return  pageNumber
        }
    }
    if (value === 'down') {
        if(pageNumber>0) {
            pageNumber--
            return pageNumber
        }else{
            return  pageNumber
        }
    }
}

