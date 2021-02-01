using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Nvsp.Data.Migrations
{
    public partial class RemovedBirthID : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "EpicNumberId",
                table: "AspNetUsers",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "HaveEPICNumber",
                table: "AspNetUsers",
                type: "bit",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Mobile",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Constituency",
                columns: table => new
                {
                    ConstituencyId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ConstituencyName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StateUT = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    District = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Constituency", x => x.ConstituencyId);
                });

            migrationBuilder.CreateTable(
                name: "PersonalDetails",
                columns: table => new
                {
                    PersonalId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Surname = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Gender = table.Column<int>(type: "int", nullable: false),
                    DateOfBirth = table.Column<DateTime>(type: "datetime2", nullable: false),
                    PlaceOfBirth = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TypeOfRelation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NameOfRelative = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SurnameOfRelative = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DifferentlyAbled = table.Column<int>(type: "int", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Mobile = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PersonalDetails", x => x.PersonalId);
                });

            migrationBuilder.CreateTable(
                name: "EpicNumber",
                columns: table => new
                {
                    EpicNumberId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EPICNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HouseNo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StreetAreaLocality = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TownVillage = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PostOffice = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PinCode = table.Column<int>(type: "int", nullable: false),
                    ConstituencyId = table.Column<int>(type: "int", nullable: false),
                    ResidentSince = table.Column<DateTime>(type: "datetime2", nullable: false),
                    PersonalId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EpicNumber", x => x.EpicNumberId);
                    table.ForeignKey(
                        name: "FK_EpicNumber_Constituency_ConstituencyId",
                        column: x => x.ConstituencyId,
                        principalTable: "Constituency",
                        principalColumn: "ConstituencyId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EpicNumber_PersonalDetails_PersonalId",
                        column: x => x.PersonalId,
                        principalTable: "PersonalDetails",
                        principalColumn: "PersonalId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_EpicNumberId",
                table: "AspNetUsers",
                column: "EpicNumberId");

            migrationBuilder.CreateIndex(
                name: "IX_EpicNumber_ConstituencyId",
                table: "EpicNumber",
                column: "ConstituencyId");

            migrationBuilder.CreateIndex(
                name: "IX_EpicNumber_PersonalId",
                table: "EpicNumber",
                column: "PersonalId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_EpicNumber_EpicNumberId",
                table: "AspNetUsers",
                column: "EpicNumberId",
                principalTable: "EpicNumber",
                principalColumn: "EpicNumberId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_EpicNumber_EpicNumberId",
                table: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "EpicNumber");

            migrationBuilder.DropTable(
                name: "Constituency");

            migrationBuilder.DropTable(
                name: "PersonalDetails");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_EpicNumberId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "EpicNumberId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "HaveEPICNumber",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "LastName",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Mobile",
                table: "AspNetUsers");
        }
    }
}
