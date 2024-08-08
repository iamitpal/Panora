import { Module } from '@nestjs/common';
import { ApplicationController } from './application.controller';
import { SyncService } from './sync/sync.service';
import { LoggerService } from '@@core/@core-services/logger/logger.service';
import { ApplicationService } from './services/application.service';
import { ServiceRegistry } from './services/registry.service';
import { EncryptionService } from '@@core/@core-services/encryption/encryption.service';
import { FieldMappingService } from '@@core/field-mapping/field-mapping.service';
import { WebhookService } from '@@core/@core-services/webhooks/panora-webhooks/webhook.service';
import { ConnectionUtils } from '@@core/connections/@utils';
import { IngestDataService } from '@@core/@core-services/unification/ingest-data.service';
import { AshbyService } from './services/ashby';

import { BullQueueModule } from '@@core/@core-services/queues/queue.module';

import { CoreUnification } from '@@core/@core-services/unification/core-unification.service';
import { AshbyApplicationMapper } from './services/ashby/mappers';
import { Utils } from '@ats/@lib/@utils';

@Module({
  controllers: [ApplicationController],
  providers: [
    ApplicationService,

    CoreUnification,

    SyncService,
    WebhookService,

    ServiceRegistry,

    IngestDataService,

    AshbyApplicationMapper,
    Utils,
    /* PROVIDERS SERVICES */
    AshbyService,
  ],
  exports: [SyncService],
})
export class ApplicationModule {}
