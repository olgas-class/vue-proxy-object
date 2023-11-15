const { createApp } = Vue;

createApp({
  data() {
    return {
      newStudent: {
        name: "",
        lastname: "",
      },
      students: [],
    };
  },
  methods: {
    addStudent: function() {
        // this.students.push({
        //     name: this.newStudent.name,
        //     lastname: this.newStudent.lastname
        // });
        this.students.push({...this.newStudent})
        this.newStudent.name = "";
        this.newStudent.lastname = "";
    }
  }
}).mount("#app");
