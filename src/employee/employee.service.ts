import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  async findAll(): Promise<Employee[]> {
    // return await this.employeeRepository.find();

    const emp: Employee = new Employee();
    emp._id = 'sadasdasd';
    emp.firstName = 'john';
    emp.lastName = 'Doe';
    emp.designation = 'Engineer';

    return [emp];
  }
}
