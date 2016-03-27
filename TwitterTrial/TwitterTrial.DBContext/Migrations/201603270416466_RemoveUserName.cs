namespace TwitterTrial.DBContext.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RemoveUserName : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Tweet", "TwitterUserName");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Tweet", "TwitterUserName", c => c.String());
        }
    }
}
