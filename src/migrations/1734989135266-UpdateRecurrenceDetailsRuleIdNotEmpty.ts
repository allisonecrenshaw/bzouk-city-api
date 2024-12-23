import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateRecurrenceDetailsRuleIdNotEmpty1734989135266 implements MigrationInterface {
    name = 'UpdateRecurrenceDetailsRuleIdNotEmpty1734989135266'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recurrence_details" DROP CONSTRAINT "FK_a4792ee4de5d15ffbd4d746cf91"`);
        await queryRunner.query(`ALTER TABLE "recurrence_details" ALTER COLUMN "recurrenceRuleId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recurrence_details" ADD CONSTRAINT "FK_a4792ee4de5d15ffbd4d746cf91" FOREIGN KEY ("recurrenceRuleId") REFERENCES "recurrence_rule"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recurrence_details" DROP CONSTRAINT "FK_a4792ee4de5d15ffbd4d746cf91"`);
        await queryRunner.query(`ALTER TABLE "recurrence_details" ALTER COLUMN "recurrenceRuleId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recurrence_details" ADD CONSTRAINT "FK_a4792ee4de5d15ffbd4d746cf91" FOREIGN KEY ("recurrenceRuleId") REFERENCES "recurrence_rule"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
