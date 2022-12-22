import { User } from './User';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Home {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  bhk: string;

  @Column()
  userId: string;

  @Column()
  imageId: string;

  @Column()
  addressId: string;

  @Column()
  dealerId: string;

  @Column()
  builderId: string;

  @OneToOne(() => User, (user) => user.home, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{name: 'user_id', referencedColumnName: 'id'}])
  user: User;

  
}
