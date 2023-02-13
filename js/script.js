// Configurazione Vue
const app = Vue.createApp({
    data: function () {
        return {
            tasks: [
                {
                    text: "",
                    done: false
                },

            ],
            newTask: {},

        }

    },
    methods: {

        addTask() {
            const newTask = {
                text: this.newTask.text,
                done: false,
            };
            console.log(this.newTask)
            this.tasks.push(this.newTask);

        },



        removeTask(i) {
            this.tasks.splice(i, 1);
        }

    }


});
app.mount("#root");