using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Nvsp.Data.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_EpicNumber_EpicNumberId",
                table: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "EpicNumber");

            migrationBuilder.DropTable(
                name: "PersonalDetails");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_EpicNumberId",
                table: "AspNetUsers");

            migrationBuilder.RenameColumn(
                name: "EpicNumberId",
                table: "AspNetUsers",
                newName: "PinCode");

            migrationBuilder.AddColumn<int>(
                name: "ConstituencyId",
                table: "AspNetUsers",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DateOfBirth",
                table: "AspNetUsers",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "DifferentlyAbled",
                table: "AspNetUsers",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "EPICNumber",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Gender",
                table: "AspNetUsers",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "HouseNo",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "NameOfRelative",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PlaceOfBirth",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PostOffice",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ResidentSince",
                table: "AspNetUsers",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "StreetAreaLocality",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Surname",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SurnameOfRelative",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "TownVillage",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "TypeOfRelation",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_ConstituencyId",
                table: "AspNetUsers",
                column: "ConstituencyId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Constituency_ConstituencyId",
                table: "AspNetUsers",
                column: "ConstituencyId",
                principalTable: "Constituency",
                principalColumn: "ConstituencyId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Constituency_ConstituencyId",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_ConstituencyId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "ConstituencyId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "DateOfBirth",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "DifferentlyAbled",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "EPICNumber",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Gender",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "HouseNo",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "NameOfRelative",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "PlaceOfBirth",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "PostOffice",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "ResidentSince",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "StreetAreaLocality",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Surname",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "SurnameOfRelative",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "TownVillage",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "TypeOfRelation",
                table: "AspNetUsers");

            migrationBuilder.RenameColumn(
                name: "PinCode",
                table: "AspNetUsers",
                newName: "EpicNumberId");

            migrationBuilder.CreateTable(
                name: "PersonalDetails",
                columns: table => new
                {
                    PersonalId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DateOfBirth = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DifferentlyAbled = table.Column<int>(type: "int", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Gender = table.Column<int>(type: "int", nullable: false),
                    Mobile = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NameOfRelative = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PlaceOfBirth = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Surname = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SurnameOfRelative = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TypeOfRelation = table.Column<string>(type: "nvarchar(max)", nullable: true)
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
                    ConstituencyId = table.Column<int>(type: "int", nullable: false),
                    EPICNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HouseNo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PersonalId = table.Column<int>(type: "int", nullable: false),
                    PinCode = table.Column<int>(type: "int", nullable: false),
                    PostOffice = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ResidentSince = table.Column<DateTime>(type: "datetime2", nullable: false),
                    StreetAreaLocality = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TownVillage = table.Column<string>(type: "nvarchar(max)", nullable: true)
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
    }
}
