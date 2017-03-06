/// <reference path="../_all.ts" />

module ContactManagerApp {

  export class AddStudentController {

    static $inject = ['$mdDialog'];
    constructor(private $mdDialog) {
        this.$mdDialog = $mdDialog;
    }
    
    user: Student;
    

    cancel(): void {
      this.$mdDialog.cancel();
    }
    
    save(): void {
      this.$mdDialog.hide(this.user);
    }
  }
}