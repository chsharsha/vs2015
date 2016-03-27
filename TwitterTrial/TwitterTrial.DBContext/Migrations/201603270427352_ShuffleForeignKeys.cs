namespace TwitterTrial.DBContext.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ShuffleForeignKeys : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.Tweet", name: "TwitterUser_Id", newName: "TwitterUserName");
            RenameIndex(table: "dbo.Tweet", name: "IX_TwitterUser_Id", newName: "IX_TwitterUserName");
        }
        
        public override void Down()
        {
            RenameIndex(table: "dbo.Tweet", name: "IX_TwitterUserName", newName: "IX_TwitterUser_Id");
            RenameColumn(table: "dbo.Tweet", name: "TwitterUserName", newName: "TwitterUser_Id");
        }
    }
}
