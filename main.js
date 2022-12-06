const { createApp } = Vue;

    createApp({
        data() {
            return {
                mails : []
            }
        },
        methods : {

        },
        mounted() {
            i = 0;
            while (i < 10) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((result) => {
                    this.mails.push(result.data.response);
                });
                i++;
            }
        }
    }).mount("#miapp")