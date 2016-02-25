using System;
using System.Collections.Generic;
using Microsoft.Data.Entity.Migrations;

namespace WebApplication3.Migrations
{
    public partial class ColChange : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(name: "Spell", table: "Testo");
            migrationBuilder.AddColumn<string>(
                name: "Spells",
                table: "Testo",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(name: "Spells", table: "Testo");
            migrationBuilder.AddColumn<string>(
                name: "Spell",
                table: "Testo",
                nullable: true);
        }
    }
}
