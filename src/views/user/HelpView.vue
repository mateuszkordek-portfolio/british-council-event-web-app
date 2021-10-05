<template lang="pug">
div
    v-container
        CustomSpacer
        MainHeader(
            bar
        ) Pomoc

        BigCard(class="text-card")
            div
                div(class="d-flex align-center justify-space-between mb-4")
                    h2(class="mb-0") Potrzebujesz pomocy?
                    CustomButton(
                        @click="biggerChat = !biggerChat"
                        small
                    )
                        span(
                            v-if="biggerChat"
                        ) Zmniejsz okno czatu
                        span(
                            v-if="!biggerChat"
                        ) Zwiększ okno czatu
                p Skorzystaj z czatu, aby porozmawiać z naszym Supportem. Rozmowa będzie widoczna dla wszystkich Uczestników Dni Otwartych.
        CustomSpacer
        div(
            class="chat-wrapper radius"
            :class="biggerChat ? 'bigger' : ''"
        )
            Chat(
                width="100%"
                height="100%"
                :isAdmin="!!getUser && (getUser.accountType == 'ADMIN' || getUser.accountType == 'SUPERADMIN')"
                :isSuperAdmin="!!getUser && getUser.accountType == 'SUPERADMIN'"
                :isBlocked="!!getUser && getUser.isBlocked"
                :authorIdProp="!!getUser && getUser._id"
                channel="help"
            )

        CustomSpacer

        //- pytania i odpowiedzi
        BigCard(class="relative")
            h2 Pytania i odpowiedzi
            p Przygotowaliśmy dla Ciebie krótki przewodnik w formie odpowiedzi na najczęściej zadawane pytania.
            v-expansion-panels(
                class="mt-8"
                multiple
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

        CustomSpacer

        BigCard(class="z-index-1")
            h4 Przydatne informacje

            v-expansion-panels(
                multiple
                class="mt-8"
            )
                v-expansion-panel(
                    v-for="(panel, index) in panels2"
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

    CustomSpacer
    FooterSection
</template>

<script>
import FooterSection from "@/components/organisms/FooterSection"
import Chat from "@/components/organisms/chat-module/Chat"
import ChatNotAvailable from "@/components/organisms/chat-module/ChatNotAvailable"
import { mapGetters } from "vuex"
export default {
    components: {
        FooterSection,
        Chat,
        ChatNotAvailable
    },
    data: () => ({
        biggerChat: false,
        panels: [
            {
                q: "Kiedy odbywają się Dni Otwarte British Council?",
                a: `
                    <p>
                        <span>Dni Otwarte British Council odbywają się od 2 od 6 września i mają formę online. Szczegóły znajdziesz w zakładce </span>
                        <a class="underline" style="font-weight: 600" href="/program">Program</a>
                        <span> oraz </span>
                        <a class="underline" style="font-weight: 600" href="/kalendarz">Kalendarz</a>
                        <span>.</span>
                    </p>
                `
            },
            {
                q: "Czy nagrania prezentacji będą dostępne?",
                a: `
                    <p>
                        <span>Tak! Zapisy transmisji pojawią się na platformie w zakładce</span>
                        <a class="underline" style="font-weight: 600" href="/nagrania">Nagrania</a>
                        <span>po zakończeniu wydarzenia i będą dostępne do końca września. Warsztaty zamknięte nie będą nagrywane.</span>
                    </p>
                `
            },
            {
                q: "Co muszę zrobić, aby obejrzeć prezentację?",
                a: `
                    <p>
                        <span>Wszystkie transmisje dostępne będą w przez zakładkę </span>
                        <a class="underline" style="font-weight: 600" href="/live">Na żywo</a>
                        <span>i będą prowadzone na podstawie</span>
                        <a class="underline" style="font-weight: 600" href="/program">Programu</a>
                        <span>. Do obejrzenia prezentacji wystarczy Ci przeglądarka internetowa oraz stabilne połączenie z internetem. Możesz zadawać pytanie na czacie dostępnym na stronie transmisji.</span>
                    </p>
                `
            },
            {
                q: "Jak mogę wziąć udział w warsztatach?",
                a: `
                    <p>
                        <span>Warsztaty odbędą się przez platformę Zoom i obowiązują na nie dodatkowe zapisy przez formularz dostępny na </span>
                        <a class="underline" style="font-weight: 600" href="https://confirmsubscription.com/h/y/9F45EF43EDA9B6A2" target="_blank">tej stronie</a>
                        <span>lub przy poszczególnych wydarzeniach w zakładce </span>
                        <a class="underline" style="font-weight: 600" href="/program">Program</a>
                        <span>. Szczegóły zostaną wysłane na adres e-mail podany podczas rejestracji – w mailu znajdziesz także kod umożliwiający dołączenie do pokoju warsztatów.</span>
                    </p>
                `
            },
            {
                q: "Jak mogę wziąć udział w konkursie?",
                a: `
                    <p>
                        <span>Wszystkie informacje o konkursie znajdziesz na </span>
                        <a class="underline" style="font-weight: 600" href="/konkurs">tej stronie</a>
                        <span>.</span>
                    </p>
                `
            },
            {
                q: "Mam inne pytanie",
                a: `
                    <p>
                        <span>Napisz na czacie, chętnie odpowiemy na wszelkie pytania.</span>
                    </p>
                `
            }
        ],
        panels2: [
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

<style lang="sass" scoped>
.chat-wrapper
    height: 300px
    background-color: #fff
    &.bigger
        height: 600px
</style>