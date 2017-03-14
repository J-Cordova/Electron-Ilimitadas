/// <reference path="../_all.ts" />

module ContactManagerApp {
    import Belt = ContactManagerApp.Belt;

  export class StudentController {

    static $inject = ['$mdDialog','$mdMedia','$mdSidenav'];

    constructor(private $mdDialog: angular.material.IDialogService,
                private $mdMedia: angular.material.IMedia,
                private $mdSidenav: angular.material.ISidenavService) 
    {}

    students : Student[] = [];

    student : CreateStudentModel;

    selectedStudent: Student;

    belts : String[] = Belts.getBelts();
    tabIndex: Number = 0;

    cancel(): void {
      this.$mdDialog.cancel();
    }

    CreateStudent(data: CreateStudentModel): Student
    {
       return new Student(data.FirstName,data.LastName,null,null,null,'','',new Date(new Date().getDate()),false,Belt.White,0,new Comment(""));
    }
    
    save () : void {
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
        }).then((data: CreateStudentModel) =>
          {
              //var model : CreateStudentModel = new CreateStudentModel(data.firstName, data.lastName);
              var student: Student = this.CreateStudent(data);
              self.students.push(student);
          },() => 
          {
              
          })
    }

    selectStudent(student: Student) : void 
    {
      this.selectedStudent = student;
      //this.userService.selectedUser = user;
      this.$mdSidenav('left').close();
      this.tabIndex = 0;
    }

    toggleSideNav() : void 
    {
        this.$mdSidenav('left').toggle();
    }

  }
}