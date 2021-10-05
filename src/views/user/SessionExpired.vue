<template lang="pug">
div
    AuthModule
        div
            div Sesja wygasła.
            div Zaloguj się ponownie.
</template>
<script>
import AuthModule from "@/components/organisms/AuthModule"
export default {
    components: { AuthModule }
}
</script>