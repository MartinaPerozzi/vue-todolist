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
            error: false,

        }

    },
    methods: {

        addTask() {
            const newTask = {
                text: this.newTask.text,
                done: false,
            };
            // Controllo numero lettere
            console.log(this.newTask)
            if (this.newTask.text.length >= 4) {
                this.tasks.push(newTask);
                this.error = false;

            } else {
                this.error = true;
            }

        },

        // Rimuovi TASK
        removeTask(i) {
            this.tasks.splice(i, 1);
        },
        // Prova Sbarramento- da capire
        doneTask() {
            let doneTaskEl = this.newTask.done = true;
            console.log(doneTaskEl);
        }

    }


});
app.mount("#root");