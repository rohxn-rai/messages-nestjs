import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import request from "supertest";
import { App } from "supertest/types";
import { MessagesModule } from "src/messages/messages.module";

describe("AppController (e2e)", () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [MessagesModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("/ (GET)", () => {
    return request(app.getHttpServer())
      .get("/message")
      .expect(200)
      .expect("listMessage");
  });

  it("/ (POST)", () => {
    return request(app.getHttpServer())
      .post("/message")
      .expect(201)
      .expect("postMessage");
  });

  it("/ (GET)", () => {
    return request(app.getHttpServer())
      .get("/message/1234")
      .expect(200)
      .expect("perticularMessage 1234");
  });
});
