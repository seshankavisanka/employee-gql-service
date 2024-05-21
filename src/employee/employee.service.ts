import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
import { CreateEmployeeDTO } from './dto/create-employee.input';
import { Project } from 'src/project/entities/project.entity';
import { ProjectService } from 'src/project/project.service';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
    private readonly projectService: ProjectService,
  ) {}

  async findAll(): Promise<Employee[]> {
    return await this.employeeRepository.find();
  }

  async create(employee: CreateEmployeeDTO): Promise<Employee> {
    const createdEmployee = this.employeeRepository.create(employee);

    return this.employeeRepository.save(createdEmployee);
  }

  async getProject(id: string): Promise<Project> {
    return await this.projectService.findOne(id);
  }
}
