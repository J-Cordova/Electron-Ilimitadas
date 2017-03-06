/// <reference path="../_all.ts" />

module ContactManagerApp {
  export class MainController {
    static $inject = ['userService', '$mdSidenav', '$mdToast', '$mdDialog', '$mdMedia', '$mdBottomSheet'];// for when we minify
    
    constructor(private userService: IUserService,
                private $mdSidenav: angular.material.ISidenavService,
                private $mdToast: angular.material.IToastService,
                private $mdDialog: angular.material.IDialogService,
                private $mdMedia: angular.material.IMedia,
                private $mdBottomSheet: angular.material.IBottomSheetService) {
    //constructor(private $scope: any) {
      //if wasn't using as in html
      //this.$scope.message = "Hello from our controller";
      var self = this;

      this.userService
          .loadAllUsers()
          .then((users: User[]) => 
            {
                self.users = users;
                self.selected = users[0];
                self.userService.selectedUser = self.selected;

                console.log(self.users);
            });
    } 
    
    tabIndex: number = 0;
    searchText: string = '';
    users: User[] = [];
    newNote: Note = new Note('',null);
    selected: User = null;

    formScope: any;

    setFormScope(scope)
    {
      this.formScope = scope;
    }

    showContactOptions($event) 
    {
      this.$mdBottomSheet.show({
        parent: angular.element(document.getElementById('wrapper')),
        templateUrl: './dist/view/contactSheet.html',
        controller: ContactPanelController,
        controllerAs: "cp",
        bindToController : true,
        targetEvent: $event
      }).then((clickedItem) => {
        //make sure not undefined
        if(clickedItem) console.log( clickedItem.name + ' clicked!');
      })      
    }

    addUser($event)
    {
      var self = this;
      var useFullScreen = (this.$mdMedia('sm') || this.$mdMedia('xs'));

      this.$mdDialog.show(
        {
          templateUrl: './dist/view/newUserDialog.html',
          parent: angular.element(document.body),
          targetEvent: $event,
          controller: AddUserDialogController,
          controllerAs: 'ctrl',
          fullscreen: useFullScreen,
          clickOutsideToClose: true
        }).then(
          (user:CreateUser) => 
          {
            var newUser: User = User.fromCreate(user);
            self.users.push(newUser);
            self.selectUser(newUser);
            self.openToast('User Added');
          },() => 
          {
              console.log('You have cancelled the dialog')
          })
    }

    clearNotes($event) : void
    {
      var confirm = this.$mdDialog.confirm()
          .title('Are you sure you want to delete all notes?')
          .textContent('All notes will be deleted, you can\'t undo this action.')
          .targetEvent($event)
          .ok('Yes')
          .cancel('No');

      var self = this;
      this.$mdDialog.show(confirm).then(function()
      {
        self.selected.notes = [];
        self.openToast('Cleared Notes');
      });
    }

    addNote() {
      this.selected.notes.push(this.newNote); 
      
      // // reset the form
      this.formScope.noteForm.$setUntouched();
      this.formScope.noteForm.$setPristine();
       
      this.newNote = new Note('', null);
      this.openToast("Note added");
    }

    removeNote(note: Note) : void
    {
      var foundIndex = this.selected.notes.indexOf(note);
      this.selected.notes.splice(foundIndex, 1);
      this.openToast('Note was removed');
    }

    openToast(message: string) : void 
    {
      this.$mdToast.show(
        this.$mdToast.simple()
          .textContent(message)
          .position('top right')
          .hideDelay(300)
      );
    }

    selectUser(user: User) : void 
    {
      this.selected = user;
      this.userService.selectedUser = user;

      this.$mdSidenav('left').close();
      this.tabIndex = 0;
    }

    toggleSideNav() : void 
    {
        this.$mdSidenav('left').toggle();
    }
  }
}