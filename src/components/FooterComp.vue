<template>
    <footer>
        <small>Copyright&copy;{{ year }}</small>
    </footer>
</template>

<script>
export default {
    name: "FooterComponent",
    data(){
        return {
            timeAPIURL: 'https://worldtimeapi.org/api/timezone/Africa/Johannesburg',
            year: 2020
        }
    },
    mounted(){
        try {
            fetch(this.timeAPIURL).then(res => {
                return res.json()
            }).then(res => {
                this.year = new Date(res['datetime']).getFullYear()
            })
        } catch(e) {
            this.year = new Date().getFullYear()
        }
    }
}
</script>

<style scoped></style>