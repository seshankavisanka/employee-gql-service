import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Employee } from './entities/employee.entity';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDTO } from './dto/create-employee.input';

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
}
