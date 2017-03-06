/// <reference path="../_all.ts" />

module ContactManagerApp {

  export class StudentController {

    static $inject = ['$mdDialog'];
    constructor(private $mdDialog) {
        this.$mdDialog = $mdDialog;
    }
    
    student: Student;
    

    cancel(): void {
      this.$mdDialog.cancel();
    }
    
    save(): void {
      this.$mdDialog.hide(this.student);
    }
  }
}