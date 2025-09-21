interface Teacher {

  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any;
}

interface Director extends Teacher{
  numberOfReports: number;
}


interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName : string, lastName : string) {
  return `${firstName}. ${lastName}`
};

export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

export interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

