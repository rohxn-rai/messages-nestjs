import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import type { UUID } from "crypto";

@Controller("messages")
export class MessagesController {
  @Get()
  listMessage() {
    return "listMessage";
  }

  @Post()
  createMessage(@Body() body: any) {
    console.log(body);
    return "postMessage";
  }

  @Get("/:id")
  getMessage(@Param("id") id: UUID) {
    return `perticularMessage ${id}`;
  }
}
