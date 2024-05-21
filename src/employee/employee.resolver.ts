import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Employee } from './entities/employee.entity';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDTO } from './dto/create-employee.input';
import { Project } from 'src/project/entities/project.entity';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  @Query(() => [Employee], { name: 'getAllEmployee' })
  async findAll() {
    return await this.employeeService.findAll();
  }

  @Mutation(() => Employee, { name: 'createEmployee' })
  async create(@Args('employeeInput') employee: CreateEmployeeDTO) {
    return await this.employeeService.create(employee);
  }

  @ResolveField(() => Project)
  async project(@Parent() employee: Employee) {
    return await this.employeeService.getProject(employee.projectId);
  }
}
