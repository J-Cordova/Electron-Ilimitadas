/// <reference path="../_all.ts" />

module ContactManagerApp {

  export class StudentController {

    static $inject = ['$mdDialog','$mdMedia'];

    constructor(private $mdDialog: angular.material.IDialogService,
                private $mdMedia: angular.material.IMedia) 
    {}
    
    student: Student; 

    belts(): String[] {
      var belts: String[] = new Array<String>();
      
      for (var belt in Belt) {
        if (Belt.hasOwnProperty(belt)) {
            belts.push(belt);
        }
     }

      return belts;
    }  

    cancel(): void {
      this.$mdDialog.cancel();
    }
    
    save(): void {
      this.$mdDialog.hide(this.student);
    }

    addStudent($event)
    {
      var self = this;
      var useFullScreen = (this.$mdMedia('sm') || this.$mdMedia('xs'));

      this.$mdDialog.show(
        {
          templateUrl: './dist/view/newStudentDialog.html',
          parent: angular.element(document.body),
          targetEvent: $event,
          controller: StudentController,
          controllerAs: 'ctrl',
          fullscreen: useFullScreen,
          clickOutsideToClose: true
        }).then((student:Student) => 
          {

            //Need to call into mongo to save
            //Hit Save
            // self.users.push(newUser);
            // self.selectUser(newUser);
            // self.openToast('User Added');
          },() => 
          {
              //Use if hit canel
          })
    }


  }
}