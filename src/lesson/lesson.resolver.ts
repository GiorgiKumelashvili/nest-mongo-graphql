import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { StudentService } from 'src/student/student.service';
import { AssignStudentsToLesson } from './assign-students-to-lesson.input';
import { LessonEntity } from './lesson.entity';
import { CreateLessonInput } from './lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver(_of => LessonType)
export class LessonResolver {
  constructor(
    private readonly lessonService: LessonService,
    private readonly studentService: StudentService,
  ) {}

  @ResolveField()
  async students(@Parent() lesson: LessonEntity) {
    return this.studentService.getManyStudents(lesson.students);
  }

  @Query(_returns => LessonType)
  getLessonById(@Args('id') id: string): Promise<LessonEntity> {
    return this.lessonService.getLesson(id);
  }

  @Query(_returns => [LessonType])
  getLessons(): Promise<LessonEntity[]> {
    return this.lessonService.getLessons();
  }

  @Mutation(_returns => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }

  @Mutation(() => LessonType)
  assignStudentsToLesson(
    @Args('assignStudentsToLesson')
    assignStudentsToLesson: AssignStudentsToLesson,
  ) {
    const { lessonId, studentIds } = assignStudentsToLesson;

    return this.lessonService.assignStudentsToLesson(lessonId, studentIds);
  }
}
