import { CommonModule } from "@angular/common";
import { Component } from "@angular/core"
import { CoursesService } from "./courses.service";


// 
@Component ({
    selector : "courses" , // identificateur de component : à utiliser comme tag en html
    standalone: true, // sould be imported in root componenet app.componenet.ts 
    templateUrl : "./courses.component.html",
    imports: [CommonModule]
})

export class CoursesComponent {

    course = {
        title : 'Formation',
        avis : '5.5566',
        participants : 136,
        prix : 950.4,
        publicationDate : new Date(2024,0,18)

    }

    title = "La liste de mes cours";
    selectedCourse = "Laravel";
    courses;
    isButtonActive = true;

    constructor(private coursesService:CoursesService) {
        this.courses= coursesService.getCourses();
    }

    addCourse() {
        this.coursesService.addCourse(this.courses);
    }

    deleteCourse(course:any) {
        this.coursesService.deleteCourse(this.courses,course);
    }

    editCourse(course:any) {
        this.coursesService.editCourse(course);
    }

    getTitle() {
        return this.title;
    }

    doAction($event:any) {
        // button dans div (en cliquant sur le boutton 2 event se declenche) // to stop this use stopPropagation
        $event.stopPropagation();
        console.log("button clicked", $event); // event contient tous les infos de l event 
    }

    onClickDiv() {
        console.log("div clicked");
    }

    onKeyup(email : any) {
        console.log(email.value);
    }
}