import { Controller, Body, Query, Req, Delete, Param, Patch, Post, Get, ParseIntPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { query } from "express";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  readAll(@Query() query: any) {
    return this.userService.readAll(query)
  }

  @Post()
  create(@Body() body: any) {
    return this.userService.create(body)
  }

  @Get(":id")
  read(@Param("id", ParseIntPipe) id) {
    return this.userService.read(id)
  }

  @Patch(":id")
  update(@Param("id", ParseIntPipe) id, @Body() body) {
    return this.userService.update(id, body)
  }

  @Delete(":id")
  delete(@Param("id", ParseIntPipe) id) {
    return this.userService.delete(id)
  }
}