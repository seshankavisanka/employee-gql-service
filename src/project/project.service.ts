import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';
import { CreateProjectInput } from './dto/create-project.input';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async findAll(): Promise<Project[]> {
    return await this.projectRepository.find();
  }

  async findOne(id: string): Promise<Project> {
    return await this.projectRepository.findOneBy({ id: id });
  }

  async create(project: CreateProjectInput): Promise<Project> {
    const createdProject = this.projectRepository.create(project);

    // we can directly use this withour create. depends on DTO
    return await this.projectRepository.save(createdProject);
  }
}
