import { Employee } from '../interfaces/employee.interface';

export class SocialEvent {

  public title: string;
  public description: string;
  public paidEvent: boolean;
  public date: Date;
  public duration: number; // in seconds
  public coordinator: {
    email: string,
    id: number,
  };
  public categoryId: number;
  public eventFee: number;
  public reward: number;

  constructor(
    public id: string,
    user: Employee
  ) {
    this.coordinator = {
      email: user.email,
      id: user.id
    };
  }

}
