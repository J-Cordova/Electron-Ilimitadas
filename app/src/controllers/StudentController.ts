/// <reference path="../_all.ts" />

module ContactManagerApp {
    import Belt = ContactManagerApp.Belt;

  export class StudentController {

    static $inject = ['$mdDialog','$mdMedia'];

    constructor(private $mdDialog: angular.material.IDialogService,
                private $mdMedia: angular.material.IMedia) 
    {}

    students : Student[];


    belts : String[] = Belts.getBelts();

    cancel(): void {
      this.$mdDialog.cancel();
    }

    createStudent(): void {

    }
    
    save(firstName: String, lastName: String): void {
      this.$mdDialog.hide({firstName: String, lastName: String});
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
        }).then((data) =>
          {
            var x =7;
            //Need to call into mongo to save
            //Hit Save
            // self.users.push(newUser);
            // self.selectUser(newUser);
             //self.openToast('User Added');
          },() => 
          {
              //Use if hit canel
          })
    }


  }

  
}