import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column
  title: string;

  @Column
  bhk: string;

  @Column
  imageId: string;

  @Column
  addressId: string;

  @Column
  dealerId: string;

  @Column
  builderId: string;
}
