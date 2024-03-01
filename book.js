// ALL JOURNAL PUBLICATIONS ARE MAPPED HERE IN JS FILE AND DISPLAY IN JOURNAL.HTML FILE

const book = [
    {
        id: 1,
        date:`2023 01`,
        title: ` Okeke, C.I.O., Adu, E.O., Mncanca, M., & Ugwuanyi, C.S. (Eds.) `,
        body: `  Managing
        the microteaching process: A guide to teaching practice preparation. Pretoria: Van
        Schaik Publishers. ISBN: 978 0 627 04049 8.`,
        download: `<a href="#" download="#" class="custom-btn btn">Download</a>`
    },
     {
        id: 2,
        date:`2022 02`,
        title: `Adu, E.O., & Okeke, C.I.O. (Eds.) `,
        body: ` Fundamentals of research in Humanities,
        Social Sciences and Science Education: A practical step-by-step approach to a
        successful research journey. Pretoria: Van Schaik Publishers. ISBN: 978 0 627
        03883 9 `,
        download: `<a href="#" download="#" class="custom-btn btn">Download</a>`
    },
    {
        id: 3,
        date:`2016 03`,
        title: `Okeke, C.I.O., Wolhuter, C.C., Adu, E.O., van Wyk, M.M., & Abongdia, J.A. (Eds.)
        `,
        body: `  Learn to teach: A handbook for teacher education. Cape Town: Oxford
        University Press. ISBN: 9780190411794; E-pub ISBN: 9780190412869`,
        download: `<a href="#" download="#" class="custom-btn btn">Download</a>`
    },
    {
        id: 4,
        date:`2015 04`,
        title: `Okeke, C. I. O., & van Wyk, M. M. `,
        body: `  Educational Research: An African
        Approach. Cape Town: Oxford University Press. ISBN: 9780190409135, e-pub:
        9780199047871.`,
        download: `<a href="#" download="#" class="custom-btn btn">Download</a>`
    },
    {
        id: 5,
        date:`2014 05`,
        title: `Okeke, C. I. O., van Wyk, M. M., & Phasha, N. T. (Eds) `,
        body: ` Schooling, society
        and inclusive education: An African perspective. Cape Town: Oxford University Press.
        ISBN 9780199077809 `,
        download: `<a href="#" download="#" class="custom-btn btn">Download</a>`
    },
    {
        id: 6,
        date:`2013 06`,
        title: `Okeke, C. I. O., & Mndebele, C. B. S. (Eds) `,
        body: `  Education reforms in the SADC
        Region: Challenges and responses in the 21st Century. Rosemead, CA, USA:
        Scientific & Academic Publishers. ISBN: 978-1-938681-03-5
         <a href="http://www.sapub.org/book" class="text-primary">Online</a>`,
        download: `<a href="#" download="#" class="custom-btn btn">Download</a>`
    },
    {
        id: 7,
        date:`2010 07`,
        title: `Ekeanyanwu, N. T., & Okeke, C. I. O. (Eds.)`,
        body: `  Indigenous societies and
        cultural Globalization in the 21st Century: Is the global village truly real? Germany:
        VDM Publishing House. ISBN-13: 978-363925760-1`,
        download: `<a href="#" download="#" class="custom-btn btn">Download</a>`
    },
    {
        id: 8,
        date:`2023 08`,
        title: `Akobi, T.O., Aye, E.N., Okeke, C.I.O. `,
        body: ` Skills of reinforcement. In C.I.O Okeke,
        E.O. Adu, M. Mncanca & C.S. Ugwuanyi (Eds.) (2023). Managing the microteaching process: A guide to teaching practice preparation (62-69). Pretoria: Van Schaik
        Publishers. ISBN: 978 0 627 04049 8. `,
        download: `<a href="#" download="#" class="custom-btn btn">Download</a>`
    },
    {
        id:9,
        date:`2019 09`,
        title: `Mncanca, M., & Okeke, C.I.O.`,
        body: ` Early exposure to domestic violence and
        implications for early childhood education services: The South African microcosm. In
        S.T. Staukeni (Ed.), Cultivating a Culture of Nonviolence in Early Childhood
        Development Centres and Schools (35-55). Hershey, USA: IGI Global Publishers.
        10.4018/978-1-5225-7476-7.ch003. 2329-5929/2329-5937. `,
        download: `<a href="#" download="#" class="custom-btn btn">Download</a>`
    },
    {
        id: 10,
        date:`2016 10`,
        title: `van Wyk, MM., Galloway, GG., & Okeke, CIO. `,
        body: ` Basic classroom management.
        In CIO, Okeke, CC, Wolhuter, EO, Adu, MM, van Wyk, & JA, Abongdia (Eds.) (2016).
        Learn to teach: A handbook for teacher education (pp. 236-250). Cape Town: Oxford
        University Press South Africa. `,
        download: `<a href="#" download="#" class="custom-btn btn">Download</a>`
    },
    {
        id: 11,
        date:`2015 11`,
        title: `Okeke, CIO `,
        body: ` Achieving qualitative validity, reliability and generalisability. In
        CIO Okeke & MM van Wyk (2015), Educational research: An African approach (pp.
        207-223). Cape Town: Oxford University Press Southern Africa. `,
        download: `<a href="#" download="#" class="custom-btn btn">Download</a>`
    },
    {
        id: 12,
        date:`2014 12`,
        title: `Okeke, C. I. O.  `,
        body: ` The meaning and practice of educational theory. In CIO.
        Okeke, MM van Wyk & N. T. Phasha (Eds.) (July 2014). Schooling, society and
        inclusive education: An African perspective (pp. 1-16). Cape Town: Oxford University
        Press. `,
        download: `<a href="#" download="#" class="custom-btn btn">Download</a>`
    },
    {
        id: 13,
        date:`2013 13`,
        title: `Okeke, C. I. O. `,
        body: ` Modelling effective home – school partnership: Lesson from
        context specific background. In C. I. O. Okeke & C. B. S. Mndebele (Eds.). Education
        reforms in the SADC region: Challenges and responses in the 21st century.
        Rosemead, CA, USA: Scientific & Academic Publishers. ISBN: 978-1-938681-03-5 `,
        download: `<a href="#" download="#" class="custom-btn btn">Download</a>`
    },
    {
        id: 14,
        date:`2010c 14`,
        title: `Okeke, C. I. O. `,
        body: `  Africanisation and Cultural globalization: A convergence or
        subservience of culture? In N. T. Ekeanyanwu & C. I. O. Okeke. Indigenous societies and cultural Globalization in the 21st Century: Is the global village truly real? Germany:
        VDM Publishing House. ISBN-13: 978-363925760-1`,
        download: `<a href="#" download="#" class="custom-btn btn">Download</a>`
    },
    {
        id: 15,
        date:`2009 15`,
        title: `Wagner, C., & Okeke, C.I.O `,
        body: ` Quantitative or qualitative: Epistemological
        choices in research methodology curricula. In M. Garner, C. Wagner & B. B.
        Kawulich (Eds.) Teaching research methods in the Humanities and the Social
        Sciences. London: Ashgate. (ISBN 978-0-7546-7354-5) `,
        download: `<a href="#" download="#" class="custom-btn btn">Download</a>`
    }
]



const loadbook = () => {
    let bookContainer = document.querySelector('.bookEle');
    let displaybookData = ''
    book.map((bookData) => {
        const { date, title, body, download } = bookData;
        displaybookData += `
        <div class="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0 ">
                           
                      
        <div class="custom-block-wrap">
        <!-- <img src="./images/okeke gallery/libary.jpg" class="custom-block-image img-fluid" alt=""> -->

        <div class="custom-block">
            <div class="custom-block-body">
                <h5 class="mb-3">${date}</h5>
                <p> <strong>${title}</strong> ${body}</p>

                <div class="progress mt-4">
                    <div class="progress-bar w-100" role="progressbar" aria-valuenow="100"
                        aria-valuemin="0" aria-valuemax="100"></div>
                </div>

            </div>
            <a href="#">${download}</a>
            
        </div>
    </div>
    </div>
        `
        bookContainer.innerHTML = displaybookData;
    })
}
loadbook()