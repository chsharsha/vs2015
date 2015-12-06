using InformationSecurityScorecard.Entities;
using iTextSharp.text;
using iTextSharp.text.pdf;
using System;
using System.Collections.Generic;

using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InformationSecurityScorecard.DocumentGeneration
{
    public class ITextSharpDocGenerator
    {
        public void CreateTable()
        {
            var doc = new Document();
            PdfWriter.GetInstance(doc, new FileStream(@"E:\Data\Doc9.pdf", FileMode.Create));
            
            PdfPTable table = new PdfPTable(3);
            
            PdfPCell cell = new PdfPCell(new Phrase("Header spanning 3 columns Header spanning 3 columns Header spanning 3 columns Header spanning 3 columns Header spanning 3 columns"));
            cell.Colspan = 2;
            cell.HorizontalAlignment = Element.ALIGN_JUSTIFIED;
            //cell.HorizontalAlignment = 0; //0=Left, 1=Centre, 2=Right
            table.AddCell(cell);
            table.AddCell("Other one");
            table.AddCell("Col 1 Row 1");
            table.AddCell("Col 2 Row 1");
            table.AddCell("Col 3 Row 1");
            table.AddCell("Col 1 Row 2");
            table.AddCell("Col 2 Row 2");
            table.AddCell("Col 3 Row 2");
            Font brown = new Font(Font.FontFamily.TIMES_ROMAN , 9f, Font.NORMAL, new BaseColor(163, 21, 21));
            Chunk cc = new Chunk("Yesss..finally i got brown", brown);
            
            Paragraph pp = new Paragraph(cc);
            
            doc.Open();
            doc.Add(new Paragraph("This is the report that is based on ..."));
            doc.Add(new Paragraph(System.Environment.NewLine));
            doc.Add(pp);
            doc.Add(new Paragraph(System.Environment.NewLine));
            doc.Add(table);
            //doc.Add(new Paragraph("My first PDF"));
            
            doc.Close();
        }


        public string CreateOrgTable(Organization org)
        {
            var doc = new Document();
            var fileName = @"E:\Data\Doc" + new Random().Next(1, 450) + ".pdf";
            PdfWriter.GetInstance(doc, new FileStream(fileName, FileMode.Create));
            doc.Open();
            Font brown = new Font(Font.FontFamily.TIMES_ROMAN, 14f, Font.BOLD, new BaseColor(163, 21, 21));
            Font bolder = new Font(Font.FontFamily.TIMES_ROMAN, 18f, Font.BOLD, new BaseColor(163, 21, 21));
            Chunk cHead = new Chunk("Information Security Assessment Results for "+org.OrganizationName, bolder);

            Paragraph pHead = new Paragraph(cHead);
            doc.Add(pHead);
            doc.Add(new Paragraph(System.Environment.NewLine));
            doc.Add(new Paragraph(System.Environment.NewLine));

            PdfPTable tableSummary = new PdfPTable(3);
            tableSummary.HorizontalAlignment = 0;
            tableSummary.TotalWidth = 500f;
            tableSummary.LockedWidth = true;
            tableSummary.AddCell("Number of Responses");
            tableSummary.AddCell("% in Compliance");
            tableSummary.AddCell("% in Non Compliance");
            tableSummary.AddCell(org.TotalResponseCount.ToString());
            tableSummary.AddCell(org.OrgLevelYesScore.ToString("0.00") + " %");
            tableSummary.AddCell(org.OrgLevelNoScore.ToString("0.00") + " %");

            doc.Add(tableSummary);
            doc.Add(new Paragraph(System.Environment.NewLine));
            doc.Add(new Paragraph(System.Environment.NewLine));

            PdfPTable questionsTable;
            PdfPCell cell;
            PdfPCell cell2;
            foreach (var i in org.qs)
            {
                doc.Add(new Paragraph(System.Environment.NewLine));
                doc.Add(new Paragraph(System.Environment.NewLine));

                questionsTable = new PdfPTable(4);
                questionsTable.HorizontalAlignment = 0;
                questionsTable.TotalWidth = 500f;
                questionsTable.LockedWidth = true;
                Chunk ck = new Chunk(i.QuestionSecDescription + "---Total in Compliance : " + i.sectionLevelYes.ToString("0.00") + " % -- Total in non compliance :" + i.sectionLevelNo.ToString("0.00") + " %", brown);
                cell = new PdfPCell(new Phrase(ck));
                
                cell.Colspan = 4;
                cell.HorizontalAlignment = Element.ALIGN_JUSTIFIED;
                
                questionsTable.AddCell(cell);
                foreach (var qsn in i.QsnList)
                {
                    cell2 = new PdfPCell(new Phrase(qsn.QuestionDescription));
                    cell2.Colspan = 2;
                    cell.HorizontalAlignment = Element.ALIGN_JUSTIFIED;
                    questionsTable.AddCell(cell2);
                    questionsTable.AddCell(qsn.YesPercentage.ToString("0.00") + " %");
                    questionsTable.AddCell(qsn.NoPercentage.ToString("0.00") + " %");
                   
                }
                doc.Add(questionsTable);
                doc.Add(new Paragraph(System.Environment.NewLine));
                doc.Add(new Paragraph(System.Environment.NewLine));

            }
            

            doc.Close();
            return fileName;
        }
    }
}
