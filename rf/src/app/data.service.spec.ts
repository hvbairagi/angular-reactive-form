import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { DataService } from './data.service';
import { USERS } from './mock-data/user';

describe('DataService', () => {
  let service: DataService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(DataService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all users', () => {
    service.getAllUsers().subscribe((users: any) => {
      expect(users).toBeTruthy();
      expect(users.length).toBe(10);
      const secondUser = users.find((user: any) => user.id === 2);
      expect(secondUser.name).toBe('Harsh');
    });
    const mockReq = testingController.expectOne('api/users');
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(Object.values(USERS));
  });

  it('should get user by id', () => {
    service.getUserById(2).subscribe((user: any) => {
      expect(user).toBeTruthy();
      expect(user.name).toBe('Harsh');
    });
    const mockReq = testingController.expectOne('api/users/2');
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(USERS[2]);
  });

  it('should update user by id', () => {
    let changes = { age: 25 };
    service.updateUser(2, changes).subscribe((user: any) => {
      expect(user).toBeTruthy();
      expect(user.id).toBe(2);
    });
    const mockReq = testingController.expectOne('api/users/2');
    expect(mockReq.request.method).toEqual('PUT');
    let modifiedUser = USERS[2];
    modifiedUser.age = 25;
    expect(mockReq.request.body.age).toEqual(changes.age);
    mockReq.flush(modifiedUser);
  });

  afterEach(() => {
    testingController.verify();
  });
});
