import { Query, Resolver } from '@nestjs/graphql';
import { Employee } from './entities/employee.entity';
import { EmployeeService } from './employee.service';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  @Query(() => [Employee], { name: 'getAllEmployee' })
  async findAll() {
    return await this.employeeService.findAll();
  }
}
