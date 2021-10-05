import moment from 'moment-timezone'
import { getDateFromTimestamp } from '@/store/utils'
const eventData = {
    namespaced: true,
    state: {
        liveTransmissions: [
            // start i end - uzywane do odpalania live'ow, startDisplay i endDisplay do wyswietlania w kalendarzu

            // test
            {
                title: `
                    <div class="mb-1">Demonstracyjna transmisja, która jest zawsze aktywna.</div>
                    <div>Demo transmission, which is always live.</div>
                `,
                recipient: `
                    <div>Lorem ipsum dolor</div>
                `,
                desc1: `
                    <p>Integer in facilisis metus. Cras tempor sem a orci consequat, vitae finibus est suscipit. Praesent sollicitudin vitae ligula convallis auctor.</p>
                `,
                desc2: `
                    <div>Prezentuje: Lorem Ipsum</div>
                    <div>Sesja prowadzona w języku polskim</div>
                `,
                slug: 'live-demo',
                link: 'CC9IonbTeVE',
                _id: "live-demo",
                start: '1629118800000', // always active
                startDisplay: '1630558800000',
                end: '1893452400000', // always active
                endDisplay: '1620676800000',
                active: null,
            },
            {
                title: `
                    <div class="mb-1">Demonstracyjne warsztaty, które są zawsze aktywne.</div>
                    <div>Demo workshops, which are always live.</div>
                `,
                recipient: `
                    <div>Praesent sollicitudin vitae ligula</div>
                `,
                desc1: `
                <p>Integer in facilisis metus. Cras tempor sem a orci consequat, vitae finibus est suscipit. Praesent sollicitudin vitae ligula convallis auctor.</p>
                `,
                desc2: `
                    <div>Prezentuje: Facilisis Metus</div>
                    <div>Sesja prowadzona w języku polskim</div>
                `,
                slug: 'workshops-demo',
                link: 'http://www.thereisnothinghere.com/',
                _id: "workshops-demo",
                start: '1629118800000', // always active
                startDisplay: '1630558800000',
                end: '1893452400000', // always active
                endDisplay: '1620676800000',
                active: null,
                workshops: true
            },

            // 02.09

            // Sadzimy marchewkę czyli co motywuje nastolatka do nauki angielskiego.
            {
                title: `
                    <div class="mb-1">Sadzimy marchewkę czyli co motywuje nastolatka do nauki angielskiego.</div>
                    <div>How to grow a carrot? What motivates teenagers to learn English.</div>
                `,
                recipient: `
                    <div>Sesja dla rodziców</div>
                `,
                desc1: `
                    <p>Jak wyznaczać cele nauki, aby osiągnąć sukces? Czy dobra zabawa jest ważniejsza niż poważna dyskusja? Jak kontakty z rówieśnikami z innych krajów wspierają chęć do nauki języka? Przyłącz się do sesji, aby dowiedzieć się co motywuje nastolatka do nauki języka angielskiego.</p>
                `,
                desc2: `
                    <div>Prezentuje: Agnieszka Lewandowicz</div>
                    <div>Sesja prowadzona w języku polskim</div>
                `,
                slug: 'sadzimy-marchewke',
                link: 'tgL_9UBwv6I',
                _id: "sadzimy-marchewke",
                start: '1630595700000', // 17:15, 02.09
                startDisplay: '1630596600000', // 17:30
                end: '1630600200000', // 18:30, 02.09
                endDisplay: '1630599300000', //18:15
                active: null,
            },

            // Ucz się angielskiego tak, jak chcesz.
            {
                title: `
                    <div class="mb-1">Ucz się angielskiego tak, jak chcesz.</div>
                    <div>Learning English the way you like.</div>
                `,
                recipient: `
                    <div>Sesja dla dorosłych</div>
                `,
                desc1: `
                    <p>Jaki jest najlepszy sposób na naukę mówienia?  Co doda nam skrzydeł w swobodnym wyrażaniu myśli? Na tej sesji poznasz kilka sprawdzonych sposobów na doładowanie umiejętności mówienia. Dołącz się, aby pobrać sporą dawkę języka!</p>
                `,
                desc2: `
                    <div>Prezentuje: Andy Wright</div>
                    <div>Sesja prowadzona w języku angielskim</div>
                `,
                slug: 'ucz-sie-angielskiego',
                link: 'VzWl7njPxK4',
                _id: "ucz-sie-angielskiego",
                start: '1630599300000', // 18:15, 02.09
                startDisplay: '1630600200000', // 18:30
                end: '1630603800000', // 19:30, 02.09
                endDisplay: '1630602900000', // 19:15
                active: null,
            },

            // Więcej niż język angielski. Umiejętności potrzebne w życiu.
            {
                title: `
                    <div class="mb-1">Więcej niż język angielski. Umiejętności potrzebne w życiu.</div>
                    <div>More than just learning English. Life skills you need.</div>
                `,
                recipient: `
                    <div>Sesja dla młodzieży</div>
                `,
                desc1: `
                    <p>Na naszych kursach dla młodzieży nie tylko wesprzemy Cię w rozwoju językowym, ale też pomożemy Ci nabyć umiejętności niezbędne w dzisiejszym świecie. Dowiedz się, jakie umiejętności pomogą Ci osiągnąć sukces. Pamiętaj, Twoja przyszłość zaczyna się dzisiaj!</p>
                `,
                desc2: `
                    <div>Prezentuje: Anthony Smyth</div>
                    <div>Sesja prowadzona w języku angielskim</div>
                `,
                slug: 'wiecej-niz-jezyk-angielski',
                link: 'ApAjwRo58no',
                _id: "wiecej-niz-jezyk-angielski",
                start: '1630602900000', // 19:15, 02.09
                startDisplay: '1630603800000', // 19:30
                end: '1630607400000', // 20:30, 02.09
                endDisplay: '1630606500000', // 20:15
                active: null,
            },

            // 03.09

            // Egzaminy Cambridge dla dzieci (YLE) – to bułka z masłem
            {
                title: `
                    <div class="mb-1">Egzaminy Cambridge dla dzieci (YLE) – to bułka z masłem</div>
                    <div>YLE – it’s a piece of cake!</div>
                `,
                recipient: `
                    <div>Sesja dla rodziców</div>
                `,
                desc1: `
                    <p>Zadbaj o dobry start w przyszłość swojego dziecka i motywuj je do nauki poprzez zabawę za pomocą testów YLE, które efektywnie sprawdzają umiejętności językowe dziecka. Jeśli chcesz dowiedzieć się więcej o YLE, dołącz do webinarium.</p>
                `,
                desc2: `
                    <div>Prezentuje: Barbara Szybowska</div>
                    <div>Sesja prowadzona w języku polskim</div>
                `,
                slug: 'yle',
                link: 'QyFYGt4tqec',
                _id: "yle",
                start: '1630682100000', // 17:15, 03.09
                startDisplay: '1630683000000', // 17:30
                end: '1630686600000', // 18:30, 03.09
                endDisplay: '1630685700000', // 18:15
                active: null,
            },

            // Masz to na końcu języka? Nabierz pewności siebie w mówieniu.
            {
                title: `
                    <div class="mb-1">Masz to na końcu języka? Nabierz pewności siebie w mówieniu.</div>
                    <div>Can you say this in English? Practise your speaking skills.</div>
                `,
                recipient: `
                    <div>Sesja dla młodzieży 15-17 lat (poziom B2 i wyższy)</div>
                `,
                desc1: `
                    <p>Jaki jest najlepszy sposób na naukę mówienia?  Co doda nam skrzydeł w swobodnym wyrażaniu myśli? Na tej sesji poznasz kilka sprawdzonych sposobów na doładowanie umiejętności mówienia. Dołącz się, aby pobrać sporą dawkę języka!</p>
                `,
                desc2: `
                    <div>Prezentuje: Simon Pounder</div>
                    <div>Sesja prowadzona w języku angielskim</div>
                `,
                slug: 'masz-to-na-koncu-jezyka',
                link: 'https://us02web.zoom.us/j/89049291432',
                _id: "masz-to-na-koncu-jezyka",
                start: '1630682100000', // 17:15, 03.09
                startDisplay: '1630683000000', // 17:30
                end: '1630686600000', // 18:30, 03.09
                endDisplay: '1630685700000', // 18:15
                active: null,
                workshops: true
            },

            // Dlaczego warto wybrać egzamin B2 First?
            {
                title: `
                    <div class="mb-1">Dlaczego warto wybrać egzamin B2 First?</div>
                    <div>The many benefits of B2 First.</div>
                `,
                recipient: `
                    <div>Sesja dla rodziców i młodzieży</div>
                `,
                desc1: `
                    <p>Egzaminy Cambridge English Qualifications są dobrze znane na całym świecie i uznawane przez szkoły, uniwersytety oraz pracodawców we wszystkich krajach anglojęzycznych. Chcesz dowiedzieć się więcej o możliwościach, jakie daje certyfikat na poziomie B2 First? Dołącz do webinarium.</p>
                `,
                desc2: `
                    <div>Prezentuje: Barbara Szybowska</div>
                    <div>Sesja prowadzona w języku polskim</div>
                `,
                slug: 'b2-first',
                link: '_prGrTwBrLE',
                _id: "b2-first",
                start: '1630685700000', // 18:15, 03.09
                startDisplay: '1630686600000', // 18:30
                end: '1630690200000', // 19:30, 03.09
                endDisplay: '1630689300000', // 19:15
                active: null,
            },

            // Kreatywność i drugie życie rolki toaletowej - 1
            {
                title: `
                    <div class="mb-1">Kreatywność i drugie życie rolki toaletowej.</div>
                    <div>Get creative with upcycling!</div>
                `,
                recipient: `
                    <div>Sesja dla dzieci 9-11 lat</div>
                `,
                desc1: `
                    <p>Jak dbasz o środowisko? Dlaczego warto wykorzystywać materiały ponownie? W czasie naszego spotkania dasz drugie życie rolce toaletowej. Co z tego wyniknie?  Przyłącz się do twórczego działania i nauki angielskiego przez zabawę.</p>
                `,
                desc2: `
                    <div>Prezentuje: Agata Kwiatkowska</div>
                    <div>Sesja prowadzona w języku angielskim</div>
                `,
                slug: 'upcycling-1',
                link: 'https://us02web.zoom.us/j/89198567110',
                _id: "upcycling-1",
                start: '1630685700000', // 18:15, 03.09
                startDisplay: '1630686600000', // 18:30
                end: '1630690200000', // 19:30, 03.09
                endDisplay: '1630689300000', // 19:15
                active: null,
                workshops: true
            },

            // MyClass – sprawdź jak to działa. - 1
            {
                title: `
                    <div class="mb-1">MyClass – sprawdź jak to działa.</div>
                    <div>MyClass teaser session.</div>
                `,
                recipient: `
                    <div>Sesja dla dorosłych (18+, poziom B1/B2)</div>
                `,
                desc1: `
                    <p>Jak wygląda nauka na kursie MyClass dla dorosłych? Dołącz się do lekcji próbnej. Na sesji prowadzonej przez jednego z naszych doświadczonych lektorów doświadczysz nauki od słownictwa do zadania komunikacyjnego.</p>
                `,
                desc2: `
                    <div>Prezentuje: Neil Evans</div>
                    <div>Sesja prowadzona w języku angielskim</div>
                `,
                slug: 'my-class-1',
                link: 'https://us02web.zoom.us/j/87687296079',
                _id: "my-class-1",
                start: '1630685700000', // 18:15, 03.09
                startDisplay: '1630686600000', // 18:30
                end: '1630691100000', // 19:45, 03.09
                endDisplay: '1630690200000', // 19:30
                active: null,
                workshops: true
            },

            // DoGRAJ swój angielski! - 1
            {
                title: `
                    <div class="mb-1">DoGRAJ swój angielski!</div>
                    <div>Gamify your English!</div>
                `,
                recipient: `
                    <div>Sesja dla dorosłych i młodzieży</div>
                `,
                desc1: `
                    <p>Lubisz wyzwanie i współzawodnictwo, a gry językowe to Twój żywioł? Chcesz doświadczyć jak gry pomagają w nauce angielskiego?  Przyłącz się do sesji. Duża dawka dobrej zabawy gwarantowana.</p>
                `,
                desc2: `
                    <div>Prezentuje: Bart Lubaszka</div>
                    <div>Sesja prowadzona w języku angielskim</div>
                `,
                slug: 'dograj-swoj-angielski-1',
                link: 'bSRjJJ-aO00',
                _id: "dograj-swoj-angielski-1",
                start: '1630689300000', // 19:15, 03.09
                startDisplay: '1630690200000', // 19:30
                end: '1630693800000', // 20:30, 03.09
                endDisplay: '1630692900000', // 20:15
                active: null
            },

            // 04.09

            // Przygotuj się na przyszłość z certyfikatem IELTS
            {
                title: `
                    <div class="mb-1">Przygotuj się na przyszłość z certyfikatem IELTS</div>
                    <div>Prepare for your future with IELTS</div>
                `,
                recipient: `
                    <div>Sesja dla dorosłych i młodzieży</div>
                `,
                desc1: `
                    <p>Jeśli chcesz wiedzieć więcej dlaczego warto wybrać IELTS oraz jakie możliwości daje zdanie testu, dołącz do webinarium.</p>
                `,
                desc2: `
                    <div>Prezentuje: Piotr Pluskota</div>
                    <div>Sesja prowadzona w języku polskim</div>
                `,
                slug: 'ielts',
                link: 'kYOeYyxz1RE',
                _id: "ielts",
                start: '1630739700000', // 9:15, 04.09
                startDisplay: '1630740600000', // 9:30
                end: '1630744200000', // 10:30, 04.09
                endDisplay: '1630743300000',
                active: null,
            },

            // Sesja z udziałem gościa specjalnego
            {
                title: `
                    <div class="mb-1">Natalia Sitarska – sesja specjalna z autorką bloga Tasteaway</div>
                    <div>Session for everyone featuring special guest.</div>
                `,
                recipient: `
                    <div>Gość specjalny – Sesja dla wszystkich</div>
                `,
                desc1: `
                    <p>Rozmowa z podróżniczką, właścicielką sieci butikowych cukierni oraz mamą dwójki dzieci - Natalią Sitarską, autorką jednego z najpopularniejszych w Polsce blogów podróżniczo-kulinarnych Tasteaway - o tym, jak w podróżach, biznesie i życiu przydaje się znajomość języka angielskiego.</p>
                `,
                desc2: `
                `,
                slug: 'natalia-sitarska',
                link: 'MdlqST-YwHs',
                _id: "natalia-sitarska",
                start: '1630743300000', // 10:15, 04.09
                startDisplay: '1630744200000', // 10:30
                end: '1630747800000', // 11:30, 04.09
                endDisplay: '1630746900000', // 11:15
                active: null,
            },

            // Uwolnij swój potencjał – nauka angielskiego z wykorzystaniem zasobów internetu. - 1
            {
                title: `
                    <div class="mb-1">Uwolnij swój potencjał – nauka angielskiego z wykorzystaniem zasobów internetu.</div>
                    <div>Unleash your mind - improving language skills using online tools and streaming platforms.</div>
                `,
                recipient: `
                    <div>Sesja dla młodzieży 12-14 lat</div>
                `,
                desc1: `
                    <p>Ile czasu spędzasz online? Googlowanie, streamowanie, granie... może to też i sposób na naukę angielskiego? Wzmocnij swój potencjał językowy przez wykorzystanie zasobów dostępnych dla każdego.</p>
                `,
                desc2: `
                    <div>Prezentuje: Magdalena Smith</div>
                    <div>Sesja prowadzona w języku angielskim</div>
                `,
                slug: 'uwolnij-swoj-potencjal-1',
                link: 'https://us02web.zoom.us/j/82763779404',
                _id: "uwolnij-swoj-potencjal-1",
                start: '1630743300000', // 10:15, 04.09
                startDisplay: '1630744200000', // 10:30
                end: '1630747800000', // 11:30, 04.09
                endDisplay: '1630746900000', // 11:15
                active: null,
                workshops: true
            },

            // Egzamin Cambridge English. Pójdzie Ci jak z płatka.
            {
                title: `
                    <div class="mb-1">Egzamin Cambridge English. Pójdzie Ci jak z płatka.</div>
                    <div>How to sail through your Cambridge English exam?</div>
                `,
                recipient: `
                    <div>Sesja dla dorosłych i młodzieży</div>
                `,
                desc1: `
                    <p>Masz w planie egzamin Cambridge? Chcesz się do niego dobrze przygotować? Nie wiesz od czego zacząć? A może potrzebujesz wsparcia? Nasz doświadczony nauczyciel podpowie Ci kilka sprawdzonych sposobów na przygotowanie do egzaminu.</p>
                `,
                desc2: `
                    <div>Prezentuje: Richard Cowen</div>
                    <div>Sesja prowadzona w języku angielskim</div>
                `,
                slug: 'egzamin-cambridge-english',
                link: 'wKTid85VufM',
                _id: "egzamin-cambridge-english",
                start: '1630746900000', // 11:15, 04.09
                startDisplay: '1630747800000', // 11:30
                end: '1630751400000', // 12:30, 04.09
                endDisplay: '1630750500000', // 12:15
                active: null,
            },

            // Uwolnij swój potencjał – nauka angielskiego z wykorzystaniem zasobów internetu - 2
            {
                title: `
                    <div class="mb-1">Uwolnij swój potencjał – nauka angielskiego z wykorzystaniem zasobów internetu</div>
                    <div>Unleash your mind - improving language skills using online tools and streaming platforms</div>
                `,
                recipient: `
                    <div>Sesja dla młodzieży 15-17 lat</div>
                `,
                desc1: `
                    <p>Ile czasu spędzasz online? Googlowanie, streamowanie, granie... może to też i sposób na naukę angielskiego? Wzmocnij swój potencjał językowy przez wykorzystanie zasobów dostępnych dla każdego.</p>
                `,
                desc2: `
                    <div>Prezentuje: Magdalena Smith</div>
                    <div>Sesja prowadzona w języku angielskim</div>
                `,
                slug: 'uwolnij-swoj-potencjal-2',
                link: 'https://us02web.zoom.us/j/89473285941',
                _id: "uwolnij-swoj-potencjal-2",
                start: '1630746900000', // 11:15, 04.09
                startDisplay: '1630747800000', // 11:30
                end: '1630751400000', // 12:30, 04.09
                endDisplay: '1630750500000', // 12:15
                active: null,
                workshops: true
            },

            // Kreatywność i drugie życie rolki toaletowej. - 2
            {
                title: `
                    <div class="mb-1">Kreatywność i drugie życie rolki toaletowej.</div>
                    <div>Get creative with upcycling!</div>
                `,
                recipient: `
                    <div>Sesja dla dzieci 6-8 lat</div>
                `,
                desc1: `
                    <p>Jak dbasz o środowisko? Dlaczego warto wykorzystywać materiały ponownie? W czasie naszego spotkania dasz drugie życie rolce toaletowej. Co z tego wyniknie?  Przyłącz się do twórczego działania i nauki angielskiego przez zabawę.</p>
                `,
                desc2: `
                    <div>Prezentuje: Agata Kwiatkowska</div>
                    <div>Sesja prowadzona w języku angielskim</div>
                `,
                slug: 'upcycling-2',
                link: 'https://us02web.zoom.us/j/83650744198',
                _id: "upcycling-2",
                start: '1630746900000', // 11:15, 04.09
                startDisplay: '1630747800000', // 11:30
                end: '1630751400000', // 12:30, 04.09
                endDisplay: '1630750500000', // 12:15
                active: null,
                workshops: true
            },

            // 05.09

            // Egzamin C1 Advanced. Dlaczego warto?
            {
                title: `
                    <div class="mb-1">Egzamin C1 Advanced. Dlaczego warto?</div>
                    <div>The many benefits of C1 Advanced</div>
                `,
                recipient: `
                    <div>Sesja dla dorosłych i młodzieży</div>
                `,
                desc1: `
                    <p>Egzaminy Cambridge English Qualifications są dobrze znane na całym świecie  i uznawane przez szkoły, uniwersytety oraz pracodawców we wszystkich krajach anglojęzycznych. Chcesz dowiedzieć się więcej o możliwościach, jakie daje certyfikat na poziomie C1 Advanced? Dołącz do webinarium.</p>
                `,
                desc2: `
                    <div>Prezentuje: Piotr Pluskota</div>
                    <div>Sesja prowadzona w języku polskim</div>
                `,
                slug: 'c1-advanced',
                link: '3eapxauaOs4',
                _id: "c1-advanced",
                start: '1630829700000', // 10:15, 05.09
                startDisplay: '1630830600000', // 10:30
                end: '1630834200000', // 11:30, 05.09
                endDisplay: '1630833300000', // 11:15
                active: null,
            },

            // Nauka angielskiego przez czytankę.
            {
                title: `
                    <div class="mb-1">Nauka angielskiego przez czytankę.</div>
                    <div>Storytelling for Primary students.</div>
                `,
                recipient: `
                    <div>Sesja dla dzieci 6-8 lat</div>
                `,
                desc1: `
                    <p>Poznasz historyjkę o pewnym stworzeniu z innej planety. Przy okazji nauczysz się kilku nowych słów a potem poćwiczymy je wspólnie. To będzie nauka przez zabawę.</p>
                `,
                desc2: `
                    <div>Prezentuje: Agata Kwiatkowska</div>
                    <div>Sesja prowadzona w języku angielskim</div>
                `,
                slug: 'nauka-angielskiego-poprzez-czytanke',
                link: 'https://us02web.zoom.us/j/87437794169',
                _id: "nauka-angielskiego-poprzez-czytanke",
                start: '1630829700000', // 10:15, 05.09
                startDisplay: '1630830600000', // 10:30
                end: '1630834200000', // 11:30, 05.09
                endDisplay: '1630833300000', // 11:15
                active: null,
                workshops: true
            },

            // Chwilka z angielskim. Jak wspierać dziecko w nauce angielskiego?
            {
                title: `
                    <div class="mb-1">Chwilka z angielskim. Jak wspierać dziecko w nauce angielskiego?</div>
                    <div>How to support your child in their English learning?</div>
                `,
                recipient: `
                    <div>Sesja dla rodziców</div>
                `,
                desc1: `
                    <p>Jak rodzic może wspierać dziecko w nauce angielskiego? Czy warto tłumaczyć każde słowo? Jakie moce kryje w sobie pacynka? Przyłącz się do sesji dla rodziców dzieci 6-11 lat, aby poznać odpowiedzi na te i inne pytania.</p>
                `,
                desc2: `
                    <div>Prezentują: Beata Jastrzębska, Izabela Murzyn-Borzemska</div>
                    <div>Sesja prowadzona w języku polskim</div>
                `,
                slug: 'chwilka-z-angielskim',
                link: 'CUdUoeiVQdU',
                _id: "chwilka-z-angielskim",
                start: '1630833300000', // 11:15, 05.09
                startDisplay: '1630834200000', // 11:30
                end: '1630837800000', // 12:30, 05.09
                endDisplay: '1630836900000', // 12:15
                active: null,
            },

            // // DoGRAJ swój angielski! - 2
            {
                title: `
                    <div class="mb-1">DoGRAJ swój angielski!</div>
                    <div>Gamify your English!</div>
                `,
                recipient: `
                    <div>Sesja dla młodzieży</div>
                `,
                desc1: `
                    <p>Lubisz wyzwanie i współzawodnictwo a gry językowe to Twój żywioł? Chcesz doświadczyć jak gry pomagają w nauce angielskiego?  Przyłącz się do sesji. Duża dawka dobrej zabawy gwarantowana.</p>
                `,
                desc2: `
                    <div>Prezentuje: Bart Lubaszka</div>
                    <div>Sesja prowadzona w języku angielskim</div>
                `,
                slug: 'dograj-swoj-angielski-2',
                link: 'bD9MsowIrCQ',
                _id: "dograj-swoj-angielski-2",
                start: '1630836900000', // 12:15, 05.09
                startDisplay: '1630837800000', // 12:30
                end: '1630841400000', // 13:30, 05.09
                endDisplay: '1630840500000', // 13:15
                active: null,
            },

            // 06.09

            // MyClass – sprawdź jak to działa - 2
            {
                title: `
                    <div class="mb-1">MyClass – sprawdź jak to działa</div>
                    <div>MyClass teaser session</div>
                `,
                recipient: `
                    <div>Sesja dla dorosłych (18+, poziom C1/C2)</div>
                `,
                desc1: `
                    <p>Jak wygląda nauka na kursie myClass dla dorosłych? Dołącz się do lekcji w próbnej. Na sesji prowadzonej przez jednego z naszych doświadczonych lektorów doświadczysz nauki od słownictwa do zadania komunikacyjnego.</p>
                `,
                desc2: `
                    <div>Prezentuje: Neil Evans</div>
                    <div>Sesja prowadzona w języku angielskim</div>
                `,
                slug: 'my-class-2',
                link: 'https://us02web.zoom.us/j/86271725324',
                _id: "my-class-2",
                start: '1630941300000', // 17:15, 06.09
                startDisplay: '1630942200000', // 17:30
                end: '1630945800000', // 18:30, 06.09
                endDisplay: '1630944900000', // 18:15
                active: null,
                workshops: true
            },

            // Podkręć swoją płynność językową
            {
                title: `
                    <div class="mb-1">Podkręć swoją płynność językową.</div>
                    <div>Boost your speaking skills.</div>
                `,
                recipient: `
                    <div>Sesja dla dorosłych i młodzieży</div>
                `,
                desc1: `
                    <p>Jak mówić płynnie i z łatwością? Jakie przeszkody stoją nam na drodze? Czy lustro może być nam pomocne? Dowiedz się jak wzmocnić swój potencjał językowy i nabrać pewności siebie w mówieniu.</p>
                `,
                desc2: `
                    <div>Prezentuje: Michał Adamus</div>
                    <div>Sesja prowadzona w języku polskim</div>
                `,
                slug: 'podkrec-swoja-plynnosc-jezykowa',
                link: 'Z73V2I72fbA',
                _id: "podkrec-swoja-plynnosc-jezykowa",
                start: '1630944900000', // 18:15, 06.09
                startDisplay: '1630945800000', // 18:30
                end: '1630949400000', // 19:30, 06.09
                endDisplay: '1630948500000', // 19:15
                active: null,
            },

            // Perfekcyjna wymowa? Dla kogo?
            {
                title: `
                    <div class="mb-1">Perfekcyjna wymowa? Dla kogo?</div>
                    <div>What does it mean to have perfect pronunciation?</div>
                `,
                recipient: `
                    <div>Sesja dla dorosłych i młodzieży</div>
                `,
                desc1: `
                    <p>Perfekcyjna wymowa, to cel każdej osoby uczącej się języka angielskiego. Czy jest to cel realistyczny? Jaka rolę odgrywa wymowa w użytkowaniu języka i nad czym warto pracować, aby osiągnąć sukces w komunikacji?</p>
                `,
                desc2: `
                    <div>Prezentuje: Neil Evans</div>
                    <div>Sesja prowadzona w języku polskim</div>
                `,
                slug: 'perfekcyjna-wymowa',
                link: 'SUqDhzaAVxU',
                _id: "perfekcyjna-wymowa",
                start: '1630948500000', // 19:15, 06.09
                startDisplay: '1630949400000', // 19:30
                end: '1630953000000', // 20:30, 06.09
                endDisplay: '1630952100000', // 20:15
                active: null,
            },
        ],
    },

    getters: {
        getLiveTransmissions(state) {
            return state.liveTransmissions
        },
        getActiveLiveTransmissions(state) {
            // return []
            return state.liveTransmissions.filter(a => !!a.active)
        },
        getProgramSortedByDay(state, getters) {
            function createNewDayAndPushToSorted(webinar) {
                let day = {
                    date: getDateFromTimestamp(webinar.startDisplay),
                    webinars: [webinar]
                }
                sortedByDays.push(day)
            }

            function sortWebinarsByTime(arrOfWebinars) {
                let webinarsCopy = JSON.parse(JSON.stringify(arrOfWebinars));
                webinarsCopy.sort((a, b) => {
                    if (
                        moment(a.startDisplay, "x").isAfter(
                            moment(b.startDisplay, "x"),
                            "minutes"
                        )
                    ) {
                        return 1;
                    } else return -1;
                });
                return webinarsCopy;
            }

            let sortedByDays = []

            getters.getLiveTransmissions.map(a => {

                // pierwszy raz
                if (!sortedByDays.length) {
                    createNewDayAndPushToSorted(a)
                    return true
                }

                // szuka dnia
                let foundDay = sortedByDays.find(b => b.date == getDateFromTimestamp(a.startDisplay))
                if (!!foundDay) {
                    foundDay.webinars.push(a)
                } else {
                    createNewDayAndPushToSorted(a)
                }
            })

            sortedByDays.forEach(a => a.webinars = sortWebinarsByTime(a.webinars))

            return sortedByDays
        },
    },

    mutations: {
        CHECK_LIVE_TRANSMISSIONS(state) {
            let now = new moment().tz('Europe/Warsaw').valueOf();
            // let test = moment(now).format('HH:mm')
            // console.log(test)
            state.liveTransmissions.map(a => (now > a.start && now < a.end) ? a.active = true : a.active = false)
        }
    }
}

export default eventData