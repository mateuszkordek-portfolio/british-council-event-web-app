<template lang="pug">
div(
    style="min-height: calc(100vh - 64px)"
    class="home-view d-flex flex-column justify-space-between"
)
    v-container
        CustomSpacer
        MainHeader(
            bar
        ) Witaj na British Council Open Days!

        v-row
            v-col(
                :cols="laptop ? 12 : 7"
                class="relative"
                :class="laptop ? 'order-1' : ''"
            )
                BigCard(class="z-index-1")
                    div
                        h3(class="mb-6") Cześć Wszystkim!
                        p
                            div(class="mb-7") Chcesz uczyć się angielskiego tej jesieni? Z British Council to bułka z masłem!

                        p
                            div(class="mb-2") Join our Open Days and you can enjoy any of over 20 sessions that teach you anything you need to know about learning English with the British Council this autumn. And you stand a chance to win a competition for 1000 zł to contribute towards your learning.
                            div(class="mb-7") Enjoy the sessions!

                        p
                            div(class="mb-2") Weź udział w naszych Dniach Otwartych i oglądaj ponad 20 sesji, aby dowiedzieć się wszystkiego o nauce angielskiego z British Council. Dodatkowo, masz szansę na wygranie w naszym konkursie 1000 złotych do wydania na wybrany kurs.
                            div(class="mb-7") Zapraszamy do udziału!

                        div
                            span Przejdź do zakładki
                            router-link(
                                to="/program"
                                style="font-weight: 600"
                                class="mx-1"
                            ) Program
                            span i zobacz, co dla Ciebie przygotowaliśmy.

                        div(class="d-flex flex-column align-end mt-8")
                            div(
                                style="font-weight: 600; font-style: italic"
                            ) Colm McGivern
                            div(
                                style="font-style: italic"
                            ) Director, British Council Poland

                CustomSpacer

                BigCard(class="z-index-1")
                    h4 Przydatne informacje

                    v-expansion-panels(
                        multiple
                        class="mt-8"
                    )
                        v-expansion-panel(
                            v-for="(panel, index) in panels"
                            :key="index"
                        )
                            v-expansion-panel-header
                                span(
                                    class="font-weight-bold"
                                    style="line-height: 1.4"
                                    class="primary--text"
                                ) {{ panel.q }}
                            v-expansion-panel-content
                                span(
                                    v-html="panel.a"
                                    class="primary--text"
                                )

                Sticker(
                    fileName="rock"
                    style="transform: rotate(-25deg); bottom: -40px; z-index: 1; left: -10px"
                )

            v-col(
                :cols="phone ? 12 : laptop ? 8 : 5"
                class="relative"
            )
                v-img(
                    :aspect-ratio="4 / 3"
                    src="@/assets/images/welcome.jpg"
                    class="radius"
                    style="box-shadow: 0px 5px 45px rgba(184, 184, 184, 0.22)"
                )
                Sticker(
                    fileName="star-2"
                    size="70"
                    style="transform: rotate(-25deg); top: -20px; z-index: 1; right: -10px"
                )

        //- v-row
        //-     v-col(
        //-         :cols="laptop ? 12 : 6"
        //-     )
        //-         v-responsive(
        //-             :aspect-ratio="16 / 9"
        //-             width="100%"
        //-             class="radius"
        //-         )
        //-             v-img(
        //-                 src="@/assets/images/welcome.jpeg"
        //-             )

        //-     v-col(
        //-         :cols="laptop ? 12 : 6"
        //-     )
        //-         BigCard
        //-             div
        //-                 h2 Dzień dobry!
        //-                 p Witamy na platformie pierwszych Wirtualnych Targów Pracy AGH. Przez najbliższe dwa dni w tym miejscu będą na Ciebie czekali przedstawiciele ponad 60 pracodawców oferujących praktyki, staże i pracę. Zachęcamy do skorzystania z możliwości bezpośredniego kontaktu w wirtualnych pokojach lub rozmowy poprzez czaty. Pracodawcy będą dostępni od 10:00 do 16:00 zgodnie z harmonogramem, który znajdziesz w zakładce “Wystawcy”.

        //-             div(class="mt-12")
        //-                 h2 Wykorzystaj możliwości
        //-                 p Wirtualne Targi Pracy AGH to nie tylko możliwość rozmowy z przedstawicielami pracodawców. Podczas dwóch dni wydarzenia możesz także:
        //-                 ul
        //-                     li brać udział w prezentacjach i warsztatach tematycznych prowadzonych przez praktyków z firm,
        //-                     li zapoznać się z katalogiem pracodawców oraz opisem planów rekrutacyjnych,
        //-                     li umówić się na konsultacje CV w języku polskim i angielskim.
        //-                 p Zapraszamy do eksploracji nowej platformy i aktywnego udziału w wydarzeniu!
        //-                 p(
        //-                     style="font-style: italic"
        //-                 ) Zespół Centrum Karier AGH

    CustomSpacer
    CustomSpacer
    //- CustomSpacer
    FooterSection
