using Microsoft.EntityFrameworkCore.Migrations;

namespace DataAccess.Database.Migrations
{
    public partial class Add_Role : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.AddColumn<int>(
            //    name: "RoleId",
            //    table: "Users",
            //    nullable: true,
            //    defaultValue: 0);

            //migrationBuilder.CreateTable(
            //    name: "Role",
            //    columns: table => new
            //    {
            //        Id = table.Column<int>(nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Name = table.Column<string>(nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Role", x => x.Id);
            //    });

            //migrationBuilder.CreateIndex(
            //    name: "IX_Users_RoleId",
            //    table: "Users",
            //    column: "RoleId");

            //migrationBuilder.AddForeignKey(
            //    name: "FK_Users_Role_RoleId",
            //    table: "Users",
            //    column: "RoleId",
            //    principalTable: "Role",
            //    principalColumn: "Id",
            //    onDelete: ReferentialAction.SetNull);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Role_RoleId",
                table: "Users");

            migrationBuilder.DropTable(
                name: "Role");

            migrationBuilder.DropIndex(
                name: "IX_Users_RoleId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "RoleId",
                table: "Users");
        }
    }
}
