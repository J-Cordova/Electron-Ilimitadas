/// <reference path="_all.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    var CreateUser = (function () {
        function CreateUser(firstName, lastName, avatar, bio) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.avatar = avatar;
            this.bio = bio;
        }
        return CreateUser;
    }());
    ContactManagerApp.CreateUser = CreateUser;
    var User = (function () {
        function User(name, avatar, bio, notes) {
            this.name = name;
            this.avatar = avatar;
            this.bio = bio;
            this.notes = notes;
        }
        User.fromCreate = function (user) {
            return new User(user.firstName + ' ' + user.lastName, user.avatar, user.bio, []);
        };
        return User;
    }());
    ContactManagerApp.User = User;
    var Note = (function () {
        function Note(title, date) {
            this.title = title;
            this.date = date;
        }
        return Note;
    }());
    ContactManagerApp.Note = Note;
    var Comment = (function () {
        function Comment(Content) {
            this.Content = Content;
        }
        return Comment;
    }());
    ContactManagerApp.Comment = Comment;
    var Belt;
    (function (Belt) {
        Belt[Belt["White"] = 0] = "White";
        Belt[Belt["Blue"] = 1] = "Blue";
        Belt[Belt["Purple"] = 2] = "Purple";
        Belt[Belt["Brown"] = 3] = "Brown";
        Belt[Belt["Black"] = 4] = "Black";
    })(Belt = ContactManagerApp.Belt || (ContactManagerApp.Belt = {}));
    var Gender;
    (function (Gender) {
        Gender[Gender["Male"] = 0] = "Male";
        Gender[Gender["Female"] = 1] = "Female";
    })(Gender = ContactManagerApp.Gender || (ContactManagerApp.Gender = {}));
    var Belts = (function () {
        function Belts() {
        }
        Belts.getBelts = function () {
            return ["White", "Blue", "Purple", "Brown", "Black"];
        };
        return Belts;
    }());
    ContactManagerApp.Belts = Belts;
    var CreateStudentModel = (function () {
        function CreateStudentModel(FirstName, LastName) {
            this.FirstName = FirstName;
            this.LastName = LastName;
        }
        return CreateStudentModel;
    }());
    ContactManagerApp.CreateStudentModel = CreateStudentModel;
    var Student = (function () {
        function Student(FirstName, LastName, Age, Gender, Birthday, PhoneNumber, Email, StartDate, Active, Belt, Stripes, Comment) {
            this.FirstName = FirstName;
            this.LastName = LastName;
            this.Age = Age;
            this.Gender = Gender;
            this.Birthday = Birthday;
            this.PhoneNumber = PhoneNumber;
            this.Email = Email;
            this.StartDate = StartDate;
            this.Active = Active;
            this.Belt = Belt;
            this.Stripes = Stripes;
            this.Comment = Comment;
        }
        return Student;
    }());
    ContactManagerApp.Student = Student;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=models.js.map