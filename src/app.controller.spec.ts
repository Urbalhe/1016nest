import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('index', () => {
    it('should render the cat and toy homepage', () => {
      expect(appController.getIndex()).toEqual({
        title: 'Macskák és játékok',
      });
    });
  });
});
