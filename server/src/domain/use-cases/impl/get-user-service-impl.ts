import {Service} from "@tsclean/core";
import {IGetUserService} from "@/domain/use-cases/get-user-service";

@Service()
export class GetUserServiceImpl implements IGetUserService {
    constructor() {
    }
}