</template>

<script>
import FooterSection from "@/components/organisms/FooterSection"
export default {
    components: {
        FooterSection
    },

    data: () => ({
        panels: [
            {
                q: "Jak zapisać się na kurs?",
                a: `
                    <div style="margin-bottom: 16px">Zapisz się na kurs, to proste:</div>
                    <ol>
                        <li>
                            <span>Wejdź na stronę</span>
                            <a class="underline" style="font-weight: 600" href="https://www.britishcouncil.pl/angielski" target="_blank"> www.britishcouncil.pl/angielski</a>
                        </li>
                        <li>
                            <a class="underline" style="font-weight: 600" href="https://www.britishcouncil.pl/angielski/zapisy" target="_blank">Zarezerwuj bezpłatną konsultację</a>
                            <span> i wypełnij test poziomujący</span>
                        </li>
                        <li>
                            Porozmawiaj z naszym ekspertem, by potwierdzić poziom oraz określić Twoje potrzeby
                        </li>
                        <li>
                            Połącz się z Działem Obsługi Klienta, by wybrać kurs i dokonać rezerwacji.
                        </li>

                    </ol>
                `
            },
            {
                q: "Jak dokonać rejestracji na egzamin?",
                a: `
                    <p>
                        Możesz skorzystać z rejestracji bezpośrednio na stronach:
                    </p>
                    <ul>
                        <li>
                            <span>IELTS:</span>
                            <a class="underline" style="font-weight: 600" href="https://www.britishcouncil.pl/egzaminy/ielts" target="_blank"> www.britishcouncil.pl/egzaminy/ielts </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span>Cambridge English Qualifications:</span>
                            <a class="underline" style="font-weight: 600; margin-left: 5px" href="https://www.britishcouncil.pl/egzaminy/cambridge" target="_blank">  www.britishcouncil.pl/egzaminy/cambridge </a>
                        </li>
                    </ul>
                    <p>
                        Tam również znajdziesz wszystkie niezbędne informacje, takie jak regulaminy, zalecenia dotyczące bezpieczeństwa i ochrony zdrowia, czy materiałów pomocnych w przygotowaniu do egzaminu.
                    </p>
                `
            },
            {
                q: "Jak dbacie o bezpieczeństwo i zdrowie swoich studentów w czasie pandemii?",
                a: `
                    <p>
                        Naszym priorytetem jest bezpieczeństwo i zdrowie naszych klientów, pracowników, partnerów i społeczności, w których działamy. Dokładamy wszelkich starań, by zagwarantować wymagane środki bezpieczeństwa i odpowiednie warunki dla wszystkich naszych uczniów i zdających egzaminy.
                    </p>
                    <p>
                        Najważniejsze z wdrożonych zasad, to:
                    </p>
                    <ul>
                        <li>
                            Zachowanie odległości minimum 1.5 metra
                        </li>
                        <li>
                            Zapewniamy dostęp do środków do dezynfekcji dłoni
                        </li>
                        <li>
                            Częste czyszczenie i dezynfekcja pomieszczeń
                        </li>
                        <li>
                            Studenci, klienci oraz pracownicy są zobowiązani, aby nosić maseczki zakrywając nos i usta we wszystkich pomieszczeniach publicznych i wspólnych w budynku
                        </li>
                        <li>
                            Zwiększona wentylacja
                        </li>
                    </ul>
                    <p>
                        <span>Szczegółowe informacje znajdują się na naszej stronie</span>
                        <a class="underline" style="font-weight: 600" href="https://www.britishcouncil.pl/zdrowie-i-bezpieczenstwo" target="_blank">Zdrowie i bezpieczeństwo</span>
                    </p>
                `
            },
            {
                q: "Pozostań w kontakcie z British Council!",
                a: `
                    <p>
                        Zachęcamy do subskrypcji newslettera British Council, gdzie znajdziesz informacje o nowościach w naszej ofercie oraz ważnych inicjatywach społecznych i wydarzeniach kulturalnych przez nas wspieranych.
                    </p>
                    <p>
                        Nie spamujemy, wysyłamy informacje jeden – dwa razy w miesiącu.
                    </p>
                    <a class="underline" style="font-weight: 600" href="https://www.britishcouncil.pl/o-nas/newsletter" target="_blank"> Zapisz się</a>

                `
            }
        ]
    }),

    mounted() {
        this.removeWidowsAndOrphans()
    }
}
</script>
