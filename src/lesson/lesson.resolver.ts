import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonEntity } from './lesson.entity';
import { CreateLessonInput } from './lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver(_of => LessonType)
export class LessonResolver {
  constructor(private readonly lessonService: LessonService) {}

  @Query(_returns => LessonType)
  lesson(): LessonType {
    return {
      id: 'asdiasjdiasodjw1odi1',
      name: 'giorgi',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
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
}
