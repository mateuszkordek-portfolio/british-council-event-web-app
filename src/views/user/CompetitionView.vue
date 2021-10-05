<template lang="pug">
div(class="relative")
    Sticker(
        fileName="love"
        size="200"
        style="transform: rotate(20deg); top: 0px; right: 20px"
        v-if="!phablet"
    )
    //- Sticker(
    //-     fileName="star-3"
    //-     size="50"
    //-     style="transform: rotate(-20deg); top: 120px; right: 170px"
    //-     v-if="!phablet"
    //- )
    v-container(class="z-index-1")
        CustomSpacer

        MainHeader(
            bar
        )
            div Konkurs Dni Otwarte British Council Polska
            div “Więcej niż język angielski”

        BigCard(class="text-card")
            h3 Weź udział w konkursie Dni Otwarte British Council "Więcej niż język angielski" i wygraj jedną z sześciu nagród o wartości 1.000 zł!
            CustomSpacer
            h4(class="mb-4") Jak wziąć udział w konkursie? To proste!
            ol
                li Wypełnij zgłoszenie konkursowe (do pobrania poniżej) i wykonaj zadanie odpowiednie dla grupy wiekowej uczestnika konkursu
                li
                    span Prześlij odpowiedź wraz z podpisanym zgłoszeniem w wiadomości o tytule "Konkurs" na adres:
                    a(
                        href="mailto:pl_comms@britishcouncil.pl"
                        target="_blank"
                        style="font-weight: 600"
                        class="ml-1"
                    ) pl_comms@britishcouncil.pl
                    span .

            CustomSpacer
            p Autorzy dwóch najlepszych odpowiedzi w każdej kategorii wiekowej otrzymają nagrody o wartości 1.000 zł każda – do wydania na wybrany kurs British Council Polska.

        CustomSpacer
        BigCard(class="text-card")
            p Zadania konkursowe dla poszczególnych grup wiekowych uczestników:

            CustomSpacer
            h4(class="mb-4") Uczestnicy w wieku 6-11 lat:
            p Przygotuj pracę plastyczną z surowców podlegających recyklingowi, która będzie przedstawiać ucznia British Council (technika dowolna). Prześlij zdjęcie wykonanej pracy wraz z wypełnionym i podpisanym przez opiekuna zgłoszeniem konkursowym (Zgłoszenie - uczestnik niepełnoletni - dostępne poniżej) w wiadomości zatytułowanej „Konkurs”.

            CustomSpacer
            h4(class="mb-4") Uczestnicy w wieku 12-17 lat:
            p Przygotuj opis (nie więcej niż 50 słów) oraz zdjęcie ilustrujące, jak rozwijasz lub wykorzystujesz swoją znajomość języka angielskiego. Prześlij opis oraz zdjęcie wraz z wypełnionym i podpisanym przez opiekuna zgłoszeniem konkursowym (Zgłoszenie - uczestnik niepełnoletni - dostępne poniżej) w wiadomości zatytułowanej „Konkurs”.

            CustomSpacer
            h4(class="mb-4") Uczestnicy w wieku 18 lat i więcej:
            p Przygotuj opis (nie więcej niż 50 słów) oraz zdjęcie ilustrujące, jak rozwijasz lub wykorzystujesz swoją znajomość języka angielskiego. Prześlij opis oraz zdjęcie wraz z wypełnionym i podpisanym zgłoszeniem konkursowym (Zgłoszenie - uczestnik pełnoletni - dostępne poniżej) w wiadomości zatytułowanej „Konkurs”.

            CustomSpacer
            p Szczegóły konkursu dostępne są w regulaminie.

        CustomSpacer
        BigCard(class="text-card")
            h4(class="mb-4") Pliki do pobrania

            div(class="d-flex align-center mb-2")
                v-icon(
                    color="primary"
                    class="mr-1"
                ) mdi-download
                a(
                    download
                    class="underline-on-hover"
                    href="/files/dni_otwarte_regulamin_10082021.docx"
                ) Dni Otwarte British Council – Więcej niż język angielski

            div(class="d-flex align-center mb-2")
                v-icon(
                    color="primary"
                    class="mr-1"
                ) mdi-download
                a(
                    download
                    class="underline-on-hover"
                    href="/files/dni_otwarte_zalacznik1_10082021_final.docx"
                ) Zgłoszenie „Więcej niż język angielski” – uczestnik niepełnoletni

            div(class="d-flex align-center mb-2")
                v-icon(
                    color="primary"
                    class="mr-1"
                ) mdi-download
                a(
                    download
                    class="underline-on-hover"
                    href="/files/dni_otwarte_zalacznik2_10082021_final.docx"
                ) Zgłoszenie „Więcej niż język angielski” – uczestnik pełnoletni
</template>