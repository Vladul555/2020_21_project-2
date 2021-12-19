import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(body: any): Promise<import("../schemas/user.schema").User>;
    getAll(): Promise<import("../schemas/user.schema").User[]>;
    findOne(id: any): Promise<import("../schemas/user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    deleteByID(id: any): Promise<import("../schemas/user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    updateByID(id: any, body: any): Promise<import("mongodb").UpdateResult>;
    updateCourses(id: any): Promise<import("mongodb").UpdateResult>;
    login(body: any): Promise<import("../schemas/user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
