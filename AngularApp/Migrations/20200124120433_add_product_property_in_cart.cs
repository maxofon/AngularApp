using Microsoft.EntityFrameworkCore.Migrations;

namespace AngularApp.Migrations
{
    public partial class add_product_property_in_cart : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_CartLines_ProductId",
                table: "CartLines",
                column: "ProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_CartLines_Products_ProductId",
                table: "CartLines",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CartLines_Products_ProductId",
                table: "CartLines");

            migrationBuilder.DropIndex(
                name: "IX_CartLines_ProductId",
                table: "CartLines");
        }
    }
}
