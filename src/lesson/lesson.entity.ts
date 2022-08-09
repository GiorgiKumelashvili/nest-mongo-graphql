import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class LessonEntity {
  @ObjectIdColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;
}
