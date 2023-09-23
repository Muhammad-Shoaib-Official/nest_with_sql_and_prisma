import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

  async readAll(filter: any = {}) {
    return this.prisma.user.findMany({
      where: filter
    })
  }

  async read(id: number) {
    return this.prisma.user.findFirst({
      where: { id }
    })
  }

  async create(body: any) {
    return this.prisma.user.create({
      data: body
    })
  }

  async update(id: number, body: any) {
    return this.prisma.user.update({
      where: { id },
      data: body
    })
  }

  async delete(id: number) {
    return this.prisma.user.delete({
      where: { id }
    })
  }
}