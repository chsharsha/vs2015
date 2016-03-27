namespace TwitterTrial.DBContext.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Ident : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.FollowerMapping",
                c => new
                    {
                        FollowerMappingID = c.Int(nullable: false, identity: true),
                        Source = c.String(),
                        Destination = c.String(),
                    })
                .PrimaryKey(t => t.FollowerMappingID);
            
            CreateTable(
                "dbo.TwitterInbox",
                c => new
                    {
                        TwitterInboxID = c.Int(nullable: false, identity: true),
                        TweetID = c.Int(nullable: false),
                        RecipientName = c.String(),
                    })
                .PrimaryKey(t => t.TwitterInboxID)
                .ForeignKey("dbo.Tweet", t => t.TweetID, cascadeDelete: true)
                .Index(t => t.TweetID);
            
            CreateTable(
                "dbo.Tweet",
                c => new
                    {
                        TweetID = c.Int(nullable: false, identity: true),
                        TwitterUserName = c.String(),
                        TweetMessage = c.String(),
                        TweetMsgMode = c.Int(nullable: false),
                        TimeParsed = c.DateTime(nullable: false),
                        TwitterUser_Id = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.TweetID)
                .ForeignKey("dbo.TwitterUser", t => t.TwitterUser_Id)
                .Index(t => t.TwitterUser_Id);
            
            CreateTable(
                "dbo.TwitterUser",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        TwitterUserName = c.String(nullable: false),
                        Email = c.String(),
                        EmailConfirmed = c.Boolean(nullable: false),
                        PasswordHash = c.String(),
                        SecurityStamp = c.String(),
                        PhoneNumber = c.String(),
                        PhoneNumberConfirmed = c.Boolean(nullable: false),
                        TwoFactorEnabled = c.Boolean(nullable: false),
                        LockoutEndDateUtc = c.DateTime(),
                        LockoutEnabled = c.Boolean(nullable: false),
                        AccessFailedCount = c.Int(nullable: false),
                        UserName = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.IdentityUserClaim",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.String(),
                        ClaimType = c.String(),
                        ClaimValue = c.String(),
                        TwitterUser_Id = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.TwitterUser", t => t.TwitterUser_Id)
                .Index(t => t.TwitterUser_Id);
            
            CreateTable(
                "dbo.IdentityUserLogin",
                c => new
                    {
                        UserId = c.String(nullable: false, maxLength: 128),
                        LoginProvider = c.String(),
                        ProviderKey = c.String(),
                        TwitterUser_Id = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.UserId)
                .ForeignKey("dbo.TwitterUser", t => t.TwitterUser_Id)
                .Index(t => t.TwitterUser_Id);
            
            CreateTable(
                "dbo.IdentityUserRole",
                c => new
                    {
                        RoleId = c.String(nullable: false, maxLength: 128),
                        UserId = c.String(nullable: false, maxLength: 128),
                        TwitterUser_Id = c.String(maxLength: 128),
                        IdentityRole_Id = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => new { t.RoleId, t.UserId })
                .ForeignKey("dbo.TwitterUser", t => t.TwitterUser_Id)
                .ForeignKey("dbo.IdentityRole", t => t.IdentityRole_Id)
                .Index(t => t.TwitterUser_Id)
                .Index(t => t.IdentityRole_Id);
            
            CreateTable(
                "dbo.IdentityRole",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(),
                        Discriminator = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.IdentityUserRole", "IdentityRole_Id", "dbo.IdentityRole");
            DropForeignKey("dbo.TwitterInbox", "TweetID", "dbo.Tweet");
            DropForeignKey("dbo.Tweet", "TwitterUser_Id", "dbo.TwitterUser");
            DropForeignKey("dbo.IdentityUserRole", "TwitterUser_Id", "dbo.TwitterUser");
            DropForeignKey("dbo.IdentityUserLogin", "TwitterUser_Id", "dbo.TwitterUser");
            DropForeignKey("dbo.IdentityUserClaim", "TwitterUser_Id", "dbo.TwitterUser");
            DropIndex("dbo.IdentityUserRole", new[] { "IdentityRole_Id" });
            DropIndex("dbo.IdentityUserRole", new[] { "TwitterUser_Id" });
            DropIndex("dbo.IdentityUserLogin", new[] { "TwitterUser_Id" });
            DropIndex("dbo.IdentityUserClaim", new[] { "TwitterUser_Id" });
            DropIndex("dbo.Tweet", new[] { "TwitterUser_Id" });
            DropIndex("dbo.TwitterInbox", new[] { "TweetID" });
            DropTable("dbo.IdentityRole");
            DropTable("dbo.IdentityUserRole");
            DropTable("dbo.IdentityUserLogin");
            DropTable("dbo.IdentityUserClaim");
            DropTable("dbo.TwitterUser");
            DropTable("dbo.Tweet");
            DropTable("dbo.TwitterInbox");
            DropTable("dbo.FollowerMapping");
        }
    }
}
