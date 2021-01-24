import { Users } from './Users.entity';

export class UsersDto implements Readonly<UsersDto> {
  id: string;
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;

  public static from(dto: Partial<UsersDto>) {
    const newDto = new UsersDto();
    newDto.id = dto.id;
    newDto.username = dto.username;
    newDto.password = dto.password;
    newDto.createdAt = dto.createdAt;
    newDto.updatedAt = dto.updatedAt;
    return newDto;
  }

  public static fromEntity(users: Users) {
    return this.from({
      id: users.id,
      username: users.username,
      password: users.password,
      createdAt: users.createdAt,
      updatedAt: users.updatedAt,
    });
  }

  public toEntity() {
    const newUser = new Users();
    newUser.id = this.id;
    newUser.username = this.username;
    newUser.password = this.password;
    newUser.createdAt = this.createdAt;
    newUser.updatedAt = this.updatedAt;
    return newUser;
  }
}
