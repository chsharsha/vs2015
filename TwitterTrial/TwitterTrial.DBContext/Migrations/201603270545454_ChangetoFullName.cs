namespace TwitterTrial.DBContext.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangetoFullName : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.TwitterUser", "UserFullName", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.TwitterUser", "UserFullName");
        }
    }
}
