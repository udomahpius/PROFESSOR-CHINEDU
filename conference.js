// ALL JOURNAL PUBLICATIONS ARE MAPPED HERE IN JS FILE AND DISPLAY IN JOURNAL.HTML FILE

const conference = [
    {
        id: 1,
        date:`31st of
        October to 3rd November 2023 `,
        title: `Okeke, C.I.O.`,
        body: ` Professional development opportunities for early childhood education
        practitioners in disadvantaged communities. Paper presented at the SAERA
        Conference, the Premier Hotel Regent on the East London beachfront,   <a href="https://www.saera.co.za/upcoming-conference/" class="text-primary">upcoming-conference</a>`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
     {
        id: 2,
        date:`27 – 29 September 2023. `,
        title: `Okeke, C.I.O., Mudzielwana, P.N., & Mokhele-Makgalwa, M.M.`,
        body: `  Effective professional
        development for early years education practitioners in disadvantaged communities:
        Challenges and strategies. Paper presented at the Cape Town College Conference
        held by the Centre for Early Childhood Development (CECD) in partnership with the
        South African Research Association for Early Childhood Education (SARAECE) and
        the College of Cape Town, 
         <a href="http://www.qualityecdconference.co.za/" class="text-primary">qualityecdconference</a>`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 3,
        date:`16th to the 21st of
        September 2023. `,
        title: `Okeke, C.I.O., Mokhele-Makgalwa, M.M., Mudzielwana, P.N.`,
        body: `  Practitioners’
        demographic characteristics and implications on their interpretations of professional
        development programmes. Paper presented at the 12th International Multidisciplinary
        Conference at Liverpool Hope University, Liverpool, UK,   <a href="https://angel-network.net/GEN_Conference" class="text-primary">GEN_Conference</a>`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 4,
        date:`Jul 12, 2023
        – Jul 14, 2023. `,
        title: `Okeke, C., Ugwuanyi, C, Okeke, C., & Ndlovu, B.`,
        body: ` Practitioners’ perspectives on the
        challenges encountered in maintaining mobile early childhood care and education
        centres. Paper presented at the Thirtieth International Conference on Learning
        University of São Paulo - Auditório Nicolau Sevcenko, São Paulo, Brazil, <a href="https://thelearner.com/about/history/2023-conference" class="text-primary">conference</a>   `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 5,
        date:`3rd-5th July 2023 `,
        title: `Ugwuanyi, C.S., Okeke, C.C., & Okeke, C.I.`,
        body: ` Practitioners’ perspectives on
        the challenges encountered in maintaining mobile early childhood care and education
        centres. Paper presented at the EDULEARN23 – 15th International Conference on
        Education and New Learning Technologies  Palma, Mallorca,
        Spain.  <a href="https://iated.org/edulearn/" class="text-primary">edulearn</a> `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 6,
        date:`3rd-5th July 2023 `,
        title: `Okeke, C.I., Okeke, C.C., & Ugwuanyi, C.S.`,
        body: ` Perspectives of early childhood
        educators regarding parental involvement in mobile early childhood care and
        education activities. Paper presented at the EDULEARN23 – 15th International
        Conference on Education and New Learning Technologies , Palma,
        Mallorca, Spain.  <a href="https://iated.org/edulearn/" class="text-primary">edulearn</a>`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 7,
        date:`3rd-5th July 2023 `,
        title: `Okeke, C., & Akobi, T.`,
        body: `  Effect of collaborative learning instructional strategy
        on social skill development of primary school pupils. Paper presented at the
        EDULEARN23 – 15th International Conference on Education and New Learning
        Technologies  Palma, Mallorca, Spain.  <a href="https://iated.org/edulearn/" class="text-primary">edulearn</a>`,
        download: `<a href="./OKEKE PUBLICATIONS/EFFECT OF COLLABORATIVE LEARNING INSTRUCTIONAL STRATEGY ON SOCIAL SKILL DEVELOPMENT OF PRIMARY SCHOOL PUPILS.pdf" download="./OKEKE PUBLICATIONS/EFFECT OF COLLABORATIVE LEARNING INSTRUCTIONAL STRATEGY ON SOCIAL SKILL DEVELOPMENT OF PRIMARY SCHOOL PUPILS.pdf" class="custom-btn btn">Download</a>`
    },
    {
        id: 8,
        date:`3rd-5th
        July 2023 `,
        title: `Akobi, T., & Okeke, C.`,
        body: ` Effect of edutainment videos on cognitive and social
        skills development of preschool children. Paper presented at the EDULEARN23 –
        15th International Conference on Education and New Learning Technologies  Palma, Mallorca, Spain.  <a href="https://iated.org/edulearn/" class="text-primary">edulearn</a>`,
        download: `<a href="./OKEKE PUBLICATIONS/EFFECT OF EDUTAINMENT VIDEOS ON COGNITIVE AND SOCIAL SKILLS DEVELOPMENT OF PRESCHOOL CHILDREN.pdf" download="./OKEKE PUBLICATIONS/EFFECT OF EDUTAINMENT VIDEOS ON COGNITIVE AND SOCIAL SKILLS DEVELOPMENT OF PRESCHOOL CHILDREN.pdf" class="custom-btn btn">Download</a>`
    },
    {
        id:9,
        date:`March 6th-8th, 2023 `,
        title: `Ugwuanyi, C., & Okeke, C. `,
        body: ` Pupils’ autonomy, competence, and relatedness
        as determinants of online learning engagement during the COVID-19 pandemic.
        Paper presented at the INTED2022 Conference  Valencia,
        Spain.  <a href="https://10.21125/inted.2023" class="text-primary">Conference</a>`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 10,
        date:`March 6th-8th, 2023 `,
        title: `Okeke, C., & Ugwuanyi, C.`,
        body: `  Impact of primary school teachers’ demographics
        on their psychosocial work hazards: a cross-sectional survey of Nigerian teachers.
        Paper presented at the INTED2022 Conference  Valencia,
        Spain.  <a href="https://10.21125/inted.2023" class="text-primary">Conference</a>`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 11,
        date:`March 6th-8th, 2023 `,
        title: `Okeke, C., & Akobi, T.`,
        body: `  Effect of flipped classroom on cognitive and emotional
        skills development of primary school pupils. Paper presented at the INTED2022
        Conference  Valencia, Spain.  <a href="https://10.21125/inted.2023" class="text-primary">Conference</a>`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 12,
        date:`March 6th-8th, 2023 `,
        title: `Akobi, O., & Okeke, C. `,
        body: `  Effects of demographic characteristics on workstimulated stress among early childhood educators using structural equation
        modelling. Paper presented at the INTED2022 Conference 
        Valencia, Spain.  <a href="https://10.21125/inted.2023" class="text-primary">Conference</a>`,
        download: `<a href="./OKEKE PUBLICATIONS/EFFECTS OF DEMOGRAPHIC CHARACTERISTICS ON WORK STIMULATED STRESS AMONG EARLY CHILDHOOD EDUCATORS.pdf" download="./OKEKE PUBLICATIONS/EFFECTS OF DEMOGRAPHIC CHARACTERISTICS ON WORK STIMULATED STRESS AMONG EARLY CHILDHOOD EDUCATORS.pdf" class="custom-btn btn">Download</a>`
    },
    {
        id: 13,
        date:`26 – 28 October 2022 `,
        title: `Akobi, T. O., Aye E. N. & Okeke, C. I. O.`,
        body: `  Utilisation of Information and
        Communication Technology in Early Childhood Education (ECE) Centres:
        Implications for Optimising ECE in Covid-19 Era. SAERA Conference, 26th – 28th
        October 2022 hosted by the Faculty of Education, University of the Western Cape
        `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 14,
        date:`24-
        26th October 2022 `,
        title: `Ede, M.O. & Okeke, C.I. `,
        body: `  Covid-19 and retirement counselling: parents who
        retired early with little children’s perspective and implications for inclusive policies. A
        paper to be presented during the Global Education Network (GEN) Conference. Ba Isago University Botswana`,
        download: `<a href="./OKEKE PUBLICATIONS/COVID-19 AND RETIREMENT COUNSELLING_ PARENTS WHO RETIRED EARLY WITH LITTLE CHILDRENS PERSPECTIVE AND IMPLICATIONS.pdf" download="./OKEKE PUBLICATIONS/COVID-19 AND RETIREMENT COUNSELLING_ PARENTS WHO RETIRED EARLY WITH LITTLE CHILDRENS PERSPECTIVE AND IMPLICATIONS.pdf" class="custom-btn btn">Download</a>`
    },
    {
        id: 15,
        date:`26 – 28 October 2022 `,
        title: `M.O., Okeke, C.I. & Nwankwo, C.A.`,
        body: `  The clinical significance of cognitive
        behavioral therapy for depressed school children with anxiety disorder. A paper to be
        presented during the 9th Annual SAERA Conference hosted by the Faculty of
        Education, University of the Western Cape `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 16,
        date:`26 – 28 October 2022  `,
        title: `Opara, E., Omeje, J.C., Okeke, C. I. & Ede, M.O.`,
        body: ` Occupational guidance,
        entrepreneurship education as correlates of economic empowerment among rural
        women with children. A paper to be presented during the 9th Annual SAERA
        Conference hosted by the Faculty of Education, University of the Western Cape`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 17,
        date:`26 – 28 October 2022 `,
        title: `Ede, M.O., Opara, E., & Okeke, C. I. `,
        body: `  Exploring the occupational guidance,
        entrepreneurship education and economic empowerment among rural women with
        children. A paper to be presented during the South Africa International Conference
        on Education`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 18,
        date:`26 – 28 October 2022 `,
        title: `Ede, M.O. & Okeke, C.I.`,
        body: ` Stressors and coping strategies among female
        librarians with children below 10 years. A paper to be presented during the South
        Africa International Conference on Education `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 19,
        date:`18th – 19th November, 2021 `,
        title: `Ugwuanyi, C.S., Okeke, C.C., & Okeke, C.I.O. `,
        body: `  Influence of preschool
        practitioners’ demographic characteristics on their classroom discipline practices: A
        quantitative research approach. Paper presented virtually at the South African
        International Conference on Education, South
        Africa.`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 20,
        date:`18th – 19th November, 2021`,
        title: `Mhlanga, S., Okeke, C.I., & Edeh, M.O. `,
        body: `  Constraints inhibiting Zimbabwean
        parents’ active involvement in their children’s preschool education in the Bubi District.
        Paper presented virtually at the South African International Conference on Education
         South Africa.`,
        download: `<a href="./OKEKE PUBLICATIONS/Constraints Inhibiting Zimbabwean Parents Active Involvement.pdf" download="./OKEKE PUBLICATIONS/Constraints Inhibiting Zimbabwean Parents Active Involvement.pdf" class="custom-btn btn">Download</a>`
    },
    {
        id: 21,
        date:`18th – 19th
        November, 2021 `,
        title: `Gqoli, N., Okeke, C.I., & Ugwuanyi, C.S.`,
        body: ` Practitioner conceptions of
        mathematical knowledge in early childhood development. Paper presented virtually
        at the South African International Conference on Education, South Africa. `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 22,
        date:`18th – 19th November, 2021 `,
        title: `Ugwuanyi, C.S., Okeke, C.C., & Okeke, C.I.O.`,
        body: ` Effect of electronic books on
        children's achievement in basic science: A case of simple repeated measures. Paper
        presented virtually at the South African International Conference on Education  South Africa. `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 23,
        date:`18th – 19th November, 2021 `,
        title: `Thwala, S.K., Edeh, M.O., Okeke, C.I., & Dlamini, Z.C. `,
        body: ` The learning
        conditions of schoolchildren with albinism, effects, and school-based support
        strategies in Eswatini primary schools. Paper presented virtually at the South African
        International Conference on Education, South
        Africa. `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 24,
        date:`18th – 19th November, 2021`,
        title: `Okeke, C.I., & Adams, C.G.G.`,
        body: ` Fathers’ participation in the social
        development of their children under six: Challenges and strategic implications. Paper
        presented virtually at the South African International Conference on Education, South Africa. `,
        download: `<a href="./OKEKE PUBLICATIONS/fathers participation in the social development of their children.pdf" download="./OKEKE PUBLICATIONS/fathers participation in the social development of their children.pdf" class="custom-btn btn">Download</a>`
    },
    {
        id: 25,
        date:`18th – 20th October, 2021 `,
        title: `Edeh, M.O., Okeke, C.I., Mokhele-Makgalwa, M.L., & Okeke, C.`,
        body: ` Family Size
        and Psychosocial Behaviours of School Children in Nsukka Education Authority
        Enugu State in Nigeria. A paper presented at the Multi-Disciplinary International
        Conference at the Tsogo Sun Hotel, East London,
        South Africa. `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 26,
        date:`29 – 30 July 2021 `,
        title: `Baloyi-Mothibeli, S.L., Ugwuanyi, C.S., & Okeke, C.I.O. `,
        body: ` The value of play
        and mathematical play practices: early childhood care and education perspective. A
        paper presented at the Staff Conference, Faculty of Education, University of the Free
        State, Bloemfontein `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 27,
        date:`29 – 30 July
        2021 `,
        title: `Ugwuanyi, C.S., & Okeke, C.I.O. `,
        body: `  Exploring preschool practitioners’
        classroom disciplining strategies in post-corporal punishment era: implication for
        effective classroom communication. A paper presented at the Staff Conference,
        Faculty of Education, University of the Free State, Bloemfontein.`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 28,
        date:`29 – 30 July 2021 `,
        title: `Okeke, C.I.O., & Edeh, M.O. `,
        body: `  Rational motive behaviour intervention for
        visually impaired upper basic school children with negative self-belief/personal value
        system. A paper presented at the Staff Conference, Faculty of Education, University
        of the Free State, Bloemfontein.`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 29,
        date:`15th – 16th July 2021 `,
        title: `Okeke, C.I., Ugwuanyi, C.S. & Okeke, C.C. `,
        body: `  One continent, same curricula
        but differential fee structures and border constraints: Could these be impeding the
        dream for an African university? A paper presented at the Workshop Is there an
        African University? Organized by Forum International Wissenschaft Bonn, Germany.`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 30,
        date:`13-14th July 2021 `,
        title: `Ugwuanyi, C.S., Okeke, C.I.O., & Okeke, C.C. `,
        body: ` Assessment of preschool
        practitioners’ classroom disciplining strategies: Implication for research. A paper
        presented at the 4th National ECD Conference held  by the South
        African Research Association for Early Childhood Education (SARAECE). In
        partnership with the Centre for Early Childhood Development. The conference was
        hosted by the Cape Peninsula University of Technology, South Africa. `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 31,
        date:`Jul 7,
        2021 – Jul 9, 2021 `,
        title: `Ugwuanyi, C.S., Okeke, C.C. & Okeke, C.I.O. `,
        body: ` Perceptions of University
        Students on the Challenges Faced by Children Whose Fathers are Unable to
        Participate in their Early Education. A paper presented at the Twenty-eighth Virtual
        International Conference on Learning, Jagiellonian University, Kraków, Poland. `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 32,
        date:`5th-
        6th July 2021 `,
        title: `Ugwuanyi, C.S. & Okeke, C.I. `,
        body: ` Determinants of preschool teachers’
        competence in the use of online teaching space during and after the Covid-19 pandemic. A paper presented at the EDULEARN21 Virtual Conference. `,
        download: `<a href="./OKEKE PUBLICATIONS/DETERMINANTS OF PRESCHOOL TEACHERS COMPETENCE IN THE USE OF ONLINE TEACHING SPACE DURING AND AFTER THE COVID-19 PANDEMIC.pdf" download="./OKEKE PUBLICATIONS/DETERMINANTS OF PRESCHOOL TEACHERS COMPETENCE IN THE USE OF ONLINE TEACHING SPACE DURING AND AFTER THE COVID-19 PANDEMIC.pdf" class="custom-btn btn">Download</a>`
    },
    {
        id: 33,
        date:`5th-
        6th July 2021 `,
        title: `Ugwuanyi, C.S. & Okeke, C.I.`,
        body: ` Enhancing primary school children’s
        achievement in basic science using flipped classroom: A Case of Simple Repeated
        Measures. A paper presented at the EDULEARN21 Virtual Conference. `,
        download: `<a href="./OKEKE PUBLICATIONS/ENHANCING PRIMARY SCHOOL CHILDRENS ACHIEVEMENT IN BASIC SCIENCE USING FLIPPED CLASSROOM.pdf" download="./OKEKE PUBLICATIONS/ENHANCING PRIMARY SCHOOL CHILDRENS ACHIEVEMENT IN BASIC SCIENCE USING FLIPPED CLASSROOM.pdf" class="custom-btn btn">Download</a>`
    },
    {
        id: 34,
        date:`20th – 21st October 2020 `,
        title: ` Ugwuanyi, C.S., Okeke, C.I.O., & Ageda, T.A `,
        body: ` Motivation and self-efficacy as
        correlates of secondary school physics students’ academic achievement. A paper
        presented at the South African International Conference on Education to be held at Manhattan Hotel Pretoria, South Africa.`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 35,
        date:`20th – 21st October 2020 `,
        title: `Okeke, C.I.O, Ugwuanyi, C.S. & Mufutau, M.A. `,
        body: `  Teachers' perceptions of
        engaging fathers in the early education of their children: A quantitative approach. A
        paper presented at the South African International Conference on Education to be
        held  at Manhattan Hotel Pretoria, South Africa.`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 36,
        date:`2020 `,
        title: ` Ugwuanyi, C.S., Okeke, C.C., & Okeke, C.I.O.`,
        body: ` Intervention strategies that
        can improve South African fathers’ engagement in the early education of their
        children: A quantitative approach. A paper presented at the 19th International Virtual
        Conference of Global Education Network to held in the University of Lome, Togo
        from Monday 23rd –Friday 27th November, 2020.`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 37,
        date:`2020 `,
        title: `Ugwuanyi, C.S., & Okeke, C.I.O. `,
        body: ` Improving pupils’ achievement in Basic
        science through the use of multimedia instructional technology. A paper presented at
        the Twenty-seventh International Conference on Learning held in Universitat de
        València - Facultat de Magisteri València, Spain from July 13, 2020 – July 15, 2020. `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 38,
        date:`2019 `,
        title: `Okeke, C.I.O., & Nyanhoto, E. `,
        body: ` The recruitment and retention of male
        educators in preschools in South Africa. Presented at the Twenty-sixth International
        Conference on Learning held at Queen's University Belfast, Belfast, UK from 24 to 26
        July 2019 `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 39,
        date:`2018 `,
        title: `Thwala, S.K., Okeke, C.I.O., & Dludlu, I.N. `,
        body: `  Challenges facing parents of
        children with disabilities in Swaziland: A phenomenological approach. Presented at
        the Association of Educational Development. In Africa (AEDA) NPC4th Annual
        Conference, held 4 - 6 April 2018 at the Atlantic Imbizo Conference & Function
        Studio, Waterfront, Cape Town.`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 40,
        date:`2017 `,
        title: `Salami, I.A., Olumide, T.T., Okeke, C.I.O. `,
        body: ` Effects of indigenous-based
        stimulation activities on physical skills and language acquisition among four-year-old
        children in Ondo Town, Nigeria. Paper presented at the International Conference on
        Teaching Practice in Education held at the Warmbaths Forever Resorts, Bela, Bela,
        Limpopo, South Africa, from 14 – 15, March, 2017. `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 41,
        date:`2016 `,
        title: `Okeke, C.I.O. `,
        body: ` Early education of children under six years: Might South
        African men be in crises of participation and implications for intervention? Paper
        presented at the Oxford Education Research Conference held 7 - 9 December, 2016
        at St Cross College, Oxford, United Kingdom. `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 42,
        date:`2016 `,
        title: `Mtyuda, P.N.P., & Okeke, C.I.O. `,
        body: ` Teacher job dissatisfaction and social
        transformation. Paper presented at the UFH Centenary Conference held 3-6 July,
        2016 at the University Sports Complex, University of Fort Hare, Alice, South Africa. `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 43,
        date:`2016 `,
        title: `Mufutau, M.A., & Okeke, C.I.O. `,
        body: ` Fathers’ views on men’s participation in early
        education of children and implications for social transformative programmes in
        schools. Paper presented at the UFH Centenary Conference held 3-6 July, 2016 at
        the University Sports Complex, University of Fort Hare, Alice, South Africa. `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 44,
        date:`2016 `,
        title: `Mncanca, M., & Okeke, C.I.O. `,
        body: `  Harnessing new fatherhood initiative in ECD
        contexts: A necessary family-school synergy for achieving social transformation in
        South Africa? Paper to be presented at the UFH Centenary Conference held 3-6 July,
        2016 at the University Sports Complex, University of Fort Hare, Alice, South Africa.`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 45,
        date:`2016 `,
        title: `Mathwasa, J., & Okeke, C.I.O. `,
        body: `  Mothers’ perceptions on fathers’ participation
        in the early childhood education of their children. Paper presented at the UFH
        Centenary Conference to be held 3-6 July, 2016 at the University Sports Complex,
        University of Fort Hare, Alice, South Africa.`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 46,
        date:`2015 `,
        title: `Okeke, C.I.O. `,
        body: ` An initial analysis of stress and coping strategies of pre-school
        educators. Paper presented at the International Global Education Diplomacy (IGED
        2015) held 5 – 8 March, 2015 at the DoubleTree Hotel at Hilton, Crystal City,
        Arlington, Washington, DC. `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 47,
        date:`2015 `,
        title: `Mathwasa, J., & Okeke, C.I.O. `,
        body: `  Barriers educators face in involving fathers in
        the education of their children in the foundation phase. Paper presented 21 – 23
        September at the South Africa International Conference on Education (SAICE 2015)
        at the Manhattan Hotel Pretoria, South Africa.`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 48,
        date:`2015 `,
        title: `Mtyuda, P.N.P., & Okeke, C.I.O. `,
        body: `  Perspectives of teachers on job
        dissatisfaction in schools in one rural Education District of Eastern Cape. Paper
        presented 21 – 23 September at the South Africa International Conference on
        Education (SAICE 2015) at the Manhattan Hotel Pretoria, South Africa.`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 49,
        date:`2015 `,
        title: `Mncanca, M., Fletcher, R., & Okeke, C.I.O.  `,
        body: ` Black fathers and their
        participation in early childhood development in South Africa: What do we know?
        Paper presented 21 – 23 September at the South Africa International Conference on
        Education (SAICE 2015) at the Manhattan Hotel Pretoria, South Africa. `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 50,
        date:`2015 `,
        title: `Shumba, J., Rembe, S., Maphosa, C., Sotuku, N., Adu, .EO., Drake, M.L., Duku, N.,
        Okeke, C.I.O. `,
        body: ` Teacher work related stress in early childhood education:
        Coping strategies. Paper presented 21 – 23 September at the South Africa
        International Conference on Education (SAICE 2015) at the Manhattan Hotel Pretoria,
        South Africa. `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 51,
        date:`2014 `,
        title: `Okeke, C.I.O., & Drake, M.L. `,
        body: ` Protecting children’s rights in early childhood
        research in South Africa: What ethical measures are in place? Paper presented 21 –23 September at the South Africa International Conference on Education (SAICE
            2014) at the Manhattan Hotel Pretoria, South Africa `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 52,
        date:`2014 `,
        title: `Thwala, S.K., Okeke, C.I.O., & Mabuza, N. `,
        body: `  Single parenting and its effects on
        the psychosocial development of children in Swaziland. Paper presented 21 – 23
        September at the South Africa International Conference on Education (SAICE 2014)
        at the Manhattan Hotel Pretoria, South Africa`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 53,
        date:`2014 `,
        title: `Okeke, C.I.O., Rembe, S., Maphosa, C., & Shumba, J. `,
        body: `  Demographic
        variables, work-stimulated stressors and coping strategies of pre-school early
        educators: A discussion paper. Paper presented at the 21 – 23 September at the
        South Africa International Conference on Education (SAICE 2014) at the Manhattan
        Hotel Pretoria, South Africa`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 54,
        date:`2014 `,
        title: `Okeke, C.I.O., Adu, E.O., Duku, N., & Drake, M.L. `,
        body: `  Correlating demographic
        variables with occupational stress and coping strategies of pre-school educators: A
        literature review. Paper presented at the 2nd South African Education Research
        Association Conference to be held at Elangeni hotel, Durban, 13-15 August, 2014.`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 55,
        date:`2014 `,
        title: `Okeke, C.I.O., & Mpahla, N.E. `,
        body: ` The rurality of continuing professional
        development of teachers: An empirical review. Paper presented 10 – 12 August,
        2014 at the SACHES Annual Conference on Education and Development within a
        Neo-Liberal Economic Climate held at the Blue Waters Hotel, Durban, South Africa
        Blue Waters Hotel, Durban, South Africa `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 56,
        date:`2014 `,
        title: `Okeke, C.I.O. `,
        body: `  Research agenda of the Faculty of Education, University of
        Fort Hare Research Niche on Early Childhood Development (ECD). Paper presented
        during the 29th Annual Learning Differences Conference visit from 13 – 19th March,
        2014, Harvard, Boston, Massachusetts, USA`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 57,
        date:`2012 `,
        title: `Okeke, C.I.O. `,
        body: ` Mirroring the teacher: What does the minimum requirement for
        teacher education qualifications say about character education? Paper presented at the Annual National Conference on Teacher Education 17 – 19 September, 2012
        held at the Faculty of Education, University of Pretoria `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 58,
        date:`2012 `,
        title: `Okeke, C.I.O. `,
        body: ` Learning from ‘good’ practice: What could African [universities]
        possibly learn from the Bologna Process and European students’ mobility? Paper
        presented at the 16th Annual International Education Association of South Africa
        [IEASA] Conference 29th August – 1st September, 2012 at the Southern Sun, Cape
        Town. `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 59,
        date:`2011 `,
        title: `Okeke, C.I.O. `,
        body: ` Effective involvement of parents in the school and education of
        children: Strategies for success? Paper presented at the 19th Annual International
        Conference on Parent Education and Parenting Organiser 10th – 11th February,
        2011 at the University of North Texas, Denton, TX, USA. `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 60,
        date:`2010 `,
        title: `Okeke, C.I.O. `,
        body: `  Statistical Pitfalls: Problems with the statistical representation
        of fieldwork data from social research. Paper presented at the 17th Annual South
        African Association for Institutional Research (SAAIR) International Forum held at the
        University of Johannesburg, South Africa 21 – 23 September, 2010.`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 61,
        date:`2010 `,
        title: `Okeke, C.I.O. `,
        body: ` African Higher Education Area (AHEA): Might this bring about
        the African fee status for the African citizens? Paper presented at the 14TH Annual
        IEASA Conference held 28 – 31 August, 2010 at the University of the Witwatersrand,
        Johannesburg, South Africa. `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 62,
        date:`2009 `,
        title: `Okeke, C.I.O. `,
        body: `  A neglected impediment to true Africanisation of African higher
        education curricula: Same agenda, differential fee regimes. Paper presented at the
        Third IAACS World Curriculum Studies Conference held 7 – 10 September, 2009 at
        The NH Lord Charles Hotel, Somerset-West, Cape Town, South Africa.`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 63,
        date:`2009 `,
        title: `Okeke, C.I.O. `,
        body: ` Guilty or not guilty? How Nigerian homes impede the
        aspirations of Nigerian girls for higher education. Paper presented at the Sixteenth
        International Conference on Learning held 1 – 4 July 2009 at the University of
        Barcelona, Spain. `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 64,
        date:`2009 `,
        title: `Okeke, C.I.O. `,
        body: ` An encounter with the supervisor’s and institutional discourses:
        A personal reflective account. Paper presented at the Postgraduate Supervision:
        Research and Practice Conference held 27 – 30 April, 2009 at the University of
        Stellenbosch. `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 65,
        date:`2008 `,
        title: `Okeke, C.I.O. `,
        body: `  A framework for curriculum policy for social cohesion in Africa.
        Paper presented at the Second African Conference on Curriculum Development in
        Higher Education held 16 – 18 September 2008 at the Willow Park Conference
        Centre and Resort, Kempton Park.`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 66,
        date:`2008 `,
        title: `Okeke, C.I.O. `,
        body: `  Issues pertaining to the theoretical framework of a study:
        Reflections from two African countries. Paper presented at the Critical Methods
        Conference held 6 – 9 July 2008 at Rhodes University, Grahamstown, South Africa.`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 67,
        date:`2023 `,
        title: ` Ugwuanyi, C.S., Okeke, C.C., & Okeke, C.I. `,
        body: ` Practitioners’ perspectives on the challenges encountered in maintaining mobile early childhood
        care and education centres. Proceedings of EDULEARN23 Conference, 3rd-5th July
        2023, Palma, Mallorca, Spain, 0142-0146. ISBN: 978-84-09-52151-7.    <a href="https://iated.org/edulearn/" class="text-primary">Online</a>  `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 68,
        date:`2023 `,
        title: `Okeke, C.I., Okeke, C.C., & Ugwuanyi, C.S.  `,
        body: ` Perspectives of early
        childhood educators regarding parental involvement in mobile early childhood care
        and education activities. Proceedings of EDULEARN23 Conference, 3rd-5th July
        2023, Palma, Mallorca, Spain, 0147-0152. ISBN: 978-84-09-52151-7.    <a href="https://iated.org/edulearn/" class="text-primary">Online</a>  `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 69,
        date:`2023 `,
        title: `Okeke, C., & Akobi, T. `,
        body: ` Effect of collaborative learning instructional
        strategy on social skill development of primary school pupils. Proceedings of
        EDULEARN23 Conference, 3rd-5th July 2023, Palma, Mallorca, Spain, 0419-0425.
        ISBN: 978-84-09-52151-7.    <a href="https://iated.org/edulearn/" class="text-primary">Online</a>  `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 70,
        date:`2023 `,
        title: ` Akobi, T., & Okeke, C.  `,
        body: `Effect of edutainment videos on cognitive and
        social skills development of preschool children. Proceedings of EDULEARN23 Conference, 3rd-5th July 2023, Palma, Mallorca, Spain, 0426-0435. ISBN: 978-84- 09-52151-7.   <a href="https://iated.org/edulearn/ " class="text-primary">Online</a>  `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 71,
        date:`2023 `,
        title: `Ugwuanyi, C., & Okeke, C.  `,
        body: ` Pupils’ autonomy, competence, and
        relatedness as determinants of online learning engagement during the COVID-19
        pandemic. Proceedings of INTED2022 Conference March 6th-8th, 2023, Valencia, Spain, pp. 0056-0064. ISBN: 978-84-09-49026-4.    <a href="https://10.21125/inted.2023." class="text-primary">Online</a>  `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 72,
        date:`2023 `,
        title: `Okeke, C., & Ugwuanyi, C.  `,
        body: ` Impact of primary school teachers’ demographics on their psychosocial work hazards: a cross-sectional survey of
        Nigerian teachers. Proceedings of INTED2022 Conference March 6th-8th, 2023, Valencia, Spain, pp. 8631-8638. ISBN: 978-84-09-49026-4.    <a href="https://10.21125/inted.2023" class="text-primary">Online</a>  `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 73,
        date:`2023 `,
        title: `Okeke, C., & Akobi, T.  `,
        body: ` Effect of flipped classroom on cognitive and
        emotional skills development of primary school pupils. Proceedings of INTED2022
        Conference March 6th-8th, 2023, Valencia, Spain, pp. 1217-1225. ISBN: 978-84-09- 49026-4.    <a href="https://10.21125/inted.2023" class="text-primary">Online</a>  `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 74,
        date:`2023 `,
        title: `Akobi, O., & Okeke, C.  `,
        body: ` Effects of demographic characteristics on
        work-stimulated stress among early childhood educators using structural equation
        modelling. Proceedings of INTED2022 Conference March 6th-8th, 2023, Valencia, Spain, pp. 1226-1233. ISBN: 978-84-09-49026-4.    <a href="https://10.21125/inted.2023" class="text-primary">Online</a>  `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 75,
        date:`2022 `,
        title: `Ede, M.O. & Okeke, C.I.  `,
        body: ` Covid-19 and retirement counselling: parents
        who retired early with little children’s perspective and implications for inclusive
        policies. Proceedings of Global Education Network (GEN) Conference 24-26
        th
        October 2022. Ba Isago University Botswana, 270-277     `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 76,
        date:`2022 `,
        title: `Edeh, M.O., & Okeke, C.I.O.  `,
        body: ` COVID-19 and retirement counselling:
        Parents who retired early with little children‘s perspective and implications for
        inclusive policies. Proceedings of the Global Education Network (270-277). 24 – 26
        October 2022. BA Isago University Botswana, ISBN: 978-978-59206-6-6 `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 77,
        date:`2022 `,
        title: ` Ugwuanyi, C.S., & Okeke, C.I.  `,
        body: `   Assessment of the extent of preschool
        teachers’ utilisation of information and communication technology in teaching. Proceedings of EDULEARN22 Conference, 4th-6th July 2022, pp. 0086-0091. Palma, Mallorca, Spain. ISBN: 978-84-09-42484-9. `,
        download: `<a href="./OKEKE PUBLICATIONS/ASSESSMENT OF THE EXTENT OF PRESCHOOL TEACHERS UTILISATION OF INFORMATION AND COMMUNICATION TECHNOLOGY IN TEACHING.pdf" download="./OKEKE PUBLICATIONS/ASSESSMENT OF THE EXTENT OF PRESCHOOL TEACHERS UTILISATION OF INFORMATION AND COMMUNICATION TECHNOLOGY IN TEACHING.pdf" class="custom-btn btn">Download</a>`
    },
    {
        id: 78,
        date:`2022`,
        title: `Ede, M.O., Okeke, C., & Okeke, C.  `,
        body: ` Examination of the prevalence and
        predictors of videogame addiction among school children. Proceedings of
        EDULEARN22 Conference, 4th-6th July 2022, pp. 2465-2471. Palma, Mallorca, Spain. ISBN: 978-84-09-42484-9. `,
        download: `<a href="./OKEKE PUBLICATIONS/EXAMINATION OF THE PREVALENCE AND PREDICTORS OF VIDEOGAME ADDICTION AMONG SCHOOL CHILDREN.pdf" download="./OKEKE PUBLICATIONS/EXAMINATION OF THE PREVALENCE AND PREDICTORS OF VIDEOGAME ADDICTION AMONG SCHOOL CHILDREN.pdf" class="custom-btn btn">Download</a>`
    },
    {
        id: 79,
        date:`2022 `,
        title: `Okeke, C., Okeke, C., & Edeh, M.  `,
        body: ` Working status, teaching
        experiences and workplace deviant behaviors of primary school teachers in Enugu
        State Nigeria. Proceedings of EDULEARN22 Conference, 4th-6th July 2022, pp. 2261-2266. Palma, Mallorca, Spain. ISBN: 978-84-09-42484-9.`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 80,
        date:`2022 `,
        title: `Ugwuanyi, C.S., & Okeke, C.  `,
        body: ` Improving grade three learners’ achievement in basic science: Impact of electronic library resources. Proceedings of
        INTED2022 Conference 7th-8th March 2022, pp. 1424 – 1430. ISBN: 978-84-09- 37758-9.`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 81,
        date:`2022 `,
        title: `Ugwuanyi, C.S., & Okeke, C.  `,
        body: `  Assessment of level of information and
        communication technology competency of preschool teachers for the adoption of
        online learning. Proceedings of INTED2022 Conference 7th-8th March 2022, pp. 1431 – 1437. ISBN: 978-84-09-31267-2.`,
        download: `<a href="./OKEKE PUBLICATIONS/ASSESSMENT OF LEVEL OF INFORMATION AND COMMUNICATION TECHNOLOGY COMPETENCY OF PRESCHOOL.pdf" download="./OKEKE PUBLICATIONS/ASSESSMENT OF LEVEL OF INFORMATION AND COMMUNICATION TECHNOLOGY COMPETENCY OF PRESCHOOL.pdf" class="custom-btn btn">Download</a>`
    },
    {
        id: 82,
        date:`2021 `,
        title: `Thwala, S.K., Ede, M.O., Okeke, C.I., & Dlamini, Z.  `,
        body: ` Effects of school- based support strategies on learning conditions of school children with albinism in
        eSwatini primary schools. Proceedings of South African International Conference on
        Education (SAICEd), 386-397. `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 83,
        date:`2021 `,
        title: `Ugwuanyi, C.S, Okeke, C.C., & Okeke, C.I.   `,
        body: ` Influence of preschool
        practitioners’ demographic characteristics on their classroom discipline practices: A
        quantitative research approach. Proceedings of South African International
        Conference on Education (SAICEd), 65-72. `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 84,
        date:`2021 `,
        title: `Okeke, C.I., & Adams, C.G.G.  `,
        body: ` Fathers’ participation in the social
        development of their children under six years: Challenges and strategic implications. Proceedings of South African International Conference on Education (SAICEd), 199- 210. `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 85,
        date:`2021 `,
        title: `Ugwuanyi, C.S, Okeke, C.C., & Okeke, C.I.  `,
        body: ` Effect of electronic books
        on children's achievement in basic science: a case of simple repeated measures. Proceedings of South African International Conference on Education (SAICEd), 223- 230.`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 86,
        date:`2021 `,
        title: `Mhlanga, S., Okeke, C.I., & Edeh, M.O.   `,
        body: ` Constraints inhibiting
        Zimbabwean parents’ active involvement in their children’s preschool education in
        the Bubi district. Proceedings of South African International Conference on Education
        (SAICEd), 231-242. `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 87,
        date:`2021 `,
        title: `Gqoli, N., Okeke, C.I.O., & Ugwuanyi, C.S.  `,
        body: `  Practitioner conceptions of
        mathematical knowledge in early childhood development in rural district of the Eastern Cape Province, South Africa. Proceedings of South African International
        Conference on Education (SAICEd), 277-288. `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 88,
        date:`2021 `,
        title: `Ede, M.O., Okeke, C.I., Mokhele-Makgalwa, M.L., & Okeke, C.  `,
        body: ` Family
        Size and psychosocial behaviours of school children in Nsukka Education Authority
        Enugu State in Nigeria (302-318). African Perspectives on Research, Innovation and
        Development in the COVID-19 era. Proceedings of the Global Education Network, Nigeria. ISBN: 978-978-58895-3-6.    <a href="https://globaledunet.org/wp- content/uploads/2021/11/GEN-FINAL-1.pdf" class="text-primary">Online</a>  `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 81,
        date:`2021 `,
        title: `Ugwuanyi, C.S., & Okeke, C.I.  `,
        body: ` The efficacy of music-based cognitive
        behaviour therapy in the reduction of test anxiety among primary school pupils in
        basic science (113-122). Proceedings of Science Teachers Association of Nigeria.
        ISBN: 978-978-52160-5-9.`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 82,
        date:`2021 `,
        title: `Ugwuanyi, C.S., & Okeke, C.I.  `,
        body: ` Determinants of preschool teachers’ competence in the use of online teaching space during and after the Covid-19
        pandemic. Proceedings of EDULEARN21 Conference, 9999-10004. ISBN: 978-84- 09-31267-2  `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 83,
        date:`2021 83`,
        title: ` Ugwuanyi, C.S., & Okeke, C.I. `,
        body: `  Enhancing primary school children’s
        achievement in basic science using flipped classroom: A Case of Simple Repeated
        Measures. Proceedings of EDULEARN21 Conference, 10005-10010. ISBN: 978-84- 09-31267-2 `,
        download: `<a href="#" download="#" class="custom-btn btn">Download</a>`
    },
    {
        id: 84,
        date:`2020 `,
        title: `Ugwuanyi, C.S., Okeke, C.C. & Okeke, C.I.O.  `,
        body: ` Intervention strategies
        that can improve South African fathers’ engagement in the early education of their
        children: A quantitative approach. Proceedings of the Multi-Disciplinary International
        Conference of Global Education Network in Collaboration with the University of Lome, Togo, 175-184 `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 85,
        date:`2020 `,
        title: `Ugwuanyi, C.S., Okeke, C.I.O & Ageda, T.A.  `,
        body: ` Motivation and self- efficacy as correlates of secondary school physics students’ academic achievement
        in Benue State, Nigeria. Proceedings of South African International Conference on
        Education (SAICEd), 29-36. `,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 86,
        date:`2020 `,
        title: `Okeke, C.I.O., Ugwuanyi, C.S., & Mufutau, M.A.  `,
        body: `  Teachers' perceptions about engaging fathers in the early education of their children: A
        quantitative research approach. Proceedings of South African International
        Conference on Education (SAICEd), 130-138.`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },


]



const loadconference = () => {
    let conferenceContainer = document.querySelector('.conferenceEle');
    let displayconferenceData = ''
    conference.map((conferenceData) => {
        const { date, title, body, download } = conferenceData;
        displayconferenceData += `
        <div class="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0 conference-cover">
                           
                      
        <div class="custom-block-wrap">
        <!-- <img src="./images/okeke gallery/libary.jpg" class="custom-block-image img-fluid" alt=""> -->

        <div class="custom-block">
            <div class="custom-block-body">
                <h5 class="mb-3">${date}</h5>
                <p  class="title"> <strong>${title}</strong> ${body}</p>

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
        conferenceContainer.innerHTML = displayconferenceData;
    })
}
loadconference()


// search bar
let searchconference =()=>{
    let conferenceInput = document.getElementById('conferenceInput');

    
    conferenceInput.addEventListener('keyup', () =>{
        let filterKey = conferenceInput.value.toLowerCase();
        let conferenceData = document.querySelector('.conference-container')
        let conferenceContainer = conferenceData.querySelectorAll(".conference-cover");
        let falseconference = false
        conferenceContainer.forEach((removeconference) => {
            let dataTitleConference = removeconference.querySelector(".title")
           if(dataTitleConference.innerHTML.toLowerCase().indexOf(filterKey) < 0){
               removeconference.style.display = "none"
               falseconference = true
    
           }
           else{
               removeconference.style.display = "initial"
               falseconference = false
    
           }
           
       })
    
    })
    
}
searchconference()

