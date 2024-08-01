export class CoursesService {
    getCourses() {
        return [
            { id: 1, title: "Laravel" },
            { id: 2, title: "Angular" },
            { id: 3, title: "VueJS" },
            { id: 4, title: "Symfony" },
            { id: 5, title: "AdonisJs" }
        ];
    }

    addCourse($courses: { id: number, title: string }[]) {
        $courses.push({ id: 6, title: "ReactJS" });
    }

    deleteCourse($courses: { id: number, title: string }[], course: any) {
        let index = $courses.indexOf(course);
        $courses.splice(index,1);
    }

    editCourse(course:any) {
        course.title = "New title";
    }
}