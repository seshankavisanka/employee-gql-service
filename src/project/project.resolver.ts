import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { Project } from './entities/project.entity';
import { CreateProjectInput } from './dto/create-project.input';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Query(() => [Project], { name: 'getAllProject' })
  async findAll() {
    return await this.projectService.findAll();
  }

  @Query(() => Project, { name: 'findOneProject' })
  async findOne(@Args('id') id: string) {
    return await this.projectService.findOne(id);
  }

  @Mutation(() => Project, { name: 'createProject' })
  async create(@Args('projectInput') project: CreateProjectInput) {
    return await this.projectService.create(project);
  }
}
