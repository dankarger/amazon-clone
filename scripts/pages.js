
export let pageNumber = 0;


//Function to create the pages layout for the carousel, determin how the pages are divide,
//base on the database size and the pageItem variable
export function paginator(data,pageItems) {
    let numberOfPages = Math.floor(data.length / pageItems)
    let pages = []
    for (let i = 0; i <data.length; i+=pageItems) {
        let page = data.slice(i,i+pageItems)
        pages.push(page)
    }
    return pages
}

//function to navigate the carousel,check if user can go up or down  and adjusting the page number variable
export function pageSelector(value,pages) {
    if (value === 'up') {
        if(pageNumber<pages.length-1) {
            pageNumber++
            return pageNumber
        }
        return  pageNumber
    }
    if (value === 'down') {
        if(pageNumber>0) {
            pageNumber--
            return pageNumber
        }
            return  pageNumber
    }
}

