import { EventTypesModule_2024_06_14 } from "@/ee/event-types/event-types_2024_06_14/event-types.module";
import { SchedulesRepository_2024_06_11 } from "@/ee/schedules/schedules_2024_06_11/schedules.repository";
import { AtomsRepository } from "@/modules/atoms/atoms.repository";
import { AtomsController } from "@/modules/atoms/controllers/atoms.controller";
import { AttributesAtomsService } from "@/modules/atoms/services/attributes-atom.service";
import { ConferencingAtomsService } from "@/modules/atoms/services/conferencing-atom.service";
import { EventTypesAtomService } from "@/modules/atoms/services/event-types-atom.service";
import { CredentialsRepository } from "@/modules/credentials/credentials.repository";
import { MembershipsRepository } from "@/modules/memberships/memberships.repository";
import { OrganizationsModule } from "@/modules/organizations/organizations.module";
import { PrismaModule } from "@/modules/prisma/prisma.module";
import { RedisService } from "@/modules/redis/redis.service";
import { TeamsEventTypesModule } from "@/modules/teams/event-types/teams-event-types.module";
import { UsersService } from "@/modules/users/services/users.service";
import { UsersRepository } from "@/modules/users/users.repository";
import { Module } from "@nestjs/common";

@Module({
  imports: [PrismaModule, EventTypesModule_2024_06_14, OrganizationsModule, TeamsEventTypesModule],
  providers: [
    EventTypesAtomService,
    ConferencingAtomsService,
    AttributesAtomsService,
    MembershipsRepository,
    CredentialsRepository,
    UsersRepository,
    AtomsRepository,
    UsersService,
    SchedulesRepository_2024_06_11,
    RedisService,
  ],
  exports: [EventTypesAtomService],
  controllers: [AtomsController],
})
export class AtomsModule {}
