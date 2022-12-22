import { UserTypeEnum } from './../enums/UserTypeEnum';
import { Home } from './Home';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Column('uuid', {
    primary: true,
    name: 'id',
    default: () => 'gen_random_uuid()',
  })
  id: number;

  @Column({
    name: 'username',
    nullable: true,
    unique: true,
    length: 255
  })
  username: string;
  
  @Column({ name: 'email' })
  email: string;
  
  @Column({ name: 'password', nullable: true })
  password: string;
  
  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name', nullable: true })
  lastName: string;

  @Column({
    type: 'enum',
    enum: UserTypeEnum,
    default: UserTypeEnum.User
  })
  userType: UserTypeEnum;

  @Column({ name: 'account_active', default: 'false' })
  accountActive: boolean;

  @Column({ name: 'token', nullable: true })
  token: string;

  @Column({ name: 'email_verified', default: 'false' })
  emailVerified: boolean;

  @Column({ name: 'phone', nullable: true })
  phone: String;

  @Column({ name: 'email_notification', default: 'false' })
  emailNotification: boolean;

  @Column({ name: 'profile_image', nullable: true })
  profileImage: string;

  @Column({ name: 'address', nullable: true })
  address: string;

  @Column({ name: 'city', nullable: true })
  city: string;

  @Column({ name: 'state', nullable: true })
  state: string;

  @Column({ name: 'zip', nullable: true })
  zip: string;

  @Column({ name: 'profile_image', default: () => "'IN'" })
  country: string;

  @Column({ name: 'created_at', default: () => 'now()' })
  createdAt: Date;

  @Column({ name: 'updated_at', default: () => 'now()' })
  updatedAt: Date;

  @Column({ name: 'deleted_at', nullable: true })
  deletedAt: Date;

  @Column({ name: 'locked_reason', nullable: true, enum: ['locked_by_admin'] })
  lockedReason: 'locked_by_admin' | null

  @OneToOne(() => Home, (home) => home.user)
  home: Home

}
