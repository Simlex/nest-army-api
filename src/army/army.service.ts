import { Injectable } from '@nestjs/common';
import { CreateArmyDto } from './dto/create-army.dto';
import { randomUUID } from 'crypto';
import { AppError } from 'src/utils/custom-error';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Repository } from 'typeorm';

@Injectable()
export class ArmyService {
    constructor (@InjectRepository(User) private userRepository: Repository<User>) {}

    // Create a dummy array of private armies
    private armies = [
        {
            name: 'Army 1',
            type: 'Infantry',
            color: 'Blue',
        },
        {
            name: 'Army 2',
            type: 'Cavalry',
            color: 'Red',
        },
        {
            name: 'Army 3',
            type: 'Artillery',
            color: 'Green',
        },
        {
            name: 'Army 4',
            type: 'Cavalry',
            color: 'Brown',
        },
        {
            name: 'Army 5',
            type: 'Infantry',
            color: 'Yellow',
        }
    ];

    // Get all armies
    getArmies(type?: string) {
        if (type) {
            return this.armies.filter((army) => army.type === type);
        }
        return this.armies;
    }

    // Get one army
    getArmy(id: number) {
        const army = this.armies.find((army, index) => index === id);

        if (!army) {
            throw new AppError({
                message: 'Army not found',
                statusCode: 404,
                errorCode: 'ARMY_2003'
            });
        }

        return army;
    }

    // Create an army
    createArmy(createArmyDto: CreateArmyDto) {
        
        const newArmy = {
            name: createArmyDto.name,
            type: createArmyDto.type,
            color: createArmyDto.color,
            id: randomUUID()
        };

        const createdUser = this.userRepository.save({
            username: newArmy.name,
            password: 'password',
            fullName: newArmy.type,
            // createdAt: new Date(),
            // updatedAt: new Date(),
            authStrategy: 'local'
        });

        return createdUser;
    }
}
