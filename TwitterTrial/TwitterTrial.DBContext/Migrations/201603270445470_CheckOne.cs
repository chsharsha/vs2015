namespace TwitterTrial.DBContext.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CheckOne : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.Tweet", name: "TwitterUserName", newName: "TwitterUserID");
            RenameIndex(table: "dbo.Tweet", name: "IX_TwitterUserName", newName: "IX_TwitterUserID");
            AlterColumn("dbo.Tweet", "TimeParsed", c => c.DateTime());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Tweet", "TimeParsed", c => c.DateTime(nullable: false));
            RenameIndex(table: "dbo.Tweet", name: "IX_TwitterUserID", newName: "IX_TwitterUserName");
            RenameColumn(table: "dbo.Tweet", name: "TwitterUserID", newName: "TwitterUserName");
        }
    }
}
