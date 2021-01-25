import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createNameTable1611531698344 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: "names",
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'name',
            type: 'varchar',
            isUnique: true,
            isNullable: false
          }
        ]
      }), false);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('names');
    }

}
