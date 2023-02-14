// Configurazione Vue
const app = Vue.createApp({
    data: function () {
        return {
            tasks: [
            ],
            newTask: {
                text: "",
                done: false
            },
            error: false,

        }

    },
    methods: {

        addTask() {
            // Copia dell'oggetto newTask(Copy)
            // ...this.newTask SI COPIA CON LO SPREAD in modo più veloce e senza dover rimettere dentro le proprietà
            const newTask = {
                text: this.newTask.text,
                done: false,
            };
            // Controllo numero lettere permesso
            console.log(this.newTask)
            if (this.newTask.text.length >= 4) {
                this.tasks.push(newTask);
                // Controllo che il numero di caratteri sia superiore a 4
                this.error = false;
                // Ripulire l'input dopo aver inviato la Task
                this.newTask.text = "";
            } else {
                this.error = true;
            }

        },

        // Rimuovi TASK
        removeTask(i) {
            this.tasks.splice(i, 1);
        },
        // Prova Sbarramento- da capire
        // doneTask() {
        //     let doneTaskEl = this.newTask.done = true;
        //     console.log(doneTaskEl);
        // }

        doneTask(index) {
            console.log(index);
            this.tasks[index].done = !this.tasks[index].done;
        }

    }

});
app.mount("#root");