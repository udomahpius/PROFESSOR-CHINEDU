// ALL JOURNAL PUBLICATIONS ARE MAPPED HERE IN JS FILE AND DISPLAY IN JOURNAL.HTML FILE

const gallery = [
    {
        id: 1,
        img:`./images/okeke gallery/okeke-1.jpeg`
    },
    {
        id: 2,
        img:`./images/okeke gallery/okeke-2.jpeg`
    },
    {
        id: 3,
        img:`/images/okeke gallery/okeke-3.jpeg`
    },
    {
        id: 4,
        img:`/images/okeke gallery/okeke-4.jpeg`
    },
    {
        id: 5,
        img:`/images/okeke gallery/okeke-5.jpeg`
    },
    {
        id: 6,
        img:`/images/okeke gallery/okeke-6.jpeg`
    },
    {
        id: 7,
        img:`/images/okeke gallery/okeke-7.jpeg`
    },
    {
        id: 8,
        img:`/images/okeke gallery/okeke-8.jpeg`
    },
    {
        id: 9,
        img:`/images/okeke gallery/okeke-9.jpeg`
    },
    {
        id: 10,
        img:`/images/okeke gallery/okeke-10.jpeg`
    },
    {
        id: 11,
        img:`/images/okeke gallery/okeke-11.jpeg`
    },
    {
        id: 12,
        img:`/images/okeke gallery/okeke-12.jpeg`
    },
    {
        id: 13,
        img:`/images/okeke gallery/okeke-13.jpeg`
    },
    {
        id: 14,
        img:`/images/okeke gallery/okeke-14.jpeg`
    },
    {
        id: 15,
        img:`/images/okeke gallery/okeke-15.jpeg`
    },
    {
        id: 16,
        img:`/images/okeke gallery/okeke-16.jpeg`
    },
    {
        id: 17,
        img:`/images/okeke gallery/okeke-17.jpeg`
    },
    {
        id: 18,
        img:`/images/okeke gallery/okeke-18.jpeg`
    },
    {
        id: 19,
        img:`/images/okeke gallery/okeke-19.jpeg`
    },
    {
        id: 20,
        img:`/images/okeke gallery/okeke-20.jpeg`
    },
    {
        id: 21,
        img:`/images/okeke gallery/okeke-21.jpeg`
    },
    {
        id: 22,
        img:`/images/okeke gallery/okeke-22.jpeg`
    },
    {
        id: 23,
        img:`/images/okeke gallery/okeke-23.jpeg`
    },
    {
        id: 24,
        img:`/images/okeke gallery/okeke-24.jpeg`
    },
    {
        id: 25,
        img:`/images/okeke gallery/okeke-25.jpeg`
    },
    {
        id: 26,
        img:`/images/okeke gallery/okeke-26.jpeg`
    },
]



const gallerybook = () => {
    let galleryContainer = document.querySelector('.galleryEle');
    let displaygalleryData = ''
    gallery.map((galleryData) => {
        const { img } = galleryData;
        displaygalleryData += `
       
                    
                        
                        <div class="col-lg-6 col-12 ">
                            <div class="news-block">
                                <div class="news-block-top">
                                   
                                        <img src="${img}" class="news-image img-fluid" alt="" onclick="openImg(this.src)">
                                   
                                    
                                </div>
                            </div>
                        </div>
                       
        `
        galleryContainer.innerHTML = displaygalleryData;
    })
}
gallerybook()