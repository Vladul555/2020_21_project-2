"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const user_schema_1 = require("../schemas/user.schema");
const update_user_dto_1 = require("../DTOs/users/update-user.dto");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(createUserDto) {
        const createdUser = new this.userModel(createUserDto);
        console.log(createUserDto);
        return createdUser.save();
    }
    async findAll() {
        return this.userModel.find().exec();
    }
    async findOne(id) {
        return this.userModel.findById(id).exec();
    }
    async deleteByID(id) {
        return this.userModel.findByIdAndDelete(id).exec();
    }
    async updateByID(id, updateUserDto) {
        return this.userModel.updateOne({ _id: id }, Object.assign({}, updateUserDto)).exec();
    }
    async updateCourses(id) {
        const user = await this.findOne(id);
        let count = user.numOfCourses;
        return this.userModel
            .updateOne({ _id: id }, { numOfCourses: ++count })
            .exec();
    }
    async banUser(id) {
        const user = await this.findOne(id);
        return this.userModel
            .updateOne({ _id: id }, { bannedStatus: true })
            .exec();
    }
    async unbanUser(id) {
        const user = await this.findOne(id);
        return this.userModel
            .updateOne({ _id: id }, { bannedStatus: false })
            .exec();
    }
    async login(username, password) {
        return this.userModel.findOne({ Username: username, Password: password });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map