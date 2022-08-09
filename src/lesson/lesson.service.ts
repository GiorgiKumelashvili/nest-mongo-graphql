import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LessonEntity } from './lesson.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(LessonEntity)
    private readonly lessonRepository: Repository<LessonEntity>,
  ) {}

  public async createLesson(
    name: string,
    startDate: string,
    endDate: string,
  ): Promise<LessonEntity> {
    const lesson = this.lessonRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
    });

    return this.lessonRepository.save(lesson);
  }

  public async getLesson(id: string): Promise<LessonEntity> {
    return this.lessonRepository.findOne({
      where: { id },
    });
  }
}
